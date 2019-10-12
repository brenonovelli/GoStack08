import styled, { css } from 'styled-components';
import { lighten } from 'polished';
// {css} -> adicionar um bloco de css baseado em uma propriedade
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.button`
  background: none;
  border: 0;
  outline: 0;
  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 0.5rem;
        height: 0.5rem;
        background-color: #ff882e;
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 0.25rem;
  padding: 0.5rem 0.25rem;
  display: ${props => (props.visible ? 'block' : 'none')};
  /* display: block; */
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 30px 20px -20px rgba(0, 0, 0, 0.25);

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.85);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 1rem;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  time {
    font-size: 0.75rem;
    opacity: 0.6;
    display: block;
  }

  button {
    font-size: 0.75rem;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
  }
  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        height: 8px;
        width: 8px;
        background-color: #ff892e;
        border-radius: 50%;
        margin-left: 0.25rem;
      }
    `}
`;
