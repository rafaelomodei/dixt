import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import useDevices from '../../hooks/useDevices';

const SelectLogin = () => {
  const { isDesktop } = useDevices();

  return (
    <Flex w='100vw' h='100vh' alignItems='center' p={isDesktop ? 16 : 4}>
      <Center flexDirection='column' w='100%'>
        <Box maxW='250px' w='100%'>
          <Center flexDirection='column' w='100%'>
            <Box mb='36px'>
              <Heading size={isDesktop ? '2xl' : 'xl'} fontWeight='bold'>
                Entrar
              </Heading>
            </Box>
            <Button colorScheme='whatsapp' w='100%'>
              Já tenho uma conta
            </Button>

            <Text mb='8px' mt='8px'>
              ou
            </Text>

            <Button variant='outline' colorScheme='gray' w='100%'>
              Criar minha conta
            </Button>
          </Center>
        </Box>
      </Center>
    </Flex>
  );
};

export default SelectLogin;
