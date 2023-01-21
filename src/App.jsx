import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";

const style = {
  app: `flex flex-col min-h-screen justify-between`,
  main: `my-auto mt-0`,
};

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Starfield />
      <div className={style.main}>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
