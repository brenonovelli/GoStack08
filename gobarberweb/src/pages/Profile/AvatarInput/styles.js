import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 2rem;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    img {
      height: 7.5rem;
      width: 7.5rem;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background-color: #eee;
      display: block;
    }

    input {
      display: none;
    }
  }
`;
