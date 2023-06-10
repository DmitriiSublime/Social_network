import reportWebVitals from './reportWebVitals';
import state from "./Components/Redux/State";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App state={state} addPost={addPost}/>
//     </React.StrictMode>
// );




reportWebVitals();
