import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
});

const MyToast = withReactContent(Toast);

export default MyToast;
