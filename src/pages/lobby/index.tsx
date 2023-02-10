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
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import TagUser from '../../components/organisms/tagUser';
import useDevices from '../../hooks/useDevices';
import { MdOutlineCopyAll } from 'react-icons/md';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

const Lobby = () => {
  const { isDesktop } = useDevices();
  const [codeRom, setCodeRom] = useState<string>('');
  const [randomNames, setRandomNames] = useState<string[]>([
    uniqueNamesGenerator({
      dictionaries: [names],
    }),
  ]);

  const toast = useToast();

  const handleUserNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCodeRom(e.target.value);

  useEffect(() => {
    const numUsers = Math.floor(Math.random() * 20);
    const arrayNames: string[] = [];

    for (let i = 0; i < numUsers; i++) {
      const randomName = uniqueNamesGenerator({
        dictionaries: [names],
      });

      arrayNames.push(randomName);
    }
    setRandomNames([...randomNames, ...arrayNames]);

    console.info(randomNames);
  }, []);

  return (
    <Flex w='100vw' h='100vh' alignItems='center' p={isDesktop ? 16 : 4}>
      <Center flexDirection='column' w='100%'>
        <Box mb='36px'>
          <Heading
            size={isDesktop ? '2xl' : 'xl'}
            fontWeight='bold'
            textAlign='center'
          >
            Aguardando os jogadores entrarem...
          </Heading>
        </Box>
        <Text textAlign='center' mb={2}>
          Compartilhar sala
        </Text>

        <Button
          borderRadius={16}
          rightIcon={<MdOutlineCopyAll />}
          fontWeight={300}
          onClick={() =>
            toast({
              title: 'Link da sala copiado',
              variant: isDesktop ? 'left-accent' : 'solid',
              position: 'top-right',
              isClosable: true,
              status: 'success',
            })
          }
        >
          https://www.mydixit/join-rom/4567ABC
        </Button>
        <Flex flexWrap='wrap' justifyContent='center' mt={8}>
          {randomNames.map((name) => {
            console.info('name: ', name);
            return <TagUser userName={name} />;
          })}
        </Flex>
      </Center>
    </Flex>
  );
};

export default Lobby;
