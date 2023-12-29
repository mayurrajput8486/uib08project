
import './App.css';
import Products from './components/Products';
/* import Userdeatils from './components/Userdetails'; */
/* import Fetchapi from './components/Fetchapi';
import Todoapi from './components/Todoapi'; */

function App() {
  return (
    <div className="App">
        <h1>I am Fetching Data from API</h1>
        {/* <Fetchapi/> */}
        {/* <Todoapi/> */}
        {/* <Userdeatils/> */}
        <Products/>
    </div>
  );
}

export default App;
