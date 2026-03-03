import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Headers } from "./Components/Headers";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login/Login";

function App() {
  return (
    <div className="flex flex-col mt-12 h-full border bg-white px-8 py-24 rounded-2xl">
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
