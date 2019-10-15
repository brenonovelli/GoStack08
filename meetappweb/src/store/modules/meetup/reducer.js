import produce from 'immer';

const INITIAL_STATE = {
  meetup: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.data = action.payload.meetup;
        break;
      }
      case '@meetup/DETAILS_MEETUP': {
        draft.data = action.payload.meetup;
        break;
      }
      case '@meetup/DELETE_MEETUP_SUCCESS': {
        draft.data = null;
        break;
      }
      case '@meetup/CREATE_MEETUP_FAILURE': {
        draft.data = null;
        break;
      }
      case '@meetup/details_MEETUP_CLEAR': {
        draft.data = null;
        break;
      }
      default:
    }
  });
}
