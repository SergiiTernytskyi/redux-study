import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/taskSlice';
// import { deleteTask, toggleCompleted } from 'redux/actions';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTask(task.id));
  };

  const toggleHandler = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={toggleHandler}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={deleteHandler}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
