import { addHours } from 'date-fns/esm';
import { useCalendarStore, useUiStore } from '../../hooks';

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { onSetActiveNote } = useCalendarStore();

  const handelClickNew = () => {
    onSetActiveNote({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      user: {
        _id: 1,
        name: 'Osvaldo',
      },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handelClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
