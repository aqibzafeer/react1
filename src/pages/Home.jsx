import Counter from "../components/Counter";
import Todo from "../components/ToDoList";
import SideBar from "./SideBar";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full p-5">
        <SideBar />
        <AboutLeft />
        <AboutRight />
      </div>

      {/* <div className="flex flex-col sm:flex-row w-full p-5">
        <Todo />
        <Counter />
      </div> */}
    </>
  );
}

export default Home;
