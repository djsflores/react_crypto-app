import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import AboutUs from './pages/AboutUs/AboutUs';
import Error from './pages/Error/Error';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import store from './app/store';

const App = () => {
  return (
    <>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </Provider>
    </>
  );
};
export default App;
