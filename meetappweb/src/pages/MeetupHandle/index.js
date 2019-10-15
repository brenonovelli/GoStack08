import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';
import { createMeetupRequest } from '~/store/modules/meetup/actions';

import CoverInput from './CoverInput';
import DatePicker from './DatePicker';
import { Container, Button } from './styles';

const schema = Yup.object().shape({
  banner: Yup.number().required('O banner é obrigatório'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date()
    .required('A data é obrigatória')
    .min(new Date(), 'Meetups só podem ser criados para datas futuras'),
  local: Yup.string().required('O local é obrigatório'),
});

export default function MeetupAdd() {
  const meetup = useSelector(state => state.meetup.data);
  const dispatch = useDispatch();

  console.tron.log(meetup);

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <header>
        <nav>
          {meetup ? (
            <Link to="/meetup/details/">{'<'} voltar para o meetup</Link>
          ) : (
            <Link to="/dashboard/">{'<'} voltar para o dahboard</Link>
          )}
        </nav>
      </header>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
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
    </Container>
  );
}
