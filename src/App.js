import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Error from './pages/Error/Error';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
