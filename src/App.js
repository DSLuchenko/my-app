import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile"
                           element={<Profile /*store={props.store}*//>}/>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer /*store={props.store}*//>}/>
                    <Route path="/news"
                           element={<News/>}/>
                    <Route path="/settings"
                           element={<Settings/>}/>
                    <Route path="/music"
                           element={<Music/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
