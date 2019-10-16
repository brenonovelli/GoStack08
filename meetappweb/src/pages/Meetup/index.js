import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdEdit, MdDeleteForever, MdToday, MdMyLocation } from 'react-icons/md';

import api from '~/services/api';
import { deleteMeetupRequest } from '~/store/modules/meetups/actions';
import { Container, Button, MeetupContent } from './styles';

export default function Meetup({ match }) {
  const [meetup, setMeetup] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const idMeetup = match.params.id;
  useEffect(() => {
    console.tron.log(meetup);
  }, [meetup]);

  useEffect(() => {
    (async function loadMeetup() {
      setLoading(true);
      try {
        const response = await api.get(`meetups/${idMeetup}`);

        const dateMeetup = parseISO(response.data.meetup.date);

        const formattedDate = format(dateMeetup, "dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        });

        setMeetup({ formattedDate, ...response.data.meetup });
      } catch (err) {
        toast.error(`Não conseguimos carregar seus meetups. Tente novamente.`);
      }
      setLoading(false);
    })();
  }, [idMeetup]);

  function handleDeleteMeetup() {
    dispatch(deleteMeetupRequest(idMeetup));
  }

  return (
    <Container>
      <header>
        <nav>
          <Link to="/dashboard">{'<'} voltar para o dashboard</Link>
        </nav>
      </header>
      {loading && <strong>Carregando...</strong>}
      {meetup && (
        <MeetupContent>
          <header>
            <h1>{meetup.title}</h1>
            <aside>
              <nav>
                <Link to={`/meetups/edit/${idMeetup}`}>
                  <MdEdit size={20} />
                  Editar
                </Link>

                <Button type="button" onClick={() => handleDeleteMeetup()}>
                  <MdDeleteForever size={20} />
                  Cancelar
                </Button>
              </nav>
            </aside>
          </header>
          {meetup.cover ? (
            <img src={meetup.cover.url} alt={meetup.title} />
          ) : (
            'Imagem não encontrada.'
          )}
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
      )}
    </Container>
  );
}

Meetup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
