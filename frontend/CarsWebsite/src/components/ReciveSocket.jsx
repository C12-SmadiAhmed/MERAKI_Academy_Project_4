import React, { useContext, useState, useEffect,useRef  } from 'react';
import { SocketContext } from './SocketMessages';
import { registerContext } from '../App';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, List, ListItem } from '@mui/material';

const ReceiveSocketMessages = () => {
    const [userFirstname, setuserFirstname] = useState("")
        const [userLastname, setuserLastname] = useState("")
    const { token } = useContext(registerContext);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const user_id = token ? JSON.parse(atob(token.split('.')[1])).userId : null;
    const { socket, connectAsSeller } = useContext(SocketContext);
    
    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState([]);
    const customerIdRef = useRef(null)

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/userinfo/${user_id}`).then((res)=>{
          
          console.log(res.data.user)
          setuserFirstname(res.data.user.firstName)
          setuserLastname(res.data.user.lastName)

        }).catch((err)=>{
          //seterror1(err.response.data.message)
          console.log(err)
        
      })},[])  



console.log(userFirstname,userLastname)







    useEffect(() => {
        if (socket) {
            
            socket.emit('joinRoom', `room-${user_id}`);
            console.log(`Seller joined room: room-${user_id}`);
            console.log("Socket connected:", socket.id);
            
            const messageHandler = (data) => {
                const { from, to, message,senderFirstname, senderLastname } = data;
                console.log(`Received message from User ID: ${from}, to Seller ID: ${to}`);
                
                 customerIdRef.current=from
                console.log(customerIdRef.current)
                
                setAllMessages(prevMessages => [...prevMessages, data]);
            };
        
            socket.on("message", messageHandler);
        
            return () => {
                socket.off("message", messageHandler);
            };
        } else {
            console.log("Socket is not connected.");
        }
    }, [socket, user_id]);

    const sendMessage = () => {
        const customerId=customerIdRef.current
        if (message.trim() && user_id) {
            socket.emit("message", { to: customerId ,from: user_id, message ,
                senderFirstname: userFirstname, 
                senderLastname: userLastname
            });
            setMessage(""); 
        }
    };

    return (
        <div>
        <Button variant="outlined" onClick={() => setIsModalOpen(true)}>Open Chat</Button>
        <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="sm" fullWidth>
            <DialogTitle>Messages</DialogTitle>
            <DialogContent>
                <List>
                    {allMessages.map((msg, index) => (
                        <ListItem key={index}>
                            <Typography variant="body2">
                                {msg.senderFirstname} {msg.senderLastname}: {msg.message}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
                <TextField
                    placeholder='Reply'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                <Button onClick={sendMessage} color="primary">Send</Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export default ReceiveSocketMessages;
