import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
export const showError = (err: string) => {
  toast.error(err, {
    position: 'top-right',
  });
};
export const showSucccess = (err: string) => {
  toast.success(err, {
    position: 'top-right',
  });
};
