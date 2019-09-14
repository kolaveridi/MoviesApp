import React from 'react';
import { Provider} from "react-redux";
import configureStore from './global/store';
import Movies from './containers/Movies';
import './App.css';
import data from './global/data.js';
console.log(data);
const store =configureStore();
console.log("store",store);
class App extends React.Component {
   render(){
     return(
       <Provider store={store}>
        <Movies/>
      </Provider>


     )
   }
}


export default App;
