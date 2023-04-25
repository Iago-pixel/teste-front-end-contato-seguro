import { Container } from "./style";
import logo from "../../img/logo.png";
import Button from "../../components/Button";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import UserFormEdit from "../../components/UserFormEdit";
import axios from "axios";
import { removeUser } from "../../store/modules/users/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Home = () => {
  const users = useSelector((state) => state.users);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("");
  const [usersFiltered, setUsersFiltered] = useState(users);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    birth: "",
    city: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setUsersFiltered(
      users.filter((user) => user[searchType]?.includes(search))
    );
  }, [search, searchType, users]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const editUser = (user) => () => {
    setData(user);
    openModal();
  };

  const deleteUser = (user) => () => {
    axios
      .delete(`http://127.0.0.1:5000/user/${user.id}`)
      .then((response) => {
        console.log(response);
        dispatch(removeUser(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <div className="logo-box">
        <img src={logo} alt="" />
      </div>
      <div className="inputs-box">
        <Button onClick={openModal}>
          <i class="fa-regular fa-plus"></i>
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <UserForm closeModal={closeModal} />
        </Modal>
        <Search setSearch={setSearch} setSearchType={setSearchType} />
      </div>
      <div className="users-box">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Nascimento</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {search
              ? usersFiltered.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.birth}</td>
                    <td>{user.city}</td>
                    <td>
                      <div className="user-buttons">
                        <Button>
                          <FontAwesomeIcon icon={faUser} />
                        </Button>
                        <Button onClick={editUser(user)}>
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Modal
                          isOpen={modalIsOpen}
                          onRequestClose={closeModal}
                          style={customStyles}
                        >
                          <UserFormEdit closeModal={closeModal} data={data} />
                        </Modal>
                        <Button onClick={deleteUser(user)}>
                          <i className="fa-regular fa-trash-can"></i>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              : users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.birth}</td>
                    <td>{user.city}</td>
                    <td>
                      <div className="user-buttons">
                        <Link to={`/${user.id}`}>
                          <Button>
                            <FontAwesomeIcon icon={faUser} />
                          </Button>
                        </Link>
                        <Button onClick={editUser(user)}>
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Modal
                          isOpen={modalIsOpen}
                          onRequestClose={closeModal}
                          style={customStyles}
                        >
                          <UserFormEdit closeModal={closeModal} data={data} />
                        </Modal>
                        <Button onClick={deleteUser(user)}>
                          <i className="fa-regular fa-trash-can"></i>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};
