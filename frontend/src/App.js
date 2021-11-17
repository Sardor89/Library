import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar_Content from './components/Navbar_Content';
import Footer_Content from './components/Footer_Content';
import Search_Content from './components/Search_Content';
import Details from './components/Details';
import Contact from './components/Contact'
import About from './components/About'
import Login_Content from './components/Login_Content'
import Signup_Content from './components/Signup_Content'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar_Content />
        <Routes>
          <Route path="/" element={<Search_Content />} exact/>
          <Route path="/contact" element={<Contact />} exact/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<Login_Content />} />
          <Route path="/signup" element={<Signup_Content />} />
        </Routes>
        <Footer_Content />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
