import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import { Footer, Header } from "./layout";
import { Home } from "./pages";

export const App = () => {
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
};
