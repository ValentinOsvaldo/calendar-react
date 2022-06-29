import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onDeleteEvent,
  onUpdateEvent,
  setActiveEvent,
} from '../store';

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const onSetActiveNote = (calendarEvent) => {
    dispatch(setActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // todo: llegar al backend

    if (calendarEvent._id) {
      // * Actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // * Creando
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeleteEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    // * Properties
    activeEvent,
    events,
    // * Methods
    onSetActiveNote,
    startSavingEvent,
    startDeleteEvent,
  };
};
