import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import SendIcon from "@mui/icons-material/Send";
import { Box, Container } from "@mui/system";
import { List, ListItem, Paper, Typography } from "@mui/material";
import { AddCircleOutlineRounded, MessageSharp } from "@mui/icons-material";
import Message from "./Message";

const Chat = ({ modal, setModal }) => {
  // states
  const [messageText, setMessageText] = useState("");
  const [messageData, setMessageData] = useState([{id:0, message:'hii! I am bot'}]);
  const [conversationData, setConversationData] = useState([messageData]);

  // handling closing of modal
  const handleModal = () => {
    setModal(false);
    console.log(modal);
  };

  // handling textfield input
  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  // handling messages data
  const handleMessageData = () => {
    setMessageData([...messageData, {message:messageText}])
    setMessageText("");
    console.log(messageData);
  };

  // handling conversations || storing all coversations in conversationData
  const handleConversationData = () => {
    setConversationData([...conversationData, {messageData: messageData}])
    setMessageData([{message:'Hii I am bot'}]);
    console.log(conversationData);
  }

  return (
    <React.Fragment>
      <Dialog
        hideBackdrop={true}
        open={modal}
        onClose={handleModal}
        PaperProps={{ sx: { height: "70%", minWidth: "50%" } }}
      >
        <DialogTitle sx={{ backgroundImage: "linear-gradient(to right bottom, #19117c, #281f8d)", color:'white', display:'flex', justifyContent:'space-between' }}>
          {"Start your conversation"}
          <Button size="small" sx={{color:"white"}} onClick={() => handleModal()}>
                <CancelPresentationIcon />
              </Button>
        </DialogTitle>
        <DialogContent sx={{ padding: "0" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              borderTop: "1px solid #C4C4C6",
            }}
          >

            {/* Toolbar */}
            <List
              direction="column"
              spacing={2}
              sx={{
                borderRight: "1px solid #C4C4C6",
                height: "58vh",
                position: "fixed",
                display:{xs:'none', md:'block'}, 
                backgroundColor:'#ededef'
              }}
            >
              <ListItem>
              <Button size="sm" color="success" onClick={() => handleConversationData()}>
                <AddCircleOutlineRounded />
                <Typography sx={{marginLeft:'5px'}}>New</Typography>
              </Button>
              </ListItem>
            </List>

            {/* Workspace */}
            <Stack direction="column" sx={{ marginLeft: "12vw", width: "70%" }}>
              <Paper
                sx={{
                  minHeight: "50vh",
                  boxShadow: "none",
                  paddingTop: "20px",
                  paddingBottom: "50px"
                }}
              >
                {messageData.map(({ id, message }) => (
                  <Message key={message} title="Test User" message={message} />
                ))}
              </Paper>

              {/* Text writing component */}
              <Stack
                component="form"
                noValidate
                autoComplete="off"
                direction="row"
                spacing={2}
                sx={{
                  position: "fixed",
                  marginTop: {xs:"48vh", md:"50vh"},
                  backgroundColor: "white",
                  paddingTop: "9px",
                  paddingBottom: "12px"
                }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Say Hii"
                  value={messageText}
                  onChange={handleChange}
                  name="message"
                  sx={{ width: "29vw" }}
                />
                <Button sx={{backgroundImage: "linear-gradient(to right, #19117c, #4d47a4)"}} variant="contained" onClick={() => handleMessageData()}>
                  <SendIcon />
                </Button>
              </Stack>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Chat;
