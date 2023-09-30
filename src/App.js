import './App.css';
import Accounts from './components/Accounts/Accounts';
import Copyright from './components/Footer/Copyright';
import Footer from './components/Footer/Footer';
import HSplitter from './components/Hsplitter';
import Navbar from './components/Navbar/Navbar';
import Socials from './components/Socials';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <>
      <Navbar />
      <Accounts />
      <Sponsors />
      <Socials />
      <HSplitter />
      <Footer />
      <Copyright/>
    </>
  );
}

export default App;
