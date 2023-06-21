import './App.css';

import Navbar from './Components/Navbar.jsx'
import Store from './Components/Item Cards/Items.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Body from './Components/Body/Body.jsx'
import NavCards from './Components/NavCards/NavCards.jsx'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      {/* <Banner/> */}
      {/* <Store/> */}
      {/* <Footer/> */}
      <NavCards/>
    </div>
  );
}

export default App;
