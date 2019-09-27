import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 80px auto;

  h1 {
    font-size: 1.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
