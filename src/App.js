import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Lyrics from "./components/tracks/Lyrics";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/lyrics/track/:id" element={<Lyrics />} />
            </Routes>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
