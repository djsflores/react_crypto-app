import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Error from './pages/Error/Error';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
