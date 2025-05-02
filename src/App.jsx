import "./App.css";
import Header from "./layouts/header/Header";

import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";

import CopyRight from "./layouts/footer/CopyRight";
import Navigation from "./layouts/header/Navigation";

import Footer from "./layouts/footer/Footer";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className=" w-full">
        <Header />
        <LogIn />
        <SignUp />
      </div>

      <Navigation />

      <div className="flex flex-col sm:flex-row w-full p-5">
        <Home />
      </div>

      <div className=" w-full">
        <Footer />
        <CopyRight />
      </div>
    </>
  );
}

export default App;
