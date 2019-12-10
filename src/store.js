import { createStore, combineReducers } from "redux";

const createAgenda = (
  title,
  date,
  startTime,
  endTime,
  attendees,
  color,
  meetingType,
  agendaContent
) => {
  return {
    type: "CREATE_AGENDA",
    payload: {
      title: title,
      date: date,
      startTime,
      startTime,
      endTime,
      endTime,
      color: color,
      meetingType: meetingType,
      agendaContent: agendaContent,
      attendees: attendees
    }
  };
};

const updateAgenda = (
  id,
  title,
  date,
  startTime,
  endTime,
  attendees,
  color,
  meetingType,
  agendaContent
) => {
  return {
    type: "UPDATE_AGENDA",
    payload: {
      id: id,
      title: title,
      date: date,
      startTime,
      startTime,
      endTime,
      endTime,
      color: color,
      meetingType: meetingType,
      agendaContent: agendaContent,
      attendees: attendees
    }
  };
};

const deleteAgenda = id => {
  return {
    type: "DELETE_AGENDA",
    payload: { id: id }
  };
};

// Reducers

const agendaReducer = (agendas = [], action) => {
  switch (action.type) {
    case "CREATE_AGENDA":
      return [...agendas, action.payload];

    case "UPDATE_AGENDA":
      return [...agendas, action.payload];

    case "DELETE_AGENDA":
      return agendas.filter(policy => policy != action.payload.id);
    default:
      return agendas;
  }
};

const reducers = combineReducers({
  agendaReducer: agendaReducer
});

const store = createStore(reducers);
