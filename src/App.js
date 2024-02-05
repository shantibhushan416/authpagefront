import SignUpPage from "./Components/AuthPages/SignUpPage";
import SignInPage from "./Components/AuthPages/SignInPage";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
