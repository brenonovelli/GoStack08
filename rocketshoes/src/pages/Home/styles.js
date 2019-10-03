import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 0.25rem;
    padding: 1.25rem;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 1rem;
      line-height: 1.25rem;
      color: #333;
      margin-top: 0.25rem;
    }

    > span {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 0.25rem 0 1.25rem;
    }

    button {
      background: #230187;
      color: #fff;
      border: 0;
      border-radius: 0.25rem;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#230187')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        background: rgba(0, 0, 0, 0.25);
        font-size: 0.875rem;

        svg {
          margin-right: 0.25rem;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.75rem;
      }
    }
  }
`;
