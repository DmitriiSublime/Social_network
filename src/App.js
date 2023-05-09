import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import Posts from "./Components/Content/Profile/Posts/Posts";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Content/Music/Music";
import Communities from "./Components/Content/Communitis/Communitis";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="App_Wrapper">
                    <Navbar/>
                    <div className='App_Wrapper_content'>
                        <Routes>
                            <Route path="/profile" element= { <Profile state = {props.state.profilePages} />} />
                            <Route path="/dialogs/*" element= { <Dialogs state = {props.state.dialogsPages} />}/>
                            <Route path='/music' element={ <Music/> }/>
                            <Route path='/communities' element={ <Communities/> }/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
