import { Card as CardChakra, CardBody, useCardStyles } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

interface ICard {
  img: string;
  getRefCard: React.Dispatch<
    React.SetStateAction<React.MutableRefObject<HTMLDivElement | null> | null>
  >;
  getImage: React.Dispatch<React.SetStateAction<string>>;
  isSelected?: boolean;
}

const Card = ({ img, getRefCard, getImage, isSelected = false }: ICard) => {
  const refCard = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <CardChakra
      ref={refCard}
      m={2}
      variant='outline'
      w='96px'
      h='128px'
      backgroundImage={img}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='center'
      border={selected ? '2px solid red' : ''}
      role='presentation'
      onClick={() => {
        getImage(img);
        getRefCard(refCard);
      }}
    />
  );
};

export default Card;
