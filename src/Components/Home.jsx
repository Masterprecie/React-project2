import React from 'react'
import { Text, Box, Button} from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>		
		<Box  bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' height={{ base: '100vh', md:'100vh', lg:'100vh'}} w='100%' >
		<Nav/>
			<Box display={'flex'} pb={{base:'50', md:'50', lg:'80'}}  pt={{base:'100', md:'50', lg:'100'}} textAlign='center' alignItems='center' flexDirection=
			{{ sm: 'column',
              md: 'column',
              lg: 'column',
              xl: 'column',
              base: 'column'}}>
				<Text color={'white'} fontSize={{base:'20px', md: '45px', lg:'45px'}} fontWeight='bold'>INTERESTING NEWS</Text>
				<Text color={'white'} fontSize={{base:'20px', md: '45px', lg:'45px'}} fontWeight='bold'>IN OUR NEWSLETTER </Text>
				<Text fontSize={{base:'15px', md: '35px', lg:'35px'}}>Be the FIRST to get first hand information!</Text>	
				<Text fontSize={{base:'10px', md: '25px', lg:'25px'}}>	Signup to get the full preview and information</Text>	
				<Button mt='5'><Link to='/Register'>Get Started</Link></Button>
			</Box>
		</Box>
		<Footer/>
   </>
  )
}

export default Home