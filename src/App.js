import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Services from './component/Home/Services/Services';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
