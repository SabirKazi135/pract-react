function List() {
  const fruits = ["aplle", "orange", "coconut", "pineapple"];
  const ListItems = fruits.map((fruit) => {
    return <li>{fruit}</li>;
  });
  return <ol>{ListItems}</ol>;
}

export default List;
