import logo from "./logo.svg";
import "./App.css";
import BT3Header from "./BaiTapThucHanhLayout/BT3Header";
import BT3Carousel from "./BaiTapThucHanhLayout/BT3Carousel";
import BT3ProducList from "./BaiTapThucHanhLayout/BT3ProducList";
import BT3Product from "./BaiTapThucHanhLayout/BT3Product";
import BT3Footer from "./BaiTapThucHanhLayout/BT3Footer";

function App() {
  return (
    <div className="App">
      <BT3Header />
      <div className="container">
        <BT3Carousel />
        <BT3ProducList></BT3ProducList>
      </div>
      <BT3Footer></BT3Footer>
    </div>
  );
}

export default App;
