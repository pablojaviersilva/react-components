import styled from 'styled-components';
import { CardProps } from './card.props';

const StyledCard = styled.div<CardProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  > * {
    display: block;
    position: relative;
  }

  > header, > footer {
    flex: none;
    overflow: none;
  }

  > main {
    flex: auto;
  }

  ${({ expand }) =>
    expand &&
    `
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  `}

  &:not([scroll-x]) > main,
  &[scroll-x='hidden'] > main {
    overflow-x: hidden;
  }

  &[scroll-x='auto'] > main {
    overflow-x: auto;
  }

  &[scroll-x='scroll'] > main {
    overflow-x: scroll;
  }

  &:not([scroll-y]) > main,
  &[scroll-y='hidden'] > main {
    overflow-y: hidden;
  }

  &[scroll-y='auto'] > main {
    overflow-y: auto;
  }

  &[scroll-y='scroll'] > main {
    overflow-y: scroll;
  }

  &.flexibleWorkspace {
    ${({ expand }) =>
      expand &&
      `
      display: flex;
      flex: 1;
      position: static;
    `}
  }
`;

export default StyledCard;
