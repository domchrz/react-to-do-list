import { useDispatch } from 'react-redux';
import ACTIONS from '../../store/actions/actions';
import IconButton from '../IconButton/IconButton';
import styles from './Error.module.scss';

export default function Error({ message }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.error}>
      <h3>Error</h3>
      <p>{message}</p>
      <IconButton
        icon="cancel"
        fontSize="2rem"
        handleClick={() => dispatch(ACTIONS.error(null))}></IconButton>
    </div>
  );
}
