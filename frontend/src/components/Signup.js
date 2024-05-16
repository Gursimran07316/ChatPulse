import { FormControl, FormLabel, Input, InputRightElement, VStack,Button, InputGroup } from '@chakra-ui/react';
import React, { useState } from 'react'

const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    
    const [password, setPassword] = useState();
  return (
    <VStack spacing="10px">
          <FormControl isRequired id="name">
  <FormLabel>Name</FormLabel>
  <Input type='text' placeholder='Enter Your Name' />
</FormControl>
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
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
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
      <FormControl  id="pic">
  <FormLabel>Upload your picture</FormLabel>
  <Input type='file' />
</FormControl>
<Button   colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}>Signup</Button>

</VStack>
  )
}

export default Signup