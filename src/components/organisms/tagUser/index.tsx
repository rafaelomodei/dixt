import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Img,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import useDevices from '../../../hooks/useDevices';
import { createAvatar } from '@dicebear/core';
import { botttsNeutral } from '@dicebear/collection';
import { useEffect } from 'react';

interface ILetter {
  userName?: string;
}

const TagUser = ({ userName }: ILetter) => {
  const { isDesktop } = useDevices();

  const seed: string[] = [
    'Midnight',
    'Muffin',
    'Baby',
    'Bear',
    'Simon',
    'Dusty',
    'Lola',
    'Snowball',
    'Lucy',
    'Loki',
    'Chester',
    'Mittens',
    'Sammy',
    'Molly',
    'Snickers',
    'Toby',
    'Jack',
    'Gracie',
    'Cuddles',
    'Kitty',
  ];
  const avatar = createAvatar(botttsNeutral, {
    seed: seed[Math.floor(Math.random() * seed.length)],
  });

  const avatarUri = avatar.toDataUriSync();

  return (
    <Tag size='lg' colorScheme='whatsapp' borderRadius='full' p={2} m={2}>
      <Avatar src={avatarUri} name='Aegun Adebayo' size='xs' />
      <TagLabel ml={2}>{userName}</TagLabel>
    </Tag>
  );
};

export default TagUser;
