import React, { useState } from "react";
import Container from "@mui/material/Container";
import logo from "../assets/logo_wobby.png";
import Chat from "./Chat";
import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";

const Bot = () => {
    // states
  const [modal, setModal] = useState(false);

  // animation 
  const animationWobby = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10%);
  }
`;

  return (
    <Box
      maxWidth={false}
      sx={{
        borderRadius: "50%",
        width: "10%",
        height: "20%",
        position: "fixed",
        bottom: "20%",
        right: "15%",
        cursor: "pointer",
        animation: `${animationWobby} 1s linear infinite alternate`,
      }}
    >
      <img src={logo} alt="wobby" width="150px" onClick={() => setModal(!modal)} />
      <Chat modal={modal} setModal={setModal} />
    </Box>
  );
};

export default Bot;
