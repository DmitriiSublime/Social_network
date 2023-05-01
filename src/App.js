import './App.css';
import Header from "./Components/Header/Header";
import Aside from "./Components/Aside/Aside";
import Profile from "./Components/Content/Profile/Profile";
import Posts from "./Components/Content/Posts/Posts";


const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="Wrapper">
          <Aside />
          <Profile />



      </div>


    </div>
  );
}

export default App;
