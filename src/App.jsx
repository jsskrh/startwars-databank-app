import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Character from "./pages/Character";
import Search from "./pages/Search";
import { useRef, useState } from "react";
import Scene from "./components/layout/Background/Scene";

const style = {
  app: `flex flex-col min-h-screen justify-between font-roboto bg-black`,
  starfield: `bg-black h-full w-screen fixed top-0`,
  main: `my-auto mt-0 z-10`,
};

function App() {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const backgroundRef = useRef(null);

  return (
    <div className={style.app}>
      <Header
        setQuery={setQuery}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      <div className={style.starfield} ref={backgroundRef}>
        <Scene color={0xe6e6e6} />
      </div>
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
