import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

let theme = {
  mobile: "768px",
  colors: {
    greyPrimaryBg: "rgb(243, 242, 239)",
    bluePrimary: "rgb(10, 102, 194)",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
