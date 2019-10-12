import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 4rem 0;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 0.25rem;
      height: 2.5rem;
      padding: 0 1rem;
      color: #fff;
      margin: 0 0 0.75rem;
      font-size: 0.75rem;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f64c75;
      align-self: flex-end;
      margin-top: -0.75rem;
      margin-bottom: 0.75rem;
      padding: 0.1rem 0.25rem;
      border-radius: 0 0 0.25rem 0.25rem;
      font-size: 0.75rem;
      background: #fff;
    }

    hr {
      border: 0;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.1);
      margin: 0.625rem 0 1.25rem;
    }
  }

  button {
    margin: 0.25rem 0 0;
    height: 2.5rem;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }

  > button {
    background: #f64c75;
    width: 100%;
    margin-top: 1rem;
    &:hover {
      background: ${darken(0.03, '#f64c75')};
    }
  }
`;
