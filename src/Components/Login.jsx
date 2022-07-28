import React from 'react'
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Box, VStack, Heading, Text, HStack } from '@chakra-ui/react'
import { useState, useEffect} from 'react'
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate= useNavigate();

  const initialValue = {
    username: '',
    email: '',
    password: '',
    tick:false,
 };

 const [formValues, setFormValues]= useState(initialValue);
 const [formErrors, setFormErrors]= useState({});
const [isSubmit, setIsSubmit] = useState(false);


 const handleChange =(e) => {
  const {name,value,type, checked} = e.target;
      setFormValues({...formValues,[name]: type === 'checkbox' ? checked: value });
  console.log(formValues);
 }

 const handleSubmit= (e) => {
  e.preventDefault();
  const user= JSON.stringify(formValues);
  sessionStorage.getItem('user') ===null && sessionStorage.setItem('user', user);
  // navigate('/Login')
  setFormErrors(validate(formValues));
  setIsSubmit(true);
}

useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {console.log(formValues);
  }
}, [formErrors]);

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};

  return (
    
    <>
      <Nav/>
      <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' pt='30'
			pb={'20'}>
     
    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
   
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
            value={formValues.username}  
            onChange={handleChange}
            />
            <Text color='Red'> {formErrors.username}</Text>
    
            <FormLabel mt='4'>Email</FormLabel>
            <Input rounded='none' variant='filled'
            type={'text'} 
            placeholder={'Email'}
            name={'email'}
            value={formValues.email}  
            onChange={handleChange}
            />
           <Text color='Red'> {formErrors.email}</Text>

            
            <FormLabel mt='4'>Password</FormLabel>
            <Input rounded='none' variant='filled'
            type={'password'} 
            placeholder={'Password'}
            name={'password'}
            value={formValues.password}  
            onChange={handleChange}
            />
            {/* <Text color='Red'> {formErrors.password}</Text> */}

          </FormControl>
         </VStack>

         <HStack w='full' justify='space-between' mt='4'>
				<Checkbox isRequired align={'flex-start'}
					checked={formValues.tick} 
					type= {'checkbox'}
					name={'tick'}
					onChange={handleChange}
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