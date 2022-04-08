import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = ({
  type,
  show,
  setShow,
  autoCloseTime = 500,
  hideProgressBar = false,
}) => {
  const closeNotification = () => {
    setShow(false);
  };

  const createNotification = () => {
    switch (type) {
      case 'ADD_TO_CART':
        if (show) {
          toast.success('Dish added to cart', {
            toastId: 'ADD_TO_CART',
            onClose: () => {
              closeNotification();
            },
          });
        }
        break;
      case 'REMOVE_DISH':
        if (show) {
          toast.success('Removed dish from cart', {
            toastId: 'REMOVE_DISH',
            onClose: () => {
              closeNotification();
            },
          });
        }
        break;
      case 'UPDATE_ADDRESS':
        if (show) {
          toast.success('Updated address successfully', {
            toastId: 'UPDATE_ADDRESS',
            onClose: () => {
              closeNotification();
            },
          });
        }
        break;
      case 'EMPTY_ADDRESS':
        if (show) {
          toast.error('Address cannot be empty', {
            toastId: 'EMPTY_ADDRESS',
            onClose: () => {
              closeNotification();
            },
          });
        }
        break;
      default:
        break;
    }
  };

  createNotification();

  const renderNotification = () => (
    <ToastContainer
      position="top-right"
      autoClose={autoCloseTime}
      hideProgressBar={hideProgressBar}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
  );

  return <>{renderNotification()}</>;
};
