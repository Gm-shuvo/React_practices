import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Pagination from "./Components/Pagination";
import Searchbar from "./Components/Searchbar";
import { useDispatch, useSelector } from "react-redux";

import { setAllUsers, getAllUsers, deleteAUser } from "./app/UserSlicer";

export default function App() {
  const [usersdata, setUsersdata] = useState();
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [visibleTodos, setVisibleTodos] = useState(0)
  const dispatch = useDispatch();
  const { users } = useSelector(getAllUsers);

  useEffect(() => {
    setUsersdata(users);
  }, [users]);
  console.log(users);
  useEffect(() => {
    const fetchTodos = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          // console.log(res.data);
          dispatch(setAllUsers(res.data));
        })
        .catch((err) => console.log(err));
    };
    fetchTodos();
  }, []);

  const totalPage = Math.ceil(usersdata?.length / perPage);

  const indexOfLastTodo = currentPage * perPage;
  const indexOfFristTodo = indexOfLastTodo - perPage;

  const visibleUsers = usersdata?.slice(indexOfFristTodo, indexOfLastTodo);

  // const handleDelete = ()=>{
  //   dispatch()
  // }

  console.log(usersdata?.length);
  return (
    <div className="App">
      <>
        <Searchbar users={users} setUsersdata={setUsersdata} />
        {visibleUsers?.map((user) => {
          return (
            <h2
              className="text-sm mt-2 bg-gray-100 "
              key={user.id}
              onClick={() => dispatch(deleteAUser(user.id))}
            >
              {user.title}
            </h2>
          );
        })}
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    </div>
  );
}
