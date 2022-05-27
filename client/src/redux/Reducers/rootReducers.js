import usereducer from './UserReducers';
import User_Select from './UserActionReducers';
import EventReducers from './EventReducers';
import Event_Select from './EventActionReducers';
import { combineReducers } from 'redux';
import OrganisateurReducer from './OrganisateurReducer';
import One_Event_Select from './OneEventReducer';

export default combineReducers({ usereducer,One_Event_Select, EventReducers, User_Select, Event_Select, OrganisateurReducer });