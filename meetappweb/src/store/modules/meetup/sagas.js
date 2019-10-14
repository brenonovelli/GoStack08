import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { createMeetupSuccess, createMeetupFailure } from './actions';

export function* createMeetup({ payload }) {
  try {
    const { date, title, description, local, banner } = payload.data;
    // date "2019-08-13T11:37:00-03:00"
    const meetup = {
      date,
      title,
      description,
      local,
      banner,
    };

    const response = yield call(api.put, 'meetup', meetup);

    toast.success('Meetup cadastrado com com sucesso!');

    yield put(createMeetupSuccess(response.data));
  } catch (err) {
    toast.error(
      'Erro ao criar meetup perfil. Confira os dados e tente novamente.'
    );
    yield put(createMeetupFailure());
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP', createMeetup)]);
