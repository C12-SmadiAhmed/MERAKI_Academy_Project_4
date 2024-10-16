import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { registerContext } from "../App";

const SellerMessages = () => {
  const { token } = useContext(registerContext);
  const [messages, setMessages] = useState([]);
  const [reply, setreply] = useState("")
  const [replyto, setreplyto] = useState(null)
  const [notification, setNotification] = useState("")
  const sellerId = token ? JSON.parse(atob(token.split(".")[1])).userId : null;

 
  useEffect(() => {
    axios
      .get(`http://localhost:5000/messages/seller/${sellerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
        console.log(result.data.sentMessage);
        setMessages(result.data.sentMessage);
       
      })
      .catch((err) => {});
  }, []);

  const checkReply=(messageId)=>{
    setreplyto(messageId)

  }

  
  const replybutton=()=>{
setreply(reply)

const body={
  message: reply , 
  mainMessageId:replyto , 
  sellerId:sellerId,
 
}
axios.post("http://localhost:5000/messages/reply", body ,
  {
    headers:{
      Authorization:`Bearer ${token}`
      
    }
  }).then((result)=>{
    console.log(result)
    console.log(result.status)
    setNotification("Reply sent successfully!");
    setreply("");
    setreplyto(null);
    setTimeout(() => {
      setNotification("");
    }, 3000);
  })
  .catch((err) => {
    console.error(err);
  });
 

}


  return (
    <div className="messages-page">
    <h2>Your Messages</h2>
    {notification && <div className="notification">{notification}</div>}
    {messages.length === 0 ? (
      <p>No messages received.</p>
    ) : (
      <ul>
        {messages.map((msg) => (
          <div key={msg._id} className="message">
            <div className="message-header">
              <span>
                {msg.firstName} {msg.lastName}
              </span>
              <span className="message-info">
                {new Date(msg.createdAt).toLocaleString()}
              </span>
            </div>
            <div className="message-body">
              <p>{msg.message}</p>
            </div>
            <div className="message-footer">
              <p>Email: {msg.email}</p>
              <p>Phone: {msg.phoneNumber}</p>
              <button id="replybutton" onClick={() => checkReply(msg._id)}>Reply</button>
            </div>
            {msg.replies && msg.replies.length > 0 && (
              <div className="replies">
                <h4>Replies:</h4>
                {msg.replies.map(reply => (
                  <div key={reply._id} className="reply">
                    <span>{reply.message}</span>
                    <span className="reply-info">
                      {new Date(reply.createdAt).toLocaleString()} - Seller
                    </span>
                  </div>
                ))}
              </div>
            )}
            {replyto === msg._id && (
              <div className="reply-input">
                <input
                  id="write-reply"
                  value={reply}
                  onChange={(e) => setreply(e.target.value)}
                  placeholder="Write your reply..."
                />
                <button id="sendreply" onClick={replybutton}>Send Reply</button>
              </div>
            )}
          </div>
        ))}
      </ul>
    )}
  </div>
);
};

export default SellerMessages;
