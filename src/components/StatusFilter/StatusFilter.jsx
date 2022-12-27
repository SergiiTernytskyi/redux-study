import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';

import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const filterHandler = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => {
          filterHandler(statusFilters.all);
        }}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => {
          filterHandler(statusFilters.active);
        }}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => {
          filterHandler(statusFilters.completed);
        }}
      >
        Completed
      </Button>
    </div>
  );
};
