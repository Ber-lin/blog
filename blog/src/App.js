import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,NavLink,Route,Link} from 'react-router-dom'
import Home from './routes/Home'
import Page from './routes/Page'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavLink to="home" style={({isActive})=>{return {color:isActive?'red':''}}}>aaa</NavLink>
        <NavLink to="page" style={({isActive})=>{return {color:isActive?'red':''}}}>page</NavLink> */}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          
          <Route path='page' element={<Page></Page>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
