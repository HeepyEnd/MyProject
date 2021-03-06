import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Anime from './components/Anime/Anime';
import {BrowserRouter,Route} from "react-router-dom";

const App = (props) => {
    
    return ( 
        <div className = 'app-wrapper'>
            < Header />
           < Navbar />
           < div className = 'app-wrapper-content' >
             <Route path = '/dialogs' render = {() => <Dialogs store={props.store} /> }  />
             <Route path = '/profile' render = {() => < Profile profilePage={props.state.profilePage} 
                dispatch ={props.dispatch} /> } />
             <Route path = '/anime' render = { () => <Anime/> }/> 
        </div >
         </div>
         
    );
}


export default App;
