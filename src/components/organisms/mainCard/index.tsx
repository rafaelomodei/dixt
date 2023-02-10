import {
  Alert,
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
} from '@chakra-ui/react';
import useDevices from '../../../hooks/useDevices';
import { GiCardRandom } from 'react-icons/gi';
import { RiSendPlaneFill } from 'react-icons/ri';

import { useState } from 'react';

interface ILetter {
  imgSelected?: string;
}

const MainCard = ({ imgSelected }: ILetter) => {
  return (
    <Card
      m={2}
      variant='outline'
      w='160px'
      h='208px'
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
        {!imgSelected && (
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
