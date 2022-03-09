import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<ComponentOne/>}/>
        <Route path="/ComponentTwo" element={<ComponentTwo/>}/>
        <Route path="/ComponentThree" element={<ComponentThree/>}/>
      </Routes>
    </div>
  );
}

export default App;
