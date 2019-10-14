import styled, { keyframes } from 'styled-components';

const flash = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
    width: 1.5rem;
    height: 1.5rem;
  }
  100%{
    opacity: 0;
  }
`;
export const Container = styled.div`
  align-self: center;
  margin-bottom: 2rem;

  label {
    cursor: pointer;
    width: 100%;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s opacity ease-in-out;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: rgba(255, 255, 255, 0.3);
      transition: 0.5s color ease-in-out;
      position: relative;
      svg {
        margin-bottom: 0.5rem;
      }
      &::after {
        content: '';
        background-color: white;
        background: white;
        position: absolute;
        top: 4%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.25rem;
        height: 0.25rem;
        border-radius: 50%;
        opacity: 0;
        transition: all 0.3s ease-in;
      }
    }

    &:hover {
      opacity: 0.9;
      span {
        color: #f94d6a;
        &::after {
          animation: ${flash} 0.2s ease-in;
        }
      }
    }

    img {
      width: 100%;
      height: 300px;
      background-color: rgba(0, 0, 0, 0.4);
      display: block;
    }

    input {
      display: none;
    }
  }
`;
