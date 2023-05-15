import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Index from "./components/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import UserInput from "./components/UserInput";
import Inputs from "./components/Inputs";


function App() {
  return (

      <Router>

         <>
              {/*<Index/>*/}
             <NavBar/>
             <Inputs/>
          </>

          {/*<Routes>
              <Route exact path={'/'}  component={Index}/>
              <Route exact path={'/about'}  component={Index}/>
          </Routes>*/}

      </Router>



  );
}

export default App;
