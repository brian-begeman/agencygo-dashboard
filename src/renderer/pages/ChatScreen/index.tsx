import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
// import { Send } from "@mui/material";
import axios from 'axios';
import styles from './styles.module.css';
const Chat = require('twilio-chat');
import { Client } from 'twilio-chat';
import {
  $getRoot,
  ClearEditorPlugin,
  CLEAR_EDITOR_COMMAND,
  COMMAND_PRIORITY_LOW,
  EditorState,
  KEY_ENTER_COMMAND,
  useLexicalComposerContext,
} from '@twilio-paste/lexical-library';

import { API_URL } from 'config';
import Dashboard from 'renderer/components/Dashboard';
import PageTopbar from 'renderer/components/PageTopbar';
import AllUserDataMessage from './allUserData';
import { ChatComposer } from '@twilio-paste/core/chat-composer';

interface MessagePropPluginProps {
  message: string;
}

const MessagePropPlugin = (props: MessagePropPluginProps) => {
  const { message } = props;
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (message === undefined || message === null || message.length === 0) {
      editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
    }
  }, [editor, message]);

  return null;
};
function ChatScreen() {
  const containerRef = useRef(null);
  const [userData, setUserData] = useState<any>([]);
  const [searchTxt, setSearchTxt] = useState<any>('');
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<any>('');
  const [sid, setSid] = useState<any>('');
  const [channel, setChannel] = useState<any>(null);
  const token = sessionStorage.getItem('Authorization');

  useEffect(() => {
    axios
      .get(
        'https://agencygo-server-production-7f8475c1a038de7b.elb.us-east-2.amazonaws.com/' +
          '/chat/getallconversation',
        {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        }
      )
      .then(function (response) {
        if (response?.status == 200) {
          console.log(response?.data?.data);

          setUserData(response.data.data);
        }
      });
  }, []);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const element: any = containerRef.current;
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [containerRef, messages]);

  const handleConversation = (sidData: any) => {
    setMessages([]);
    setSid(sidData?.sid);
    console.log(sidData?.sid);
    axios
      .get(
        `https://8a3f-2405-201-200c-c0e6-99bd-598f-1c5b-52fb.ngrok-free.app/chat/getallmsg/${sidData?.sid||sid}`,
        {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        }
      )
      .then(function (response) {
        if (response?.status == 200) {
          console.log(response?.data?.data);
          setMessages(response?.data?.data);
          // setUserData(response.data.data);
        }
      });
  };
  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, newMessage]);
      setNewMessage('');

      axios
      .post(
        `https://8a3f-2405-201-200c-c0e6-99bd-598f-1c5b-52fb.ngrok-free.app/chat/sendmsg/${sid}`,{
          "email": "testuser001@gmail.com",
          "msg": newMessage
      },
        {
          headers: {
            'ngrok-skip-browser-warning': '69420',
            'Authorization': `Bearer ${token}`
          },
        }
      )
      .then(function (response) {
        if (response?.status == 200) {
          handleConversation(sid)
        }
      });
    }
  };
  // const [conversation, setConversation] = useState<any>(null);
  

  // useEffect(() => {
  //   const Twilio = require('twilio');
  //   const client = Twilio(
  //     'AC043ba2179c12c98863bf78d6332c3477',
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzBlMjdiZTY4ZDdmMTM1OTdjYTAyZjZlZDJhZjVmZWEwLTE2OTg2NTU1NDkiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJkZXZAYWdlbmN5Z28uYWkifSwiaWF0IjoxNjk4NjU1NTQ5LCJleHAiOjE2OTg2NTkxNDksImlzcyI6IlNLMGUyN2JlNjhkN2YxMzU5N2NhMDJmNmVkMmFmNWZlYTAiLCJzdWIiOiJBQzA0M2JhMjE3OWMxMmM5ODg2M2JmNzhkNjMzMmMzNDc3In0.td5Sxlervr3lkAeUncumkUhBg_uAlaFsbyXQ4xAV_qA'
  //   );

  //   // Create or get a conversation between two users
  //   client.conversations.conversations
  //     .list({ uniqueName: 'user1_user2' }) // Replace with a unique conversation name
  //     .then((conversations: any) => {
  //       if (conversations.length > 0) {
  //         setConversation(conversations[0]);
  //       } else {
  //         return client.conversations.conversations.create({
  //           uniqueName: 'user1_user2', // Replace with a unique conversation name
  //           friendlyName: 'User1 and User2 Conversation', // Conversation display name
  //         });
  //       }
  //     })
  //     .then((newConversation: any) => {
  //       setConversation(newConversation);
  //     })
  //     .catch((error: any) => {
  //       console.error('Error fetching or creating conversation: ', error);
  //     });
  // }, []);

  // // Function to send a message in the conversation
  // const sendMessage = ( ) => {
  //   if (conversation) {
  //     conversation.messages.create({
  //       body: newMessage,
  //     });
  //   }
  // };
  // useEffect(() => {
  //   const initTwilioChat = async () => {
  //     try {
  //       // const token = await getToken(); // Implement token retrieval

  //       const client = await Client.create('47a84dff387e9317fceb5a38ebbd7b71');
  //       const channels:any = await client.getSubscribedChannels();

  //       if (channels.length === 0) {
  //         // Create a new channel if none exists
  //         const newChannel:any = await client.createChannel({ uniqueName: 'general' });
  //         setChannel(newChannel);
  //         await newChannel.join();
  //       } else {
  //         setChannel(channels[0]);
  //         await channels[0].join();
  //       }

  //       channel.on('messageAdded', (message:any) => {
  //         setMessages([...messages, message]);
  //       });
  //     } catch (error) {
  //       console.error('Error initializing Twilio Chat:', error);
  //     }
  //   };

  //   initTwilioChat();
  // }, []); // Only run this effect on component mount

  // const getToken = async () => {
  //   // Implement a function to retrieve a Twilio Chat token from your server.
  //   // You'll need to replace this with your own authentication logic.
  // };

  // const handleNewMessageChange = (event:any) => {
  //   setNewMessage(event.target.value);
  // };

  // const onSearchTxtPress = () => {
  //   console.log('button press', searchTxt);
  // };

  const chatInputMemo = useMemo(() => {}, [newMessage]);
  console.log('messages', messages);
  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <PageTopbar.HeaderText>Message</PageTopbar.HeaderText>
        </PageTopbar>
        <div style={{ height: '90vh' }}>
          <Stack direction="row" sx={{ height: '90%', overflow: 'auto' }}>
            <AllUserDataMessage
              userData={userData}
              setSearchTxt={setSearchTxt}
              searchTxt={searchTxt}
              handleConversation={handleConversation}
            />
            <Box sx={{ width: '100%', padding: '10px 10px' }}>
              <Box
                ref={containerRef}
                sx={{
                  height: '73vh',
                  overflowY: 'scroll',
                  background: '#3a3a3a',
                }}
              >
                {messages &&
                  messages?.map((chat: any, index: any) => {
                    return (
                      <Box
                        key={index}
                        style={{
                          display: 'flex',
                          justifyContent:
                            chat?.author === 'testuser001@gmail.com'
                              ? 'end'
                              : 'start',
                        }}
                      >
                        <Typography
                          sx={{
                            maxWidth: '350px',
                            padding: '5px 10px',
                            margin: '5px',
                            background: '#767272',
                            borderRadius: '8px',
                          }}
                        >
                          {chat?.body}
                        </Typography>
                      </Box>
                    );
                  })}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  border: '1px solid white',
                  background: 'white',
                  color: '#000',
                  marginTop: '10px',
                  padding: '10px',
                  borderRadius: '10px',
                }}
              >
                <ChatComposer
                  config={{
                    namespace: 'message-input',
                    onError: (e) => {
                      throw e;
                    },
                  }}
                  ariaLabel="A basic chat composer"
                  onChange={(editorState: EditorState): void => {
                    editorState.read(() => {
                      const text = $getRoot().getTextContent();
                      setNewMessage(text);
                    });
                  }}
                >
                  <ClearEditorPlugin />
                  <MessagePropPlugin message={newMessage} />
                  {/* <SendButtonPlugin onClick={submitMessage} />
          <EnterKeySubmitPlugin onKeyDown={submitMessage} />
                  <ClearEditorPlugin />
                  <EnterKeyPlugin onEnterKeyPress={onEnterKeyPress} /> */}
                </ChatComposer>

                <Button
                  style={{
                    background: '#3ba1ff',
                    borderRadius: '8px',
                    height: '35px',
                    color: '#fff',
                    margin: '7px 10px',
                  }}
                  onClick={() => {
                    handleSendMessage();
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Stack>
        </div>
      </section>
    </Dashboard>
  );
}

export default ChatScreen;
