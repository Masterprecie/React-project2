import { Button, Checkbox,FormControl, FormLabel, Input, Textarea, Box, VStack, Select, Heading, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';

const Register = () => {
  const navigate= useNavigate();

  const initialValue = {
    username: '',
    firstName: '',
    lastName: '',
    age: 0,
	 select: '',
    phone:'',
    email: '',
    school: '',
    description: '',
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
  navigate('/Login')
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
					<VStack spacing='1' align={['flex-start', 'center']} w='full' mb='3'>
					<Heading>Sign Up</Heading>
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
						<p>{formErrors.username}</p>
					
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
					<Select placeholder='Select a Gender'
					name={'select'}
					value={formValues.select}  
					onChange={handleChange}>
						<option>Male</option>
						<option>Female</option>
						<option>Others</option>
					</Select>
					
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
						<p>{formErrors.email}</p>


					<FormLabel mt='3'>School</FormLabel>
					<Input rounded='none' variant='filled'
					type={'text'} 
					placeholder={'School'}
					name={'school'}
					value={formValues.school}  
					onChange={handleChange}
					/>
		
					<FormLabel mt='3'>Description</FormLabel>
					<Textarea
					size={'lg'}
					type={'text'}
					placeholder={'Description'}
					name={'description'}
					value={formValues.description}  
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
						<p>{formErrors.password}</p>
				</FormControl>
			</VStack>

			<HStack w='full' justify='space-between' mt='3'>
					<Checkbox align={'flex-start'}
					checked={formValues.tick} 
					type= {'checkbox'}
					name={'tick'}
					onChange={handleChange}
					>
					Remember Password
					</Checkbox>
			</HStack>

			<Text mt='3'> All ready have an account? <Link to='/Login'> Log In</Link></Text>
			<Button mt='3' colorScheme={'blue'}  w={['auto','full']} type='submit'> Submit </Button>
			
			</Box>
		</Box>
   </>
   )
  
}

export default Register