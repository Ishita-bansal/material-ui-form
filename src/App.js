import Router from "./router";
import { ToastContainer, Flip} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
  <>
  <Router />;
  <ToastContainer transition={Flip}  autoClose={2000}/>
  </>
  )
}

export default App;
