import './App.css';
import Home from './components/home';
import Foodmenu from './components/food';
import All from './components/all';
import Alcohol from './components/alcohol';
import Beverage from './components/beverage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/food" element={<Foodmenu />}></Route>
          <Route path="/" element={<Foodmenu />}></Route>
          <Route path="/all" element={<All />}></Route>
          <Route path="/alcohol" element={<Alcohol />}></Route>
          <Route path="/beverage" element={<Beverage />}></Route>

        </Routes>
      </Router>
      <div>

      </div>
    </div>
  );
}

export default App;
