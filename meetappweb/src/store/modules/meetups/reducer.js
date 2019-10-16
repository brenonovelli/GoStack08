import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};

export default function meetups(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetups/CREATE_MEETUP_SUCCESS': {
        draft.data = action.payload.meetup;
        break;
      }
      case '@meetups/POPULATE_MEETUP_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      case '@meetups/DELETE_MEETUP_SUCCESS': {
        draft.data = null;
        break;
      }
      case '@meetups/CREATE_MEETUP_FAILURE': {
        draft.data = null;
        break;
      }
      default:
    }
  });
}
