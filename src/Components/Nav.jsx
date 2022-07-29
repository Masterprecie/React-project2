import { Flex, List, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'



const Nav = () => {
  return (
   <Flex align={'center'}
   justifyContent='space-between'
   backgroundColor={'gray.700'}
   padding='5'
   >
   <Text fontWeight={'bold'} fontSize={{base:'1xl', md:'3xl', lg:'4xl'}} color='white' >PRESH BLOG</Text>
      <List display={'flex'} 
      fontWeight={'bold'}
      gap='5'>
         <NavLink style={({isActive}) => isActive  ? {color: 'white'} : {color: 'blue'}} to='/' > Home</NavLink>
         <NavLink style={({isActive}) => isActive  ? {color: 'white'} : {color: 'blue'}} to='/Register'> Register</NavLink>
         <NavLink style={({isActive}) => isActive  ? {color: 'white'} : {color: 'blue'}} to='/Login'> Login</NavLink>
      </List>
   </Flex> 
  )
}

export default Nav