import { Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { RedInformation } from "./pages/red/RedInformation";
import { Nodes } from "./pages/nodes/Nodes";
import "./styles.css";
import { NewsHome } from "./pages/news/NewsHome";

library.add(fab, fas);

export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="main">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<RedInformation />} path="/red" />
          <Route element={<Nodes />} path="/nodos" />
          <Route element={<NewsHome />} path="/noticias" />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
