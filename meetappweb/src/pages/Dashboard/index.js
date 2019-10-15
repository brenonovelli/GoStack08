import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';
import {
  detailsMeetupRequest,
  detailsMeetupClear,
} from '~/store/modules/meetup/actions';
import { Container, MeetupList, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsMeetupClear());
  }, [dispatch]);
  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('meetups');
      const meetupInitital = response.data;

      const data = meetupInitital.map(meetup => {
        const dateMeetup = parseISO(meetup.date);

        const formattedDate = format(dateMeetup, "dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        });
        return {
          formattedDate,
          ...meetup,
        };
      });

      setMeetups(data);
    }

    loadSchedule();
  }, []);

  function handleDetails(meetup) {
    dispatch(detailsMeetupRequest(meetup));
    history.push('/meetup/details');
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <aside>
          <nav>
            <Link to="/meetup/add">
              <MdAddCircleOutline size={20} />
              Novo Meetup
            </Link>
          </nav>
        </aside>
      </header>
      <MeetupList>
        {meetups.map(meetup => (
          <Meetup key={meetup.id} onClick={() => handleDetails(meetup)}>
            <strong>{meetup.title}</strong>
            <time>{meetup.formattedDate}</time>
            <MdChevronRight size={20} />
          </Meetup>
        ))}
      </MeetupList>
    </Container>
  );
}
