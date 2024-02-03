import logo from "./logo.svg";
import Header from "./Header";
import Product from "./Product";
import "./App.css";
import BlackNavBar from "./BlackNavBar";
import Banner from "./Banner";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="sticky">
        <div>
          <Header />
        </div>
        <div>
          <BlackNavBar />
        </div>
      </div>

      <div>
        <Banner />
      </div>
      <br></br>
      <br></br>
      <div>
        <Product />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
