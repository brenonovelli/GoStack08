import styled from 'styled-components';

export const Container = styled.div`
  width: 940px;
  max-width: 90vw;
  margin: 2rem auto;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    aside {
      nav {
        display: flex;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #f94d6a;
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
  font-weight: bold;
  color: #fff;
  transition: opacity 0.3s ease-in-out;
  + button {
    margin-left: 1rem;
  }
  &:hover {
    opacity: 0.9;
  }
  svg {
    margin-right: 0.5rem;
  }
`;
export const ButtonSecondary = styled(Button)`
  background-color: #4dbaf9;
`;

export const MeetupContent = styled.main`
  img {
    margin-bottom: 1rem;
    border-radius: 0.25rem;
  }
  p + p {
    margin-top: 2rem;
  }
  footer {
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
    display: flex;
    time {
      margin-right: 2rem;
    }
    time,
    address {
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
`;
