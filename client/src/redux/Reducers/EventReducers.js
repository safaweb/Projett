import { CREATE_EVENT, CREATE_EVENT_FAIL, CREATE_EVENT_SECCESS, CREATE_TICKET, CREATE_TICKET_FAIL, CREATE_TICKET_SECCESS } from "../ActionTypes/ActionTypes"



const initialState = {
  Loading: false,
  Event: [],
  errors: ""
};

const EventReducers = (state = initialState, { type, payload }) => {
  switch (type) {

    case CREATE_EVENT:
    case CREATE_TICKET:
      return {
        ...state,
        Loading: true
      }
    case CREATE_EVENT_SECCESS:
    case CREATE_TICKET_SECCESS:
      return {
        ...state,
        Loading: false,
        Evnet: payload,
        errors: null
      }
    case CREATE_EVENT_FAIL:
    case CREATE_TICKET_FAIL:
      return {
        ...state,
        Loading: false,
        Event: null,
        errors: payload
      }
    default:
      return state
  }
}
export default EventReducers;


