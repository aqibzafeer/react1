// App.jsx
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default App;

{
  /* <div className=" w-full">
        <SignUp />
      </div>

      <Navigation />

      <div className="flex flex-col sm:flex-row w-full p-5">
        <Home />
      </div>

      <div className=" w-full">
        <Footer />
        <CopyRight />
      </div> */
}
//     </>
//   );
// }
