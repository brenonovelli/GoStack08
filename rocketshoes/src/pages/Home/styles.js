import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const fade = keyframes`
  0%{
    opacity: .2;
  }
  50%{
    opacity: .1;
  }
  100%{
    opacity: .2;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;
  list-style: none;

  &:empty {
    animation: ${fade} 2s ease-in-out infinite;

    height: 424px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#ccc 100%, transparent 0),
      linear-gradient(#aaa 100%, transparent 0),
      linear-gradient(#aaa 100%, transparent 0),
      linear-gradient(#aaa 100%, transparent 0),
      linear-gradient(#666 100%, transparent 0);

    opacity: 0.1;
    background-size: 29% 62%, 29% 1.25rem, 15% 1rem, 29% 3rem, 32% 100%;
    background-position: 97.5% 5%, 97.5% 70%, 81.5% 76%, 97.5% 96%, top right;

    position: relative;

    &:after,
    &:before {
      content: '';
      height: 424px;

      background-repeat: no-repeat;
      background-image: linear-gradient(#ccc 100%, transparent 0),
        linear-gradient(#aaa 100%, transparent 0),
        linear-gradient(#aaa 100%, transparent 0),
        linear-gradient(#aaa 100%, transparent 0),
        linear-gradient(#666 100%, transparent 0);

      background-size: 92% 62%, 92% 1.25rem, 50% 1rem, 92% 3rem, 100% 100%;
      background-position: 50% 5%, 50% 70%, 8% 76%, 50% 96%, top center;
    }
  }

  li {
    min-height: 424px;
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
