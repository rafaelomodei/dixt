import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Card from '../../components/organisms/card';
import PopoverMount from '../../components/organisms/popoverMount';
import useDevices from '../../hooks/useDevicesHook';
import { BiHelpCircle } from 'react-icons/bi';

import MainCard from '../../components/organisms/mainCard';

const Playing = () => {
  const { isDesktop, isMobile } = useDevices();
  const [phrase, setPhrase] = useState<string>('');
  const [selectedCard, setSelectedCard] = useState<boolean>(false);

  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    // onOpen();
  }, []);

  const handlePhraseInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhrase(e.target.value);

  // const handleRenderHeaderPopover = () => (
  //   <Flex alignItems='center'>
  //     <BiHelpCircle size={20} />
  //     <Heading size='xs' ml={2}>
  //       Ajuda
  //     </Heading>
  //   </Flex>
  // );

  // const handleRenderBodyPopover = () => (
  //   <Flex>
  //     <Text>
  //       Caso tenha escrito a frase e selecionado a carta desejada, clique na
  //       carta central para finalizar sua jogada e passar a vez para o próximo
  //       jogador!
  //     </Text>
  //   </Flex>
  // );

  // const handleRenderFooterPopover = () => (
  //   <Flex justifyContent='flex-end'>
  //     <Button onClick={onClose} autoFocus tabIndex={1} colorScheme='whatsapp'>
  //       Ok
  //     </Button>
  //   </Flex>
  // );

  return (
    <>
      <Flex
        h='100vh'
        flexDirection='column'
        justifyContent='center'
        p={isDesktop ? 16 : 4}
      >
        <Center flexDirection='column' w='100%'>
          <Center flexDirection='column' w='100%'>
            <Box mb='36px'>
              <Heading
                size={isDesktop ? '2xl' : 'xl'}
                fontWeight='bold'
                textAlign='center'
              >
                É a sua vez!
              </Heading>
            </Box>
          </Center>
          <Box
            w='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <FormControl
              isInvalid={Boolean(phrase) && phrase.length < 3}
              flexDirection='column'
            >
              <Center>
                {/* {!isMobile && <Box w='85px' bg='green' />} */}
                <Input
                  type='text'
                  placeholder='Digite a sua frase'
                  value={phrase}
                  onChange={handlePhraseInput}
                  colorScheme='whatsapp'
                  variant='unstyled'
                  textAlign='center'
                  autoFocus
                  w='md'
                />
                {/* {!isMobile && handleShowButtonFinished()} */}
              </Center>
              <FormErrorMessage
                justifyContent='center'
                fontWeight='bold'
                textAlign='center'
              >
                Escreva uma palavra ou frase que tenha pelomenos 3 caráter
              </FormErrorMessage>
            </FormControl>
            <MainCard
              userName='Carta selecionada'
              isSelected
              imgSelected='https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1'
            />
            <Button
              // isDisabled={Boolean(phrase.length < 3) || !selectedCard}
              colorScheme={
                Boolean(phrase.length < 3) || !selectedCard
                  ? 'whatsapp'
                  : 'whatsapp'
              }
              w={isMobile ? '100%' : '160px'}
              h={isMobile ? '60px' : undefined}
              position={isMobile ? 'absolute' : undefined}
              bottom={isMobile ? 0 : undefined}
              borderRadius={isMobile ? 0 : undefined}
            >
              Pronto!
            </Button>
          </Box>
          <Flex mt={8} flexDirection='column'>
            <Flex>
              <Card userName='Carta 1' />
              <Card userName='Carta 2' />
              <Card userName='Carta 3' />
            </Flex>
          </Flex>
        </Center>
      </Flex>
    </>
  );
};

export default Playing;
