import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Nav from './Nav';

const UserProfile = () => {
  const [userdata, setUserData]= useState({});
  
   useEffect(() => {
    const registerData= sessionStorage.getItem('user');
    const userInfo=JSON.parse(registerData);
    setUserData(userInfo);
  },[]);
  
  return (
    <>
        <Nav/>
        <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
				pb={'20'} width={'100%'} >
          <VStack spacing='1' align={['center']} w='full' pt={'5'}>
            <Heading align={['center']}>Welcome to your PRESH BLOG Dashboard</Heading>
            <Text fontSize={'3xl'}>Home of quality contents</Text>
            <Text>See your details below;</Text>
          </VStack>
          <Box w= {{base:'80%', md:'70%', lg:'70%'}} m={'auto'} mt={{base:'5', md:'20', lg:'20'}}  mb={{base:'5', md:'20', lg:'20'}}bgColor='whitesmoke' padding='10' >
            <Text padding={'3'}>Username: {userdata.username}</Text>
            <Text padding={'3'}>Full Name: {userdata.firstName} {userdata.lastName}</Text>
            <Text padding={'3'}>Age: {userdata.age}</Text>
            <Text padding={'3'}>Gender: {userdata.select}</Text>
            <Text padding={'3'}>Phone: {userdata.phone}</Text>
            <Text padding={'3'}>Email: {userdata.email}</Text>
            <Text padding={'3'}>School: {userdata.school}</Text>
            <Text padding={'3'}>Address: {userdata.address}</Text>
            <Text padding={'3'}>Password: {userdata.password}</Text>
          </Box>
        </Box>
        <Footer/>
   </>
  )
}

export default UserProfile