/*  import React, { useContext ,useState,useEffect} from 'react'
import { SocketContext } from './SocketMessages';
import { useLocation } from 'react-router-dom';

/* const SendSocketmessages = ({socket,user_id}) => {
   const [to, setto] = useState("")
   const [message, setmessage] = useState("")
   const [allmessages, setallmessages] = useState([])


useEffect(()=>{
socket.on("message",(data)=>{
    console.log(data)
    setallmessages([...allmessages,data])
})
return ()=>{}

},[allmessages])
const sendMessage=()=>{
    socket.emit("message",{to,from:user_id,message})
}


  return (
    <div>
        <h2>send message</h2>
        <input placeholder='message' onChange={(e)=>{setmessage(e.target.value)}}/>
        <input placeholder='to' onChange={(e)=>{setto(e.target.value)}}/>
        <button onClick={()=>{sendMessage()}}>Send</button>
{allmessages.length>0 && allmessages.map(message=>{
    return <p>
        {" "}
        <small>
        from {message.from}{message.message}
        </small>
    </p>
})}


    </div>
  )
}

export default SendSocketmessages  
 */


/* const SendSocketmessages = ({ socket, user_id,seller_id}) => {
    const [to, setTo] = useState(seller_id);
    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState([]); */



//const socket=useContext(SocketContext)
  /*   useEffect(() => {
        const messageHandler = (data) => {
            console.log(data);
            setAllMessages(prevMessages => [...prevMessages, data]); 
        };

        socket.on("message", messageHandler);

        return () => {
            socket.off("message", messageHandler); 
        };
    }, [socket]);
    console.log("Sending message to:", seller_id)
   
    const sendMessage = () => {
        if (message.trim() && to.trim()) {
            socket.emit("message", { to, from: user_id, message });
            setMessage(""); 
        }
    }; */
    

   /*  return (
        <div>
            <h2>Send Message</h2>
            <input
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            /> */
           {/*  <input
                placeholder='to'
                value={to}
                onChange={(e) => setTo(e.target.value)}
            /> */}
     /*      
            <button onClick={sendMessage}>Send</button>
            {allMessages.length > 0 && allMessages.map((msg, index) => (
                <p key={index}>
                    <small>
                        From {msg.from}: {msg.message}
                    </small>
                </p>
            ))}
        </div>
    );
} */
    import React, { useContext, useState, useEffect } from 'react';
    import { SocketContext } from './SocketMessages';
import { registerContext } from '../App';
import { useLocation,useParams  } from 'react-router-dom' 
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, List, ListItem } from '@mui/material';

    
    const SendSocketmessages = ({ seller_id }) => {
        const {token}=useContext(registerContext)
        const {socket,connectAsUser } = useContext(SocketContext);
        const [message, setMessage] = useState("");
        const [allMessages, setAllMessages] = useState([]);
        const [userinfo, setuserinfo] = useState([])
        const [isModalOpen, setIsModalOpen] = useState(false)
        const [userFirstname, setuserFirstname] = useState("")
        const [userLastname, setuserLastname] = useState("")
        const user_id = token ? JSON.parse(atob(token.split('.')[1])).userId : null
        //const {seller_id} = useParams(); 

    console.log("Seller ID:", seller_id)

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/userinfo/${user_id}`).then((res)=>{
          
          console.log(res.data.user)
          setuserinfo(res.data.user)
          setuserFirstname(res.data.user.firstName)
          setuserLastname(res.data.user.lastName)

        }).catch((err)=>{
          //seterror1(err.response.data.message)
          console.log(err)
        
      })},[])  



console.log(userFirstname,userLastname)


        useEffect(() => {
            
            if (!socket) {
                console.error("Socket is not initialized");
                return;
            }
            if (socket) {
                socket.emit('joinRoom', `room-${seller_id}`); 
                console.log(`User joined room: room-${seller_id}`);
            }
    
            const messageHandler = (data) => {
                const { from, to, message,senderFirstname, senderLastname } = data;
                console.log(`Received message from User ID: ${from}, to Seller ID: ${to}`)


                console.log("Received message:", data);
                setAllMessages(prevMessages => [...prevMessages, data]);
            };
    
            socket.on("message", messageHandler);
    
            return () => {
                socket.off("message", messageHandler);
            };
        }, [socket,seller_id]);
    
        const sendMessage = () => {
            if (message.trim()) {
                socket.emit("message", { to: seller_id, from: user_id, message,senderFirstname: userFirstname, 
                    senderLastname: userLastname });
                console.log("Message sent:", { to: seller_id, from: user_id, message ,  senderFirstname: userFirstname, 
                    senderLastname: userLastname
                })
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
    };
    
    
    

export default SendSocketmessages; 
