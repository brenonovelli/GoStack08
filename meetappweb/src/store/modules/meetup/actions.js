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
