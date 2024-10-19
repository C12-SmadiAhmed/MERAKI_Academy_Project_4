 import React , {useState , useEffect,createContext, useContext} from 'react'
import socketInit from './soket.server'
import { registerContext } from '../App'

import SendSocketmessages from './SendSocketmessages'
import { useLocation,useParams  } from 'react-router-dom'
import ReceiveSocketMessages from './ReciveSocket'

export const SocketContext=createContext()
const SocketMessages = ({ children }) => {
   
    const [socket, setsocket] = useState(null)
    const [isconnected, setisconnected] = useState(false)
const {token}=useContext(registerContext)
const user_id= token ? JSON.parse(atob(token.split('.')[1])).userId : null
const { seller_id } = useParams();
    console.log("Seller ID:", seller_id);
    

useEffect(() => {
    const newSocket = socketInit({ user_id, token });
    setsocket(newSocket);
console.log("Socket initialized:", newSocket)
    newSocket.on("connect", () => {
        console.log("socket connected");
        setisconnected(true);
        newSocket.emit('joinRoom', `room-${seller_id}`);
    });

    newSocket.on("connect_error", (error) => {
        console.log(error.message);
        setisconnected(false);
    });

    return () => {
        newSocket.close();
        newSocket.removeAllListeners();
        setisconnected(false);
    };
}, [user_id, token]);
  return (
    <SocketContext.Provider value={{ socket }}>
   {children}
</SocketContext.Provider>

  )
}

export default SocketMessages  



