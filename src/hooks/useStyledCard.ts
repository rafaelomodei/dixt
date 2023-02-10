import { useEffect, useState } from 'react';

function useStyledCard() {
  const [selectedCard, setSelectedCard] =
    useState<React.MutableRefObject<HTMLDivElement | null> | null>(null);
  const [selectedCardOld, setSelectedCardOld] =
    useState<React.MutableRefObject<HTMLDivElement | null> | null>(null);

  useEffect(() => {
    if (selectedCard) {
      selectedCardOld &&
        selectedCardOld.current?.style.setProperty('border', '');
      setSelectedCardOld(selectedCard);
      selectedCard.current?.style.setProperty('border', '2px solid #65e495');
    }
    console.info('selectedCard: ', selectedCard);
  }, [selectedCard]);

  return { selectedCard, setSelectedCard };
}

export default useStyledCard;
