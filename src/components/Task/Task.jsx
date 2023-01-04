import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from 'redux/operations';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTask(task.id));
  };

  const toggleCompleteHandler = () => {
    dispatch(toggleComplete(task));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={toggleCompleteHandler}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={deleteHandler}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
