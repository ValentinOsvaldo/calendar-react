import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {
  const { startDeleteEvent, activeEvent } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  console.log(!isDateModalOpen)

  const handelClickDelete = () => {
    startDeleteEvent();
  };

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handelClickDelete}
      style={{
        display: activeEvent !== null && !isDateModalOpen ? '' : 'none',
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
