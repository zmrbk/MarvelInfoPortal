import ErrorMessage from '../errorMessage/ErrorMessage';
import { useHistory } from 'react-router-dom';

const Page404 = () => {
  let history = useHistory();

  return (
    <div>
      <ErrorMessage />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
        Page doesn't exist
      </p>
      <button
        style={{
          display: 'block',
          fontWeight: 'bold',
          fontSize: '24px',
          margin: '30px auto 0px',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}
        onClick={history.goBack}>
        Go back
      </button>
    </div>
  );
};

export default Page404;
