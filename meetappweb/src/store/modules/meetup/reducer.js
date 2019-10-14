import produce from 'immer';

const INITIAL_STATE = {
  meetup: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/CREATE_MEETUP_SUCCESS': {
        draft.meetup = action.payload.meetup;
        break;
      }
      case '@user/CREATE_MEETUP_SUCCESS': {
        draft.meetup = action.payload.profile;
        break;
      }
      case '@auth/CREATE_MEETUP_FAILURE': {
        draft.meetup = null;
        break;
      }
      default:
    }
  });
}
