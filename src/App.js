import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Schools from './components/Schools';
import Contact from './components/Contact';
import Hobby from './components/Hobby';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route exact path ={"/"} element= {<AboutMe />} />
          <Route path ={"/signup"} element= {<SignUp />} />
          <Route path ={"/education"} element= {<Schools />} />
          <Route path ={"/contact"} element= {<Contact />} />
          <Route path ={"/hobby"} element= {<Hobby />} />
        </Routes>
      </BrowserRouter>
      {/* <AboutMe/> */}
    </div>
  );
}

export default App;
