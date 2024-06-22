import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { RoutesFunction } from './routes/routes';
import { Footer } from './components/Footer';
import { Context } from './hooks/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <BrowserRouter>
      <Context>
        <Header />
        <RoutesFunction />
        <Footer />
        <div className="absolute">
          <ToastContainer autoClose={1500} />
        </div>
      </Context>
    </BrowserRouter>
  );
}
