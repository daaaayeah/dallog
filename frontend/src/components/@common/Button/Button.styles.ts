import { css } from '@emotion/react';

const button = css`
  border: none;

  background: transparent;

  font-family: inherit;
  text-align: center;

  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export { button };
