import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import img from '../../assets';
import useDevices from '../../hooks/useDevices';

const Home = () => {
  const { isDesktop } = useDevices();

  return (
    <Flex
      w='100vw'
      h='100vh'
      alignItems='center'
      p={isDesktop ? 16 : 4}
      backgroundImage={img.backgroundLandingPage}
      backgroundRepeat='no-repeat'
      backgroundSize='auto'
      backgroundPosition={isDesktop ? 'right' : 'center'}
    >
      <Box
        bg='#0f0e0e99'
        backdropFilter='blur(2px)'
        padding={8}
        borderRadius={8}
      >
        <Box>
          <Heading ml={-1} size={isDesktop ? '4xl' : '3xl'}>
            Dixit Quântico
          </Heading>
          <Text fontSize='lg' mt={2}>
            Você consegue decifrar esse enigima ?
          </Text>
        </Box>
        <Button mt='20px' w='100%'>
          Jogar agora
        </Button>
      </Box>
      {/* <Image src={img.backgroundLandingPage} /> */}
    </Flex>
  );
};

export default Home;
