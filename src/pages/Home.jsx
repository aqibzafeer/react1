import Counter from "../components/Counter";
import Todo from "../components/ToDoList";
import Navigation from "../layouts/header/Navigation";
import CopyRight from "../layouts/footer/CopyRight";
import Footer from "../layouts/footer/Footer";
import SideBar from "./SideBar";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

function Home() {
  return (
    <>
      <Navigation />

      <div className="flex flex-col sm:flex-row w-full p-5">
        <Todo />
        <Counter />
      </div>

      <div className="flex flex-col sm:flex-row w-full p-5">
        <SideBar />
        <AboutLeft />
        <AboutRight />
      </div>

      <Footer />
      <CopyRight />
    </>
  );
}
export default Home;
