import styled from 'styled-components';
import { Button as ButtonChakra } from '@chakra-ui/react';
import { theme } from '../../themes';

export const Button = styled(ButtonChakra)`
  && {
    color: white;
    background-color: ${theme.colors.brand.blue};
    height: 48px;
    padding: 24px;

    :hover {
      background-color: ${theme.colors.brand.blue110};
    }

    :active {
      color: ${theme.colors.brand.blue110};
      background-color: ${theme.colors.brand.blue120};
    }
  }
`;
