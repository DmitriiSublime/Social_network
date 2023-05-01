import './App.css';
import Header from "./Components/Header/Header";
import Aside from "./Components/Aside/Aside";
import Profile from "./Components/Content/Profile/Profile";
import Posts from "./Components/Content/Posts/Posts";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="App_Wrapper">
                    <Aside/>
                    <div className='App_Wrapper_content'>
                        <Routes>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/dialogs' element={<Dialogs/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
