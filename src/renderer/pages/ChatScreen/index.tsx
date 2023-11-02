import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
// import { Send } from "@mui/material";
import axios from 'axios';
import ProfilePic from 'renderer/assets/png/profile.jpg';
import styles from './styles.module.css';

import { API_URL } from 'config';
import Dashboard from 'renderer/components/Dashboard';
import PageTopbar from 'renderer/components/PageTopbar';
import AllconversationListMessage from './allUserData';
import { AuthContext } from 'renderer/contexts/AuthContext';

function ChatScreen() {
  const containerRef = useRef(null);
  const [conversationList, setConversationList] = useState<any>([]);
  const [searchTxt, setSearchTxt] = useState<any>('');
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<any>('');
  const [sid, setSid] = useState<any>('');
  const [channel, setChannel] = useState<any>(null);
  const [isMessage, setIsMessage] = useState(false);
  const [conversationEmail, setConversationEmail] = useState<any>({});

  const token = localStorage.getItem('Authorization');
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${API_URL}/chat/getallconversation?limit=2000`)
      .then(function (response) {
        if (response?.status == 200) {
          console.log(response?.data?.data);

          setConversationList(response.data.data);
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

  const getAllMessage = (sid: any) => {
    axios
      .get(`${API_URL}/chat/getallmsg/${sid}?limit=2000`)
      .then(function (response) {
        if (response?.status == 200) {
          console.log(response?.data?.data);
          setMessages(response?.data?.data);
          setIsMessage(false);
          // setConversationList(response.data.data);
        }
      });
  };

  const handleConversation = (sidData: any) => {
    setIsMessage(true);
    setMessages([]);
    setSid(sidData?.sid || sid);
    setConversationEmail(sidData);
    getAllMessage(sidData?.sid);
  };

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
      axios
        .post(
          `${API_URL}/chat/sendmsg/${sid}`,
          {
            email: userData?.user?.email,
            msg: newMessage,
          },
          {
            headers: {
              'ngrok-skip-browser-warning': '69420',
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response?.data?.data);
          if (response?.status == 200) {
            getAllMessage(sid);
          }
        });
    }
  };

  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <PageTopbar.HeaderText>Message</PageTopbar.HeaderText>
        </PageTopbar>
        <div style={{ height: '90vh' }}>
          <Stack direction="row" sx={{ height: '90%', overflow: 'auto' }}>
            <AllconversationListMessage
              conversationList={conversationList}
              setSearchTxt={setSearchTxt}
              searchTxt={searchTxt}
              handleConversation={handleConversation}
            />
            <Box sx={{ width: '100%', padding: '10px 10px' }}>
              {sid && (
                <>
                  <Box>
                    <div
                      style={{
                        padding: '10px',
                        background: '#3a3a3a',
                        marginBottom: '10px',
                        borderRadius: '8px',
                      }}
                    >
                      {conversationEmail?.friendlyName}
                    </div>
                  </Box>
                  <Box
                    ref={containerRef}
                    sx={{
                      height: '65vh',
                      overflowY: 'auto',
                      background: '#3a3a3a',
                    }}
                  >
                    {isMessage ? (
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '60vh',
                        }}
                      >
                        Loading . . .
                      </div>
                    ) : messages?.length > 0 ? (
                      messages?.map((chat: any, index: any) => {
                        return (
                          <Box
                            key={index}
                            style={{
                              display: 'flex',
                              padding: '0 5px',
                              justifyContent:
                                chat?.author === userData?.user?.email
                                  ? 'end'
                                  : 'start',
                            }}
                          >
                            {/* <Avatar
                              alt="Remy Sharp"
                              src={ProfilePic}
                            /> */}
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
                      })
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '60vh',
                        }}
                      >
                        No chat Found Start Chatting
                      </div>
                    )}
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
                    <TextField
                      value={newMessage}
                      placeholder="Type your message here"
                      onChange={(e) => setNewMessage(e.target.value)}
                      id="standard-basic"
                      fullWidth
                      variant="standard"
                    />
                    {/* <ChatComposer
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
                    <SendButtonPlugin onClick={submitMessage} />
          <EnterKeySubmitPlugin onKeyDown={submitMessage} />
                  <ClearEditorPlugin />
                  <EnterKeyPlugin onEnterKeyPress={onEnterKeyPress} />
                  </ChatComposer> */}

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
                </>
              )}
            </Box>
          </Stack>
        </div>
      </section>
    </Dashboard>
  );
}

export default ChatScreen;
