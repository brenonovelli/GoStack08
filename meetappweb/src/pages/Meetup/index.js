import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever, MdToday, MdMyLocation } from 'react-icons/md';

import cover from '~/assets/cover.jpg';
import history from '~/services/history';
import { deleteMeetupRequest } from '~/store/modules/meetup/actions';
import { Container, Button, ButtonSecondary, MeetupContent } from './styles';

export default function Meetup() {
  const meetup = useSelector(state => state.meetup.data);
  const dispatch = useDispatch();

  function handleEditMeetup() {
    history.push('/meetup/edit/');
  }

  function handleDeleteMeetup() {
    dispatch(deleteMeetupRequest(meetup.id));
  }

  return (
    <Container>
      <header>
        <nav>
          <Link to="/dashboard">{'<'} voltar para o dashboard</Link>
        </nav>
      </header>
      <MeetupContent>
        <header>
          <h1>{meetup.title}</h1>
          <aside>
            <nav>
              <ButtonSecondary type="button" onClick={handleEditMeetup}>
                <MdEdit size={20} />
                Editar
              </ButtonSecondary>

              <Button type="button" onClick={() => handleDeleteMeetup()}>
                <MdDeleteForever size={20} />
                Cancelar
              </Button>
            </nav>
          </aside>
        </header>
        <img src={cover} alt="" />
        <div>
          <p>{meetup.description}</p>
        </div>
        <footer>
          <time>
            <MdToday size={18} />
            {meetup.formattedDate}
          </time>
          <address>
            <MdMyLocation size={18} />
            {meetup.local}
          </address>
        </footer>
      </MeetupContent>
    </Container>
  );
}
