
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Backdrop,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  List,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
// import { Send } from "@mui/material";
import axios from "axios";
// import ChatItem from "./ChatItem";
const Chat = require("twilio-chat");
import Dashboard from "renderer/components/Dashboard";
import { Client } from 'twilio-chat';

 

function ChatScreen() {
  
    const userData=[{name:'John',lastMessages:''},
    {name:'Leo',lastMessages:''},
    {name:'Mikal',lastMessages:''},
  ]
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<any>('');
  const [channel, setChannel] = useState<any>(null);

  useEffect(() => {
    const initTwilioChat = async () => {
      try {
        // const token = await getToken(); // Implement token retrieval

        const client = await Client.create('47a84dff387e9317fceb5a38ebbd7b71');
        const channels:any = await client.getSubscribedChannels();

        if (channels.length === 0) {
          // Create a new channel if none exists
          const newChannel:any = await client.createChannel({ uniqueName: 'general' });
          setChannel(newChannel);
          await newChannel.join();
        } else {
          setChannel(channels[0]);
          await channels[0].join();
        }

        channel.on('messageAdded', (message:any) => {
          setMessages([...messages, message]);
        });
      } catch (error) {
        console.error('Error initializing Twilio Chat:', error);
      }
    };

    initTwilioChat();
  }, []); // Only run this effect on component mount

  const getToken = async () => {
    // Implement a function to retrieve a Twilio Chat token from your server.
    // You'll need to replace this with your own authentication logic.
  };

  const handleNewMessageChange = (event:any) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (channel) {
      channel.sendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <Dashboard>
      <div style={{display:'flex',height:'90vh'}}>
        <div style={{width:'20%'}}>
          {userData?.map((data:any,index:any)=>{ 
            return(
              <Button key={index} style={{width:'100%',height:50,border:'1px solid white',marginBottom:15,color:'white'}}>
              <p>{data.name}</p>
              </Button>
            )
          })}
        </div>

        <div style={{width:'80%',border:'1px solid red'}}>
        <div>
        <div className="chat-container">
          {messages.map((message:any, index:any) => (
            <div key={index}>{message.body}</div>
          ))}
        </div>
        <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
        />
          <button onClick={ handleSendMessage}>Send</button>
        </div>
      </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default ChatScreen;
 