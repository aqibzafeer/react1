import { Link } from "react-router-dom";

function MenuItem({ item }) {
  return (
    <>
      <li key={item.id}>
        <Link
          className=" font-bold hover:text-yellow-300 px-5 uppercase"
          to={item.link}
        >
          {item.title}
        </Link>
      </li>
    </>
  );
}

export default MenuItem;
