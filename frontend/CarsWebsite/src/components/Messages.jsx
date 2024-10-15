import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { registerContext } from '../App';

const SellerMessages = () => {
    const { token } = useContext(registerContext);
    const [messages, setMessages] = useState([]);
    const sellerId = token ? JSON.parse(atob(token.split('.')[1])).userId : null;

    useEffect(() => {
        axios.get(`http://localhost:5000/messages/seller/${sellerId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then((result)=>{
                    console.log(result)
                    console.log(result.data.sentMessage)
                   setMessages(result.data.sentMessage)

                }).catch((err)=>{

                })
                
             
    }, []);

    return (
        <div>
            <h2>Your Messages</h2>
            {messages.length === 0 ? (
                <p>No messages received.</p>
            ) : (
                <ul>
                    {messages.map((msg) => (
                        <div key={msg._id}>
             <p> {msg.firstName} {msg.lastName} sent you a meesage</p>
                  <p>{msg.message}</p>
                  <p>{msg.createdAt}</p>

                  <p>{msg.firstName} Email and phone number:</p>
                  <p> {msg.email}</p>
                  <p> {msg.phoneNumber}</p>


                


                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SellerMessages;