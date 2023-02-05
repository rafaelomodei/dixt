import { Center, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import useDevices from '../../hooks/useDevicesHook';
import { isValidEmail } from '../../utils/helpers/login';
import EmailField from './email';
import PasswordField from './password';
import UserField from './user';

interface IAccount {
  isCreateUser?: boolean;
}

const Account = ({ isCreateUser = false }: IAccount) => {
  const { isDesktop } = useDevices();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>();
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isValidUser, setIsValidUser] = useState<boolean>(false);

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleRender = (): JSX.Element | undefined => {
    if (isCreateUser && !isValidUser)
      return (
        <UserField getUser={setEmail} isValidCurrentUser={setIsValidUser} />
      );

    if (!isValidEmail)
      return (
        <EmailField getEmail={setEmail} isValidCurrentEmail={setIsValidEmail} />
      );

    return (
      <PasswordField
        getPassword={setEmail}
        isValidCurrentPassword={setIsValidEmail}
        isCreateUser={isCreateUser}
      />
    );
  };

  return (
    <Flex w='100vw' h='100vh' alignItems='center' p={isDesktop ? 16 : 4}>
      <Center flexDirection='column' w='100%'>
        {handleRender()}
      </Center>
    </Flex>
  );
};

export default Account;
