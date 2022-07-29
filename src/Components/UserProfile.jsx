import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
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
        <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' pt='30'
				pb={'20'} height='100vh' width={['full', 'full']} >
          <VStack spacing='1' align={['flex-start', 'center']} w='full' mb='3'>
            <Heading>Welcome to your PRESH BLOG Dashboard</Heading>
            <Text>Home of quality contents</Text>
            <Text>See your details below;</Text>
          </VStack>
          <Box w='50%' m={'auto'} bgColor='whitesmoke' padding='10'>
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
   </>
  )
}

export default UserProfile