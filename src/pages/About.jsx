import Counter from "../components/Counter";
import Navigation from "../layouts/header/Navigation";
import CopyRight from "../layouts/footer/CopyRight";
import Footer from "../layouts/footer/Footer";

function About() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full p-5">
        <Counter />
      </div>
    </>
  );
}
export default About;
