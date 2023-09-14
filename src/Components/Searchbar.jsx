import {useState, useEffect} from "react"
import {getAllUsers, setAllUsers} from "../app/UserSlicer"

import {useSelector, useDispatch} from "react-redux"


const Searchbar = ({users, setUsersdata}) =>{
  const [search, setSearch] = useState();
  const [queary, setQueary] = useState();

  const dispatch = useDispatch()
  const handelSearch = (e)=>{
    setQueary(e.target.value);
  }

  useEffect(()=>{
    if(queary){
      setUsersdata(
        users.filter((user)=>{
          // console.log(Object.values(user.title).join(''))
          return Object.values(user).join('').toLowerCase().includes(queary.toLowerCase());
        })
      )
      
    }
    else{
      setUsersdata(users);
    }
  },[queary, users])

  // console.log("search", search)
  return(
    <div className="mt-4 mb-4 w-[40%] border-2 border-gray-400 rounded  m-auto">
      <input className="w-full px-1 text-sm outline-none" type="text" value={queary} onChange={handelSearch}/>
    </div>
  )
}
export default Searchbar