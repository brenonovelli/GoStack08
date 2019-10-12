import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }
    strong {
      color: #fff;
      font-size: 1.25rem;
      margin: 0 1rem;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-top: 2rem;
  }
`;
export const Time = styled.li`
  padding: 1.25rem;
  border-radius: 4px;
  background-color: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 1.25rem;
    font-weight: normal;
  }
  span {
    display: block;
    margin-top: 0.25rem;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
