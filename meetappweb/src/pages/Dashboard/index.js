import React from 'react';
import { Link } from 'react-router-dom';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Container, MeetupList, Meetup } from './styles';

export default function Dashboard() {
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
        <Meetup>
          <strong>Meetup de React Native</strong>
          <time>24 de Junho, às 20h</time>
          <MdChevronRight size={20} />
        </Meetup>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <time>24 de Junho, às 20h</time>
          <MdChevronRight size={20} />
        </Meetup>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <time>24 de Junho, às 20h</time>
          <MdChevronRight size={20} />
        </Meetup>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <time>24 de Junho, às 20h</time>
          <MdChevronRight size={20} />
        </Meetup>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <time>24 de Junho, às 20h</time>
          <MdChevronRight size={20} />
        </Meetup>
      </MeetupList>
    </Container>
  );
}
