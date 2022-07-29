import React from 'react'
import { Button, Checkbox, FormControl, FormLabel, Input, Box, VStack, Heading, Text, HStack } from '@chakra-ui/react'
import { useState, useEffect} from 'react'
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate= useNavigate();


 const [username, setUserName]= useState('');
 const [email, setEmail]= useState('');
 const [password, setPassword]= useState('');
 const [tick, setTick]= useState('');
 const [userdata, setUserData]= useState({});


useEffect(() => {
  const registerData= sessionStorage.getItem('user');
  const userInfo=JSON.parse(registerData);
  setUserData(userInfo);
},[]);

console.log(userdata);

const handleSubmit= (e) => {
  e.preventDefault();
  if (userdata?.username ===username && userdata?.password === password){
    navigate('/UserProfile')
  } else {
    console.log('Incorrect detaais');
  }
};

// useEffect(() => {
//   console.log(formErrors);
//   if (Object.keys(formErrors).length === 0 && isSubmit) {console.log(formValues);
//   }
// }, [formErrors]);

// const validate = (values) => {
//   const errors = {};
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//   if (!values.username) {
//     errors.username = "Username is required!";
//   }
//   if (!values.email) {
//     errors.email = "Email is required!";
//   } else if (!regex.test(values.email)) {
//     errors.email = "This is not a valid email format!";
//   }
//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 4) {
//     errors.password = "Password must be more than 4 characters";
//   } else if (values.password.length > 10) {
//     errors.password = "Password cannot exceed more than 10 characters";
//   }
//   return errors;
// };

  return (
    
    <>
      <Nav/>
      <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' pt='30'
			pb={'20'}>
        <Box
				w={['full', 'md']}
				p={[8,10]}
				mt={[20, '10vh']}
				mb={'20'}
				mx='auto'
				border={['none', '1px']}
				borderColor={['','grey.300']}
				borderRadius={10}
				as={'form'}
				onSubmit={handleSubmit}
         >
         <VStack spacing='4' align='flex-start' w='full'>
            <VStack spacing='1' align={['flex-start', 'center']} w='full' mb='3'>
            <Heading>Login</Heading>
            <Text>Enter Your Details to Login</Text>
          </VStack>
          <FormControl isRequired>
            <FormLabel mt='4'>User Name</FormLabel>
            <Input rounded='none' variant='filled'
            type={'text'} 
            name={'username'}
            placeholder={'User name'}  
            value={username}  
            onChange={(e) => setUserName(e.target.value)}
            />
           
    
            <FormLabel mt='4'>Email</FormLabel>
            <Input rounded='none' variant='filled'
            type={'text'} 
            placeholder={'Email'}
            name={'email'}
            value={email}  
            onChange={(e) => setEmail(e.target.value)}
            />
           

            
            <FormLabel mt='4'>Password</FormLabel>
            <Input rounded='none' variant='filled'
            type={'password'} 
            placeholder={'Password'}
            name={'password'}
            value={password}  
            onChange={(e) => setPassword(e.target.value)}
            />
            {/* <Text color='Red'> {formErrors.password}</Text> */}

          </FormControl>
         </VStack>

         <HStack w='full' justify='space-between' mt='4'>
				<Checkbox isRequired align={'flex-start'}
					checked={tick} 
					type= {'checkbox'}
					name={'tick'}
          onChange={(e) => setTick(e.target.value)}
					>
					Remember Password
				</Checkbox>
			</HStack>
        
          <Text mt='4'>Don't have an account? <Link to='/Register' colorScheme={'blue'}> Sign Up </Link> </Text> 
          <Button mt='4' colorScheme={'blue'}  w={['auto','full']} type='submit'> Submit</Button>
        </Box>
      </Box>
    </>
  )
}

export default Login