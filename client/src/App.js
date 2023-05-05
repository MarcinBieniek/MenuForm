import './styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/common/Topbar/Topbar';
import Home from './components/pages/Home/Home';
import Form from './components/pages/Form/Form';
import Error from './components/pages/Error/Error'
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
