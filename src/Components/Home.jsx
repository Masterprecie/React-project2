import React from 'react'
import { Text, Box, Container, Button} from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
		
		<Box  bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' height={'100vh'}>
		<Nav/>
			<Box display={'flex'} textAlign='center' alignItems='center' flexDirection={'column'} pt='200'>
				<Text color={'white'} fontSize={'45'} fontWeight='bold'>INTERESTING NEWS</Text>
				<Text color={'white'} fontSize={'45'} fontWeight='bold'>IN OUR NEWSLETTER </Text>
				<Text color='' fontSize={'30'}>Be the FIRST to get first hand information!</Text>	
				<Text fontSize={'25'}>	Signup to get the full preview and information</Text>	
				<Button mt='5'><Link to='/Register'>Get Started</Link></Button>
			</Box>
		</Box>
		<Footer/>
   </>
  )
}

export default Home