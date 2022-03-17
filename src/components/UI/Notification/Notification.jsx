import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = ({ type, show, setShow }) => {
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
      default:
        break;
    }
  };

  createNotification();

  const renderNotification = () => (
    <ToastContainer
      position="top-right"
      autoClose={500}
      hideProgressBar={false}
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
