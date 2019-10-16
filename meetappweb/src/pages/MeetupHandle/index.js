import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';
import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetups/actions';
import api from '~/services/api';

import CoverInput from './CoverInput';
import DatePicker from './DatePicker';
import { Container, Button } from './styles';

const schema = Yup.object().shape({
  banner: Yup.number().required('O banner é obrigatório'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string()
    .max(255, 'Descrições não podem ter mais de 255 caracteres.')
    .required('A descrição é obrigatória'),
  date: Yup.date()
    .required('A data é obrigatória')
    .min(new Date(), 'Meetups só podem ser criados para datas futuras'),
  local: Yup.string().required('O local é obrigatório'),
});

export default function MeetupAdd({ match }) {
  const [meetup, setMeetup] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const idMeetup = match.params.id;

  useEffect(() => {
    if (idMeetup) {
      (async function loadMeetup() {
        setLoading(true);
        try {
          const response = await api.get('meetups');

          const meetupSingle = response.data.find(
            item => item.id === Number(idMeetup)
          );

          setMeetup(meetupSingle);
        } catch (err) {
          toast.error(`Não conseguimos o meetup selecionado. Tente novamente.`);
        }
        setLoading(false);
      })();
    }
  }, [idMeetup]);

  function handleSubmit(e) {
    console.tron.log({ id: idMeetup, ...e });
    if (idMeetup) {
      console.tron.log({ id: idMeetup, ...e });
      dispatch(updateMeetupRequest({ id: idMeetup, ...e }));
    } else {
      console.tron.log(e);
      dispatch(createMeetupRequest(e));
    }
  }

  return (
    <Container>
      <header>
        <nav>
          {idMeetup ? (
            <Link to={`/meetups/details/${idMeetup}`}>
              {'<'} voltar para o meetup
            </Link>
          ) : (
            <Link to="/dashboard/">{'<'} voltar para o dahboard</Link>
          )}
        </nav>
      </header>
      {loading && <strong>Carregando...</strong>}
      {meetup ? (
        <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
          <CoverInput name="banner" bannerId={meetup.banner} />

          <Input name="title" placeholder="Título do meetup" type="text" />

          <Input
            name="description"
            placeholder="Descrição completa"
            type="text"
            multiline
          />

          <DatePicker name="date" />

          <Input name="local" placeholder="Localização" type="text" />

          <Button type="submit">
            <MdAddCircleOutline size={20} />
            Atualizar meetup
          </Button>
        </Form>
      ) : (
        <Form schema={schema} onSubmit={handleSubmit}>
          <CoverInput name="banner" />

          <Input name="title" placeholder="Título do meetup" type="text" />

          <Input
            name="description"
            placeholder="Descrição completa"
            type="text"
            multiline
          />

          <DatePicker name="date" />

          <Input name="local" placeholder="Localização" type="text" />

          <Button type="submit">
            <MdAddCircleOutline size={20} />
            Salvar meetup
          </Button>
        </Form>
      )}
    </Container>
  );
}
