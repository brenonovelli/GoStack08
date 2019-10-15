export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP',
    payload: { data },
  };
}
export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}
export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_MEETUP_FAILURE',
  };
}

export function detailsMeetupRequest(meetup) {
  return {
    type: '@meetup/DETAILS_MEETUP',
    payload: { meetup },
  };
}
export function detailsMeetupClear() {
  return {
    type: '@meetup/details_MEETUP_CLEAR',
  };
}

export function deleteMeetupRequest(meetupId) {
  return {
    type: '@meetup/DELETE_MEETUP',
    payload: { meetupId },
  };
}
export function deleteMeetupSuccess() {
  return {
    type: '@meetup/DELETE_MEETUP_SUCCESS',
  };
}
export function deleteMeetupFailure() {
  return {
    type: '@meetup/DELETE_MEETUP_FAILURE',
  };
}
