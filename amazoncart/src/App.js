import './App.css';
import PrimaryNavbar from './components/PrimaryNavbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import TotalField from './components/TotalField';
import Cart from './components/Cart';
import Banner from './components/Banner';


function App() {
  return (
    <>
      <PrimaryNavbar />
      <SecondaryNavbar />
      <div className="container-fluid container-body">
        <Banner />
        <div className="row">
          <div className="col-9">
            <Cart />
          </div>
          <div className="col-3">
            <TotalField />
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
