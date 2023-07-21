import { useState } from "react";
import ShowUser from "./ShowUser";
import UserForm from "./UserForm";
const dummy_users = [
  {
    id: Math.floor(Math.random() * 89999 + 10000),
    username: "Cristiano Ronaldo",
    age: 37,
  },
  {
    id: Math.floor(Math.random() * 89999 + 10000),
    username: "Lionel Messi",
    age: 36,
  },
  {
    id: Math.floor(Math.random() * 89999 + 10000),
    username: "Luka Modric",
    age: 36,
  },
  {
    id: Math.floor(Math.random() * 89999 + 10000),
    username: "Rodrygo Silva",
    age: 22,
  },
];

const DisplayUsers = (props) => {
    let [userContent, setUserContent] = useState([...dummy_users]);
    const getData = newUser => {
        setUserContent(prevContent => [...prevContent,newUser]);
      }
    userContent = userContent.map((user) => (
    <ShowUser user={user} key={user.id}></ShowUser>
  ));  

  return (
    <div>
      <div className="mb-5">
        <UserForm getData={getData}></UserForm>
      </div>
      <div className="mb-3 container">{userContent}</div>
    </div>
  );
};

export default DisplayUsers;
