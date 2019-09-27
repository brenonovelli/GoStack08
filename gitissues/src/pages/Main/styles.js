import styled, { keyframes } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  position: relative;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;

    transition: all 0.25s ease-in;
  }
  span {
    font-size: 0.625rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(110%);
    color: #ff6b6b;
  }
`;

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #230187;
  border: 0;
  padding: 0 1rem;
  margin-left: 10px;
  border-radius: 0.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    opacity: 0.75;
    cursor: not-allowed;
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 2rem;

  li {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #230187;
      text-decoration: none;
    }
    button {
      margin-left: 0.5rem;
      color: #ff6b6b;
    }
  }
`;
