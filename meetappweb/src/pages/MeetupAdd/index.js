import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';
import CoverInput from './CoverInput';
import DatePicker from './DatePicker';
import { Container, Button } from './styles';

const schema = Yup.object().shape({
  // title: Yup.string().required('O título é obrigatório'),
  // description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date()
    .required('A data é obrigatória')
    .min(new Date(), 'Unable to create the meetup on past dates'),

  // local: Yup.string().required('O local é obrigatório'),
});

export default function MeetupAdd() {
  function handleSubmit(data) {
    // const date = data.date; // e.g. 2014-06-25 10:00:00 (picked in any time zone)
    // const timeZone = getTimeZoneValue(); // e.g. America/Los_Angeles

    // const utcDate = zonedTimeToUtc(date, timeZone); // In June 10am in Los Angeles is 5pm UTC

    // postToServer(utcDate.toISOString(), timeZone); // post 2014-06-25T17:00:00.000Z, America/Los_Angeles

    // const dateFormatted = data.date;
    // const utcDate = zonedTimeToUtc(dateFormatted);

    console.tron.log(data.date);
    // console.tron.log(utcDate);
  }

  return (
    <Container>
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
    </Container>
  );
}
