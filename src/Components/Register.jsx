import { Button, Checkbox,FormControl, FormLabel, Input, Box, VStack, Select, Heading, Text, HStack, IconButton, Icon } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';




const Register = () => {
  const navigate= useNavigate();

  const initialValue = {
    username: '',
    firstName: '',
    lastName: '',
    age: NaN,
	 select: '',
    phone:'',
    email: '',
    school: '',
    address: '',
    password: '',
    tick:false,
 };

 const [formValues, setFormValues]= useState(initialValue);
 
 const handleSubmit= (e) => {
	e.preventDefault();
	const user= JSON.stringify(formValues);
	sessionStorage.getItem('user') === null 
	? sessionStorage.setItem('user', user)
	: (sessionStorage.removeItem('user'),
	sessionStorage.setItem('user', user));
	navigate('/Login')
 }

 const handleChange =(e) => {
  const {name,value,type, checked} = e.target;
      setFormValues({...formValues,[name]: type === 'checkbox' ? checked: value });
  console.log(formValues);
 }


  return (
   <>
   	<Nav/>
		<Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' pt='30'
				pb={'20'}>
			<Box 
				w={['full', 'md']}
				p={[8,10]}
				pt='30'
				pb={'20'}
				mx='auto'
				border={['none', '1px']}
				borderColor={['','grey.300']}
				borderRadius={10}
				as={'form'}
				onSubmit={handleSubmit}
			>
				<VStack spacing='4' align='flex-start' w='full'>
					<VStack spacing='1' align={'center'} w='full' mb='3'>
					<Heading  fontSize={'5xl'}>Sign Up</Heading>
					<Text>Enter your details to Register</Text>
				</VStack>
				<FormControl isRequired>
					<FormLabel>User Name</FormLabel>
					<Input rounded='none' variant='filled'
					type={'text'} 
					name={'username'}
					placeholder={'User name'}  
					value={formValues.username}  
					onChange={handleChange}
					/>
						
					
					<FormLabel mt='3'>First Name</FormLabel>
					<Input rounded='none' variant='filled'
					type={'text'} 
					name={'firstName'}
					placeholder={'First name'}
					value={formValues.firstname}  
					onChange={handleChange}
					/>
					

					<FormLabel mt='3'>Last Name</FormLabel>
					<Input rounded='none' variant='filled'
					type={'text'} 
					name={'lastName'}
					placeholder={'Last name'}
					value={formValues.lastname}  
					onChange={handleChange}
					/>
		
					<FormLabel mt='3'>Age</FormLabel>
					<Input rounded='none' variant='filled'
					type={'number'} 
					placeholder={'Age'}
					name={'age'}
					value={formValues.age}  
					onChange={handleChange}/>
					

					<FormLabel mt='3'>Gender</FormLabel>
					<Select placeholder='Select a Gender' variant='filled'
					name={'select'}
					value={formValues.select}  
					onChange={handleChange}>
						<option>Male</option>
						<option>Female</option>
						<option>Others</option>
					</Select>
					
					<FormControl>
					<FormLabel mt='3'>News Categories</FormLabel>
					<Checkbox pr={'2'} align={'flex-start'}
					checked={formValues.tick} 
					type= {'checkbox'}
					name={'tick'}
					onChange={handleChange}
					>
					Entertainment
					</Checkbox>

					<Checkbox pr={'2'} align={'flex-start'}
					checked={formValues.tick} 
					type= {'checkbox'}
					name={'tick'}
					onChange={handleChange}
					>
					Sports
					</Checkbox>

					<Checkbox pr={'2'}  align={'flex-start'}
					checked={formValues.tick} 
					type= {'checkbox'}
					name={'tick'}
					onChange={handleChange}
					>
					Music
					</Checkbox>
					<Checkbox pr={'2'} align={'flex-start'}
					checked={formValues.tick} 
					type= {'checkbox'}
					name={'tick'}
					onChange={handleChange}
					>
					Education
					</Checkbox>
					<Checkbox pr={'2'} align={'flex-start'}
					checked={formValues.tick} 
					type= {'checkbox'}
					name={'tick'}
					onChange={handleChange}
					>
					Politics
					</Checkbox>
					<Checkbox pr={'2'} align={'flex-start'}
					checked={formValues.tick} 
					type= {'checkbox'}
					name={'tick'}
					onChange={handleChange}
					>
					Foreign
					</Checkbox>
					</FormControl>
					
					
					
					<FormLabel mt='3'>Phone</FormLabel>
					<Input rounded='none' variant='filled'
					type={'number'} 
					placeholder={'Phone'}
					name={'phone'}
					value={formValues.phone}  
					onChange={handleChange}
					/>
					
		
					<FormLabel mt='3'>Email</FormLabel>
					<Input rounded='none' variant='filled'
					type={'text'} 
					placeholder={'Email'}
					name={'email'}
					value={formValues.email}  
					onChange={handleChange}
					/>
					

					<FormLabel mt='3'>School</FormLabel>
					<Input rounded='none' variant='filled'
					type={'text'} 
					placeholder={'School'}
					name={'school'}
					value={formValues.school}  
					onChange={handleChange}
					/>
		
					<FormLabel mt='3'>Address</FormLabel>
					<Input variant='filled'
					size={'lg'}
					type={'text'}
					placeholder={'Address'}
					name={'address'}
					value={formValues.address}  
					onChange={handleChange}
					/>
		
					<FormLabel mt='3'>Password</FormLabel>
					<Input rounded='none' variant='filled'
					type={'password'} 
					placeholder={'Password'}
					name={'password'}
					value={formValues.password}  
					onChange={handleChange}
					
					/>
						
				</FormControl>
			</VStack>
			
			<HStack w='full' justify='space-between' mt='3'>
					<Checkbox isRequired align={'flex-start'}
					checked={formValues.tick} 
					type= {'checkbox'}
					name={'tick'}
					onChange={handleChange}
					>
					Remember Password
					</Checkbox>
			</HStack>

			<Text mt='3'> All ready have an account? <Link to='/Login'> Log In</Link></Text>
			<Button mt='3' colorScheme={'blue'}  w={['full','full']} type='submit'> Submit </Button>
			</Box>
		</Box>
		<Footer/>
   </>
   )
  
}

export default Register