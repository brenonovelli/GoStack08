export function createMeetupRequest(data) {
  return {
    type: '@meetups/CREATE_MEETUP',
    payload: { data },
  };
}
export function createMeetupSuccess(meetup) {
  return {
    type: '@meetups/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}
export function createMeetupFailure() {
  return {
    type: '@meetups/CREATE_MEETUP_FAILURE',
  };
}

export function deleteMeetupRequest(meetupId) {
  return {
    type: '@meetups/DELETE_MEETUP',
    payload: { meetupId },
  };
}
export function deleteMeetupSuccess() {
  return {
    type: '@meetups/DELETE_MEETUP_SUCCESS',
  };
}
export function deleteMeetupFailure() {
  return {
    type: '@meetups/DELETE_MEETUP_FAILURE',
  };
}

export function updateMeetupRequest(meetup) {
  return {
    type: '@meetups/UPDATE_MEETUP',
    payload: { meetup },
  };
}
