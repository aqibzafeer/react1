function MenuItem({ item }) {
  return (
    <>
      <li key={item.id}>
        <a
          className=" font-bold hover:text-yellow-300 px-5 uppercase"
          href={item.link}
        >
          {item.title}
        </a>
      </li>
    </>
  );
}

export default MenuItem;
