import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import useDevices from '../../hooks/useDevicesHook';

const CreateRom = () => {
  const { isDesktop } = useDevices();
  const [optionSelected, setOpetionSlected] = useState<number>(1);

  const buttonSelected = (value: number): boolean => value === optionSelected;

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
              Criar uma sala
            </Heading>
          </Box>
          <Text textAlign='center' mb={2}>
            Selecione o número de jogadas por jogador
          </Text>
        </Center>
        <Box
          maxW='250px'
          w='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <ButtonGroup gap={2} mb={9}>
            <Button
              colorScheme={buttonSelected(1) ? 'whatsapp' : 'gray'}
              onClick={() => setOpetionSlected(1)}
            >
              1
            </Button>
            <Button
              colorScheme={buttonSelected(2) ? 'whatsapp' : 'gray'}
              onClick={() => setOpetionSlected(2)}
            >
              2
            </Button>
            <Button
              colorScheme={buttonSelected(3) ? 'whatsapp' : 'gray'}
              onClick={() => setOpetionSlected(3)}
            >
              3
            </Button>
          </ButtonGroup>

          <Button colorScheme='whatsapp' w='100%'>
            Criar uma sala
          </Button>

          <Text mb='8px' mt='8px'>
            ou
          </Text>

          <Button variant='outline' colorScheme='gray' w='100%'>
            Entrar em uma sala já existente
          </Button>
        </Box>
      </Center>
    </Flex>
  );
};

export default CreateRom;
