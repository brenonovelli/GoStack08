import styled, { keyframes } from 'styled-components';

const fade = keyframes`
0%{
  opacity: 1;
}
50%{
  opacity: .5;
}
100%{
  opacity: 1;
}
`;
const loadingBarTop = keyframes`
0%{
  width:0;
  left: 0;
}
50%{
  width:100vw;
}
100%{
  width:0;
  right: 0;
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

export const Loading = styled.div`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  span {
    animation: ${fade} 1s linear infinite;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    background: #fff;
    opacity: 0.4;
  }
  &:after {
    animation: ${loadingBarTop} 3s ease-in-out infinite;
    height: 0.1rem;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 0.875rem;
    opacity: 0.75;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 0.75rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #666;
    line-height: 1.4;
  }
`;

export const IssuesList = styled.ul`
  list-style: none;
  padding-top: 1rem;
  position: relative;

  li {
    display: flex;
    padding: 1rem 0.75rem;
    border: 1px solid #eee;
    border-radius: 0.25rem;
    transition: all 0.3s linear;

    & + li {
      margin-top: 0.75rem;
    }

    &:hover {
      background-color: #fcfcfc;
      border-color: #230187;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 1rem;

    strong {
      font-size: 1rem;

      a {
        text-decoration: none;
        color: #333;
        margin-right: 0.25rem;
        &:hover {
          color: #230187;
        }
      }

      span {
        background-color: #eee;
        color: #666;
        border-radius: 0.2rem;
        padding: 0.25rem 0.35rem;
        font-size: 0.625rem;
        font-weight: 600;
        white-space: nowrap;
        & + span {
          margin-left: 0.25rem;
        }
      }
    }

    p {
      margin-top: 0.25rem;
      font-size: 0.75rem;
      color: #666;
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 0;

  button {
    background-color: #eee;
    color: #666;
    border-radius: 0.2rem;
    padding: 0.25rem 0.35rem;
    margin: 0.25rem;

    &:nth-child(${props => props.active + 1}) {
      background: #576574;
      color: white;
    }
  }
`;

export const LoadingInner = styled.div`
  color: #230187;
  margin: 0 !important;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  button {
    transition: all 0.3s ease-out;
    background-color: #eee;
    color: #333;
    border-radius: 0.2rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }

  span {
    background-color: #230187;
    color: #fff;
    border-radius: 0.2rem;
    padding: 0.25rem 0.35rem;
    font-size: 0.625rem;
    font-weight: 600;
  }
`;
