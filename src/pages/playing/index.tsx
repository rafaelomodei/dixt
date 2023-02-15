import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Image,
  Input,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Card from '../../components/organisms/card';
import PopoverMount from '../../components/organisms/popoverMount';
import useDevices from '../../hooks/useDevices';
import { BiHelpCircle } from 'react-icons/bi';

import MainCard from '../../components/organisms/mainCard';
import useStyledCard from '../../hooks/useStyledCard';
import { ContainerCards } from './styled';
import useAlineCards from '../../hooks/useAlineCards';
import img from '../../assets';

const cardsMOCK: Array<string> = [
  'https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
  'https://www.pcworld.com/wp-content/uploads/2022/09/mhachman_a_castle_on_an_asteroid_floating_through_space_2315526d-252b-40df-9a6d-eeb00aed612f.png?resize=1024%2C1024&quality=50&strip=all',
  'https://b2868580.smushcdn.com/2868580/wp-content/uploads/2022/12/Midjourney-Bot-Commands.png?lossy=0&strip=1&webp=1',
  'https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
  'https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
  'https://www.pcworld.com/wp-content/uploads/2022/09/mhachman_a_castle_on_an_asteroid_floating_through_space_2315526d-252b-40df-9a6d-eeb00aed612f.png?resize=1024%2C1024&quality=50&strip=all',
  'https://b2868580.smushcdn.com/2868580/wp-content/uploads/2022/12/Midjourney-Bot-Commands.png?lossy=0&strip=1&webp=1',
  'https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
  'https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
  'https://www.pcworld.com/wp-content/uploads/2022/09/mhachman_a_castle_on_an_asteroid_floating_through_space_2315526d-252b-40df-9a6d-eeb00aed612f.png?resize=1024%2C1024&quality=50&strip=all',
  'https://b2868580.smushcdn.com/2868580/wp-content/uploads/2022/12/Midjourney-Bot-Commands.png?lossy=0&strip=1&webp=1',
  'https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
  'https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
  'https://www.pcworld.com/wp-content/uploads/2022/09/mhachman_a_castle_on_an_asteroid_floating_through_space_2315526d-252b-40df-9a6d-eeb00aed612f.png?resize=1024%2C1024&quality=50&strip=all',
  'https://b2868580.smushcdn.com/2868580/wp-content/uploads/2022/12/Midjourney-Bot-Commands.png?lossy=0&strip=1&webp=1',
  'https://www.howtogeek.com/wp-content/uploads/2022/08/MidJourney-wizard-hall.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
];

// const cardsMOCK: Array<string> = [
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
//   img.backgroundLandingPage,
// ];

const Playing = () => {
  const { isDesktop, isMobile } = useDevices();
  const [yourTurnToPlay, setYourTurnToPlay] = useState<boolean>(false);
  const [phrase, setPhrase] = useState<string>('');
  const [imgCardSelected, setImgSelectedCard] = useState<string>('');

  // const selectedCard = useRef<HTMLDivElement | null>(null);
  const { selectedCard, setSelectedCard } = useStyledCard();
  const { isOverflowCards } = useAlineCards(cardsMOCK.length);

  const handlePhraseInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhrase(e.target.value);

  const handleTitle = (): string => {
    if (yourTurnToPlay) return ' É a sua vez!';
    return 'mensagem! bla aaa aaasss sss';
  };

  const renderFormControl = (): JSX.Element => (
    <FormControl
      isInvalid={Boolean(phrase) && phrase.length < 3}
      flexDirection='column'
      mt='24px'
    >
      <Center>
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
      </Center>
      <FormErrorMessage
        justifyContent='center'
        fontWeight='bold'
        textAlign='center'
      >
        Escreva uma palavra ou frase que tenha pelomenos 3 caráter
      </FormErrorMessage>
    </FormControl>
  );

  const handleInputMessafeOrient = (): JSX.Element => {
    if (yourTurnToPlay) return renderFormControl();
    return (
      <Text textAlign='center' mb='24px'>
        Escolha uma carta que mais representa a frase a cima
      </Text>
    );
  };

  const handleDisableButton = (): boolean => {
    if (yourTurnToPlay) return Boolean(phrase.length < 3) || !selectedCard;
    return !selectedCard;
  };

  return (
    <Flex
      h='100vh'
      flexDirection='column'
      justifyContent='center'
      p={isDesktop ? 16 : 4}
      // overflowX='hidden'
    >
      <Center flexDirection='column' w='100%'>
        <Center flexDirection='column' w='100%'>
          <Box mb='8px'>
            <Heading
              size={isDesktop ? '2xl' : 'xl'}
              fontWeight='bold'
              textAlign='center'
            >
              {handleTitle()}
            </Heading>
          </Box>
        </Center>
        <Box w='100%' display='flex' flexDirection='column' alignItems='center'>
          {handleInputMessafeOrient()}
          <MainCard imgSelected={imgCardSelected} />
          <Button
            isDisabled={handleDisableButton()}
            colorScheme={handleDisableButton() ? 'gray' : 'whatsapp'}
            w={isMobile ? '100%' : '160px'}
            h={isMobile ? '60px' : undefined}
            position={isMobile ? 'absolute' : undefined}
            bottom={isMobile ? 0 : undefined}
            borderRadius={isMobile ? 0 : undefined}
          >
            Pronto!
          </Button>
        </Box>
        <ContainerCards isOverflow={isOverflowCards}>
          {cardsMOCK.map((card, index) => (
            <Card
              key={index}
              img={card}
              getRefCard={setSelectedCard}
              getImage={setImgSelectedCard}
            />
          ))}
        </ContainerCards>
        {isMobile && !yourTurnToPlay && <Box h='40px' />}
      </Center>
    </Flex>
  );
};

export default Playing;
