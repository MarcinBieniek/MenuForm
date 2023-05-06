import './styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Form from './components/pages/Form/Form';
import Error from './components/pages/Error/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
