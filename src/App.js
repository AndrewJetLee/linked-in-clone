import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Login from './components/Login'

let theme = {
  mobile: "768px"
};

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
