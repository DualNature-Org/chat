import { Box, Typography } from '@mui/material'
import React from 'react'

const date = new Date();

const Message = ({title, message}) => {
  return (
    <React.Fragment>
        <Box sx={{backgroundImage: "linear-gradient(to right, #19117c, #4d47a4)", color:'white', padding:'10px', borderRadius:'10px', width:'60%', marginBottom:'20px', borderBottomLeftRadius: '0.8rem 0.7rem', borderLeft:'1rem solid #292185', boxShadow: 3}}>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='body1'>{message}</Typography>
            {/* <Typography variant='body2'>{date}</Typography> */}
        </Box>
    </React.Fragment>
  )
}

export default Message