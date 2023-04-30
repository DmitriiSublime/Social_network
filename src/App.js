import './App.css';
import Header from "./Components/Header/Header";
import Aside from "./Components/Aside/Aside";
import Content from "./Components/Content/Profile/Content";
// import Maps from "./Components/Maps/Maps";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/*<Maps />*/}
      <div className="Wrapper">
          <Aside />
          <Content />

      </div>




    </div>
  );
}

export default App;
