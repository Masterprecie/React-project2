import { Box, Flex, Image, List } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <Box display={'flex'} justifyContent={'space-between'} backgroundColor={'gray.500'} padding='5'>
    <List display={'flex'}
      color='black'
      gap='5'>
         <Link to='/'>Home</Link>
         <Link to='/Register'>Register</Link>
         <Link to='/Login'>Login</Link>
      </List>
      <Box>
      Designed by Ikpa Precious
      </Box>
     
    </Box>
    
    </>
  )
}

export default Footer