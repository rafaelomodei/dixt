import { Stack } from '@chakra-ui/react';
import styled from 'styled-components';

interface IContainerCards {
  isOverflow: boolean;
}

export const ContainerCards = styled(Stack)<IContainerCards>`
  && {
    display: block;
    white-space: nowrap;
    overflow-x: auto;
    width: ${({ isOverflow }) => (isOverflow ? '100%' : 'auto')};
    margin-top: 16px;
    div {
      margin-left: 16px;
    }
  }
`;
