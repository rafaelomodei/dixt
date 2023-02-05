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
import { isValidEmail } from '../../../utils/helpers/login';

interface IEmailField {
  getEmail: React.Dispatch<React.SetStateAction<string>>;
  isValidCurrentEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailField = ({ getEmail, isValidCurrentEmail }: IEmailField) => {
  const [email, setEmail] = useState<string>('');

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    getEmail(e.target.value);
  };

  return (
    <>
      <Center flexDirection='column' w='100%'>
        <Box mb='36px'>
          <Heading size={true ? '2xl' : 'xl'} fontWeight='bold'>
            E-mail
          </Heading>
        </Box>
        <Box maxW='250px' w='100%'>
          <FormControl
            isInvalid={Boolean(email) && !isValidEmail}
            flexDirection='column'
          >
            <Input
              type='email'
              placeholder='Digite seu e-mail'
              value={email}
              onChange={handleEmailInput}
              colorScheme='whatsapp'
              variant='unstyled'
              textAlign='center'
              autoFocus
              mb={4}
            />
            {email && !isValidEmail(email) && (
              <FormErrorMessage justifyContent='center' fontWeight='bold'>
                Email invalido!
              </FormErrorMessage>
            )}

            <Button
              colorScheme={email ? 'whatsapp' : 'gray'}
              disabled={!isValidEmail(email)}
              onClick={() => isValidCurrentEmail(isValidEmail(email))}
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

export default EmailField;
