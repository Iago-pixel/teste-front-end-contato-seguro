import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addUsers } from "./store/modules/users/actions";

function App() {
  const dispatch = useDispatch();

  //MOTAGEM
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/user")
      .then((res) => {
        dispatch(addUsers(res.data));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Routes>
      <Route exact path="/" Component={Home} />
    </Routes>
  );
}

export default App;
