import toast from 'react-hot-toast';

const useToast = () => ({
  success: (msg)     => toast.success(msg),
  error:   (msg)     => toast.error(msg),
  info:    (msg)     => toast(msg, { icon: 'ℹ️' }),
  warning: (msg)     => toast(msg, { icon: '⚠️' }),
  loading: (msg)     => toast.loading(msg),
  dismiss: (id)      => toast.dismiss(id),
  promise: (p, msgs) => toast.promise(p, msgs),
});

export default useToast;