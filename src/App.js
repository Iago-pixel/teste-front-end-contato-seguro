import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/UserPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addUsers } from "./store/modules/users/actions";
import { addCompanies } from "./store/modules/companies/actions";

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
    axios
      .get("http://127.0.0.1:5000/company")
      .then((res) => {
        dispatch(addCompanies(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/:id" Component={UserPage} />
    </Routes>
  );
}

export default App;
