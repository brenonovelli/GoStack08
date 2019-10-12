import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  position: relative;
  z-index: 2;
`;
export const Content = styled.div`
  height: 4rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      color: #7159c1;
      background: linear-gradient(90deg, #7159c1, #ab59c1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 1.25rem;
  padding-left: 1.25rem;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #230187;
      font-size: 0.825rem;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 0.75rem;
      color: #999;
    }
  }
  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
