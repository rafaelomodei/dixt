import { Avatar, Box, Tag, TagLabel } from '@chakra-ui/react';
import { createAvatar } from '@dicebear/core';
import { botttsNeutral } from '@dicebear/collection';
import { GiCardPickup, GiCardJoker } from 'react-icons/gi';

interface ILetter {
  userName?: string;
  isPlaying?: boolean;
  hasCardSelected?: boolean;
}

const TagUser = ({ userName, isPlaying = false, hasCardSelected }: ILetter) => {
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
  const isPlayingAndHasCardSelected = isPlaying && hasCardSelected;
  return (
    <Tag
      size='lg'
      colorScheme={isPlayingAndHasCardSelected ? 'whatsapp' : 'gray'}
      borderRadius='full'
      p={2}
      m={2}
    >
      <Avatar src={avatarUri} name='Aegun Adebayo' size='xs' />
      <TagLabel ml={2}>{userName}</TagLabel>
      <Box ml={2} mr={1}>
        {isPlayingAndHasCardSelected ? (
          <GiCardJoker size={24} />
        ) : (
          <GiCardPickup size={24} />
        )}
      </Box>
    </Tag>
  );
};

export default TagUser;
