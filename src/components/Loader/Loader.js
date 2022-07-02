import React from 'react'
import {HStack,Heading,Spinner} from 'native-base';

function Loader() {
  return (
    <HStack space={4} justifyContent="center" alignItems="center">
    <Spinner  size="lg"/>
    <Heading color="primary.500" fontSize="md">
      Loading
    </Heading>
    </HStack>
  )
}

export default Loader