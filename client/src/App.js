import './styles/global.scss';
import Topbar from './components/common/Topbar/Topbar';
import MenuForm from './components/features/MenuForm/MenuForm';
import Footer from './components/common/Footer/Footer';
import Hero from './components/common/Hero/Hero';

function App() {
  return (
    <div>
      <Topbar />
      <Hero />
      <MenuForm />
      <Footer />
    </div>
  );
}

export default App;
