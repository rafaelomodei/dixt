import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  Heading,
  Input,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  TagLabel,
  TagRightIcon,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import TagUser from '../../components/organisms/tagUser';
import useDevices from '../../hooks/useDevices';
import { MdOutlineCopyAll } from 'react-icons/md';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

const Result = () => {
  const { isDesktop, isMobile } = useDevices();
  const [randomScore, setRandomScore] = useState<Array<number>>([]);
  const [randomHitCards, setRandomHitCards] = useState<Array<number>>([]);
  const [randomTickedCards, setRandomTickedCards] = useState<Array<number>>([]);

  const [codeRom, setCodeRom] = useState<string>('');

  const [randomNames, setRandomNames] = useState<string[]>([
    uniqueNamesGenerator({
      dictionaries: [names],
    }),
  ]);

  useEffect(() => {
    const numUsers = Math.floor(Math.random() * 50);
    const arrayNames: string[] = [];
    const randomScoreMath: Array<number> = [];
    const randomHitCardsMath: Array<number> = [];
    const randomTickedCardsMath: Array<number> = [];

    for (let i = 0; i < numUsers; i++) {
      const randomName = uniqueNamesGenerator({
        dictionaries: [names],
      });

      arrayNames.push(randomName);
      randomScoreMath.push(Math.floor(Math.random() * 40));
      randomHitCardsMath.push(Math.floor(Math.random() * 10));
      randomTickedCardsMath.push(Math.floor(Math.random() * 5));
    }
    setRandomNames([...randomNames, ...arrayNames]);
    setRandomScore([...randomScore, ...randomScoreMath]);
    setRandomHitCards([...randomHitCards, ...randomHitCardsMath]);
    setRandomTickedCards([...randomTickedCards, ...randomTickedCardsMath]);

    console.info(randomHitCards);
  }, []);

  return (
    <Flex flexDirection='column' alignItems='center' p={isDesktop ? 16 : 4}>
      {/* <Center flexDirection='column' w='100%'> */}
      <Box>
        <Heading
          size={isDesktop ? '2xl' : 'xl'}
          fontWeight='bold'
          textAlign='center'
          mb='36px'
        >
          Fim
        </Heading>
      </Box>
      <Text textAlign='center' mb={4}>
        Continue se divertindo
      </Text>
      <Flex>
        <Button
          variant='ghost'
          colorScheme='whatsapp'
          w={isMobile ? '100%' : '160px'}
          h={isMobile ? '60px' : '48px'}
          position={isMobile ? 'absolute' : undefined}
          bottom={isMobile ? 0 : undefined}
          borderRadius={isMobile ? 0 : undefined}
        >
          Voltar ao início
        </Button>
        <Box w={4} />
        <Button
          colorScheme='whatsapp'
          w={isMobile ? '100%' : '160px'}
          h={isMobile ? '60px' : '48px'}
          position={isMobile ? 'absolute' : undefined}
          bottom={isMobile ? 0 : undefined}
          borderRadius={isMobile ? 0 : undefined}
        >
          Jogar novamente
        </Button>
      </Flex>

      <Stack mt={16} border='1px solid gray' borderRadius={16}>
        <TableContainer>
          <Table variant='striped' colorScheme='green'>
            <TableCaption>Tabela com pontuação da partida</TableCaption>
            <Thead>
              <Tr>
                <Th isNumeric>Posição</Th>
                <Th>Jogadores</Th>
                <Th isNumeric>Pontuação</Th>
                <Th isNumeric>Cartas acertadas</Th>
                <Th isNumeric>Cartas enganadas</Th>
              </Tr>
            </Thead>
            <Tbody>
              {randomNames.map((player, index) => (
                <Tr>
                  <Td textAlign='center'>{index + 1}</Td>
                  <Td>{player}</Td>
                  <Td textAlign='center'>{randomScore[index]}</Td>
                  <Td textAlign='center'>{randomHitCards[index]}</Td>
                  <Td textAlign='center'>{randomTickedCards[index]}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
      {/* </Center> */}
    </Flex>
  );
};

export default Result;
