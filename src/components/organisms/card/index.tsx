import { Button } from '@chakra-ui/react';

interface ILetter {
  userName?: string;
  isSelected?: boolean;
}

const Card = ({ userName, isSelected = false }: ILetter) => {
  return (
    <Button
      m={2}
      variant='outline'
      w={isSelected ? '160px' : '96px'}
      h={isSelected ? '208px' : '128px'}
    >
      {userName}
    </Button>
  );
};

export default Card;
