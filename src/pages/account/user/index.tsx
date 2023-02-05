import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { isValidUserName } from '../../../utils/helpers/login';

interface IUserField {
  getUser: React.Dispatch<React.SetStateAction<string>>;
  isValidCurrentUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserField = ({ getUser, isValidCurrentUser }: IUserField) => {
  const [userName, setUserName] = useState<string>('');

  const handleUserNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    getUser(e.target.value);
  };

  return (
    <>
      <Center flexDirection='column' w='100%'>
        <Box mb='36px'>
          <Heading
            size={true ? '2xl' : 'xl'}
            fontWeight='bold'
            textAlign='center'
          >
            Nome de usuário
          </Heading>
        </Box>
        <Box maxW='250px' w='100%'>
          <FormControl
            isInvalid={Boolean(userName) && !isValidUserName(userName)}
            flexDirection='column'
          >
            <Input
              type='text'
              placeholder='Digite seu nome de usuário'
              value={userName}
              onChange={handleUserNameInput}
              colorScheme='whatsapp'
              variant='unstyled'
              textAlign='center'
              autoFocus
              mb={4}
            />
            {userName && !isValidUserName(userName) && (
              <FormErrorMessage justifyContent='center' fontWeight='bold'>
                Nome de usuário inválido
              </FormErrorMessage>
            )}

            <Button
              colorScheme={userName ? 'whatsapp' : 'gray'}
              disabled={!isValidUserName(userName)}
              onClick={() => isValidCurrentUser(isValidUserName(userName))}
              w='100%'
              mt={4}
            >
              Próximo
            </Button>
          </FormControl>
        </Box>
      </Center>
    </>
  );
};

export default UserField;
