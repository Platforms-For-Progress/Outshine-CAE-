import './App.css';

import Navbar from './Components/Navbar.jsx'
import Store from './Components/Item Cards/Items.jsx'
import Banner from './Components/Banner/Banner.jsx'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Store/>
    </div>
  );
}

export default App;
