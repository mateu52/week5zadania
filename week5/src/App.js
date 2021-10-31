import React from 'react';
import "./style.css";
import Window from './component/Window'; //zad1
import Snackbutton from './component/Snackbar/Snackbutton'; //zad2
import AppMenu from './component/NavMenu/AppMenu'; //zad3
import UserContainer from './component/UserContainer/UserContainer'; //zad4
import App5 from './component/UserContainerZAD5/App5'; //zad5
//import AppSpr from './component/zad5skrot/AppSpr'; //moj przyklad przed zad5

function App() {
  return (
    //<Window />
    //<Snackbutton /> //style są w NavMenu
    //<AppMenu />
    //<UserContainer />
    <App5 />
    //<AppSpr />
  );
}

export default App;