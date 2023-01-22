import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";
import Character from "./pages/Character";
import Search from "./pages/Search";
import { useState } from "react";

const style = {
  app: `flex flex-col min-h-screen justify-between font-roboto`,
  main: `my-auto mt-0`,
};

function App() {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className={style.app}>
      <Header
        setQuery={setQuery}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      <Starfield />
      <div className={style.main} onClick={() => setShowSearch(false)}>
        <Routes>
          <Route path="/search" element={<Search query={query} />} />
          <Route path="/characters/*" element={<Character />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
