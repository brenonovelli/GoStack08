import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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
    a {
      color: #fff;
      font-size: 0.75rem;
      margin-top: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
