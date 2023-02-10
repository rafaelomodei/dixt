import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import useDevices from '../../hooks/useDevices';

const JoinRom = () => {
  const { isDesktop } = useDevices();
  const [codeRom, setCodeRom] = useState<string>('');

  const handleUserNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCodeRom(e.target.value);

  return (
    <Flex w='100vw' h='100vh' alignItems='center' p={isDesktop ? 16 : 4}>
      <Center flexDirection='column' w='100%'>
        <Center flexDirection='column' w='100%'>
          <Box mb='36px'>
            <Heading
              size={isDesktop ? '2xl' : 'xl'}
              fontWeight='bold'
              textAlign='center'
            >
              Entrar em uma sala
            </Heading>
          </Box>
        </Center>
        <Box
          maxW='250px'
          w='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <FormControl isInvalid={Boolean(codeRom)} flexDirection='column'>
            <Input
              type='text'
              placeholder='Digite o codigo da sala'
              value={codeRom}
              onChange={handleUserNameInput}
              colorScheme='whatsapp'
              variant='unstyled'
              textAlign='center'
              autoFocus
            />
            <FormErrorMessage justifyContent='center' fontWeight='bold' textAlign='center'>
              Essa sala não existe!
            </FormErrorMessage>
          </FormControl>
          <Button
            isDisabled={!codeRom}
            colorScheme={codeRom ? 'whatsapp' : 'gray'}
            w='100%'
            mt={4}
          >
            Entrar
          </Button>
        </Box>
      </Center>
    </Flex>
  );
};

export default JoinRom;
