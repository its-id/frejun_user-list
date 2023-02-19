const fetchUsers = async () => {
  const res = await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((res) => {
      setData(res.users);
      setFilteredArray(res.users);
      setLoading(false);
    })
    .catch((err) => console.log("error is", err));
};
