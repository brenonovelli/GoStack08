import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import CoverInput from './CoverInput';

import { Container, Button } from './styles';

export default function MeetupAdd() {
  return (
    <Container>
      <Form>
        <CoverInput name="cover_id" />

        <Input name="name" placeholder="Título do meetup" type="text" />
        <Input
          name="description"
          placeholder="Descrição completa"
          type="text"
          multiline
        />
        <Input name="date" placeholder="Data do meetup" type="text" />
        <Input name="local" placeholder="Localização" type="text" />

        <Button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar meetup
        </Button>
      </Form>
    </Container>
  );
}
