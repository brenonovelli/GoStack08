import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  createMeetupSuccess,
  createMeetupFailure,
  deleteMeetupSuccess,
  deleteMeetupFailure,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const { date, title, description, local, banner } = payload.data;

    const meetup = {
      date,
      title,
      description,
      local,
      banner,
    };

    const response = yield call(api.post, 'meetups', meetup);

    toast.success('Meetup cadastrado com com sucesso!');

    yield put(createMeetupSuccess(response.data));

    history.push('/meetup/details/');
  } catch (err) {
    toast.error('Erro ao criar meetup. Confira os dados e tente novamente.');
    yield put(createMeetupFailure());
  }
}

export function* deleteMeetup({ payload }) {
  try {
    const { meetupId } = payload;
    yield call(api.delete, `meetups/${meetupId}`);

    toast.success('Meetup deletado com com sucesso!');

    history.push('/dasboard');

    yield put(deleteMeetupSuccess());
  } catch (err) {
    toast.error('Erro ao deletar meetup. Tente novamente.');
    yield put(deleteMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP', createMeetup),
  takeLatest('@meetup/DELETE_MEETUP', deleteMeetup),
]);
