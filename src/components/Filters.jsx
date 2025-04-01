const Filters = ({ setFilter }) => {
  return (
    <>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Inactive")}>Inactive</button>
    </>
  );
};

export default Filters;
