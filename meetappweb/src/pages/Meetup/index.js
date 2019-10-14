import React from 'react';

// import { ButtonEdit, ButtonDelete } from '~/components/Buttons';
import { MdEdit, MdDeleteForever, MdToday, MdMyLocation } from 'react-icons/md';
import cover from '~/assets/cover.jpg';

import { Container, Button, ButtonSecondary, MeetupContent } from './styles';

export default function Meetup() {
  function handleEditMeetup() {
    console.tron.log('Editar');
  }

  function handleDeleteMeetup() {
    console.tron.log('Deletar');
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <aside>
          <nav>
            <ButtonSecondary
              type="button"
              onClick={handleEditMeetup}
              secondary={false}
            >
              <MdEdit size={20} />
              Editar
            </ButtonSecondary>

            <Button type="button" onClick={handleDeleteMeetup}>
              <MdDeleteForever size={20} />
              Cancelar
            </Button>
          </nav>
        </aside>
      </header>
      <MeetupContent>
        <img src={cover} alt="" />
        <div>
          <p>
            O Meetup de React Native é um evento que reúne a comunidade de
            desenvolvimento mobile utilizando React a fim de compartilhar
            conhecimento. Todos são convidados.
          </p>
          <p>
            Caso queira participar como palestrante do meetup envie um e-mail
            para organizacao@meetuprn.com.br.
          </p>
        </div>
        <footer>
          <time>
            <MdToday size={18} />
            24 de Junho, às 20h
          </time>
          <address>
            <MdMyLocation size={18} />
            Estrada dos Bandeirantes, 15001 - Bloco 5 - 209
          </address>
        </footer>
      </MeetupContent>
    </Container>
  );
}
