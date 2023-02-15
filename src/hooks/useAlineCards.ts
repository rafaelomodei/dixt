import { WIDTH_CARD } from '../utils/constants';
import useWindowDimensions from './windowDimesionHook';

interface IAlineCards {
  isOverflowCards: boolean;
}

function useAlineCards(totalCards: number): IAlineCards {
  const { width } = useWindowDimensions();

  const isOverflowCards = totalCards * WIDTH_CARD >= width;

  return { isOverflowCards };
}

export default useAlineCards;
