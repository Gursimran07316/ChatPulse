import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    // const toast = useToast();
    // const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [loading, setLoading] = useState(false);
  return (
    <VStack spacing="10px">
    <FormControl isRequired id="email">
  <FormLabel>Email address</FormLabel>
  <Input type='email' placeholder='Enter Your Email Address' />
</FormControl>
<FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
<Button   colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}>Login</Button>
        <Button
        variant="solid"
        colorScheme="red"
        width="100%"
       
      >
        Get Guest User Credentials
      </Button>
</VStack>
  )
}

export default Login