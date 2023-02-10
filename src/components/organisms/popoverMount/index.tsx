import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
} from '@chakra-ui/react';

import FocusLock from 'react-focus-lock';

interface IPopoverMount {
  childrenTrigger: React.ReactNode;
  isOpen?: boolean;
  showArrow?: boolean;
  showCloseButton?: boolean;
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
  header?: string | React.ReactNode;
  body?: string | React.ReactNode;
  footer?: string | React.ReactNode;
}

const PopoverMount = ({
  childrenTrigger,
  showArrow = false,
  showCloseButton = false,
  isOpen = false,
  closeOnBlur = true,
  closeOnEsc = true,
  header,
  body,
  footer,
}: IPopoverMount) => {
  return (
    <Popover isOpen={isOpen} closeOnBlur={closeOnBlur} closeOnEsc={closeOnEsc}>
      <PopoverTrigger>
        <Stack >{childrenTrigger}</Stack>
      </PopoverTrigger>
      <PopoverContent>
        <FocusLock returnFocus persistentFocus={false}>
          {showArrow && <PopoverArrow />}
          {showCloseButton && <PopoverCloseButton />}
          {header && <PopoverHeader>{header}</PopoverHeader>}
          {body && <PopoverBody>{body}</PopoverBody>}
          {footer && <PopoverFooter>{footer}</PopoverFooter>}
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverMount;
