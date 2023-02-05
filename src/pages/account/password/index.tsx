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
import { isValidPassword } from '../../../utils/helpers/login';
import { BiShow, BiHide } from 'react-icons/bi';

interface IPasswordField {
  getPassword: React.Dispatch<React.SetStateAction<string>>;
  isValidCurrentPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateUser: boolean;
}

const PasswordField = ({
  getPassword,
  isValidCurrentPassword,
  isCreateUser,
}: IPasswordField) => {
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isMatchPassword = password === passwordConfirm;

  const handlePasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    isConfirmationField: boolean
  ) => {
    if (!isConfirmationField) setPassword(e.target.value);
    else setPasswordConfirm(e.target.value);
    if (isMatchPassword) getPassword(e.target.value);
  };

  const handleMimCharacters = (): JSX.Element | undefined => {
    const isValid = Boolean(password) && isValidPassword(password);

    if (isValid && isMatchPassword) return;

    return (
      <FormErrorMessage
        justifyContent='center'
        textAlign='center'
        fontWeight='bold'
        mt={4}
      >
        {!isValid &&
          !isMatchPassword &&
          'A senha tem que ter no minimo 8 caracteres e ser iguais'}

        {isValid && !isMatchPassword && 'As senhas não são iguais'}
        {!isValid &&
          isMatchPassword &&
          'A senha tem que ter no minimo 8 caracteres!'}
      </FormErrorMessage>
    );
  };

  const handleColorScheme = (): string => {
    if (isCreateUser)
      return isValidPassword(password) &&
        isValidPassword(passwordConfirm) &&
        isMatchPassword
        ? 'whatsapp'
        : 'gray';
    return 'whatsapp';
  };

  const handleDisableButton = (): boolean => {
    if (isCreateUser)
      return (
        !isValidPassword(password) ||
        !isValidPassword(passwordConfirm) ||
        !isMatchPassword
      );
    return !password;
  };

  const renderInput = (
    placeholder: string,
    autoFocus = false,
    isConfirmationField = false
  ): JSX.Element => {
    return (
      <Flex justifyContent='flex-end' alignItems='center'>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={isConfirmationField ? passwordConfirm : password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handlePasswordInput(event, isConfirmationField)
          }
          colorScheme='whatsapp'
          variant='unstyled'
          textAlign='center'
          h='65px'
          autoFocus={autoFocus}
        />
        {!isConfirmationField && (
          <Button
            size='sm'
            position='absolute'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <BiHide /> : <BiShow />}
          </Button>
        )}
      </Flex>
    );
  };

  return (
    <>
      <Center flexDirection='column' w='100%'>
        <Box mb='36px'>
          <Heading size={true ? '2xl' : 'xl'} fontWeight='bold'>
            Senha
          </Heading>
        </Box>

        <Box maxW='250px' w='100%'>
          <FormControl
            isInvalid={
              (Boolean(password) && !isValidPassword(password)) ||
              (Boolean(password) && !isMatchPassword)
            }
            flexDirection='column'
          >
            {renderInput('Digite sua senha', true)}
            <Box h={8} />
            {isCreateUser && renderInput('Confirme sua senha', false, true)}

            {isCreateUser && handleMimCharacters()}

            <Button
              loadingText='Entrar'
              colorScheme={handleColorScheme()}
              disabled={handleDisableButton()}
              onClick={() => isValidCurrentPassword(isValidPassword(password))}
              spinnerPlacement='start'
              w='100%'
              mt={4}
            >
              Entrar
            </Button>
          </FormControl>
        </Box>
      </Center>
    </>
  );
};

export default PasswordField;
