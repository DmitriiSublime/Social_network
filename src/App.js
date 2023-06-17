import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Content/Music/Music";
import Communities from "./Components/Content/Communitis/Communitis";
import Friends from "./Components/Content/Friends/Friends";
import {updateNewPostText} from "./Components/Redux/State";




const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="App_Wrapper">
                    <Navbar/>
                    <div className='App_Wrapper_content'>
                        <Routes>
                            <Route path="/profile" element= { <Profile
                                profilePages = {props.state.profilePages}
                                addPost={props.addPost}
                                updateNewPostText={props.updateNewPostText}
                            />} />
                            <Route path="/dialogs/*" element= { <Dialogs state = {props.state.dialogsPages} />}/>
                            <Route path='/music' element={ <Music/> }/>
                            <Route path='/communities' element={ <Communities/> }/>
                            <Route path='/friends' element={ <Friends state = {props.state.sidebar} />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
