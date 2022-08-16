import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Nav";
import { Routes,Route } from 'react-router-dom';
import User from './Components/User';
import Addquestion from './Components/Addquestion';
import Examination from './Components/Examination';
import Result from './Components/Result';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/add-question' element={<Addquestion/>} />
        <Route path='/exam-home' element={<Examination/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    </>
  );
}

export default App;

