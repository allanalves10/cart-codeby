import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyles } from './styles/global';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes />
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
