
import './App.css';
import Homepage from './component/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './component/view';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path='/home' element={ <Homepage/>}/>
      <Route path='/view' element={ <View/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    <view/>
    </div>
  );
}

export default App;

