import {
  Alert,
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
} from '@chakra-ui/react';
import useDevices from '../../../hooks/useDevicesHook';
import { GiCardRandom } from 'react-icons/gi';
import { RiSendPlaneFill } from 'react-icons/ri';

import { useState } from 'react';

interface ILetter {
  userName?: string;
  isSelected?: boolean;
  imgSelected?: string;
}

const MainCard = ({ userName, isSelected = false, imgSelected }: ILetter) => {
  const { isDesktop } = useDevices();

  const [isActive, setIsActive] = useState(Boolean(imgSelected));

  return (
    <Card
      m={2}
      variant='outline'
      w={isSelected ? '160px' : '96px'}
      h={isSelected ? '208px' : '128px'}
      backgroundImage={imgSelected}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='center'
    >
      <CardBody
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        {!isActive && (
          <>
            <GiCardRandom size={64} />
            <Text textAlign='center' mt={2}>
              Selecione uma carta a baixo
            </Text>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default MainCard;
