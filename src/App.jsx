import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";

function App() {
  return (
    <div className="App">
      <Header />
      <Starfield />
      <div className="main flex min-h-screen h-full">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
