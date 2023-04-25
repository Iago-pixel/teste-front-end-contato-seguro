import { Container } from "./style";
import logo from "../../img/logo.png";
import Button from "../../components/Button";
import Search from "../../components/Search";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { useState } from "react";
import UserForm from "../../components/UserForm";

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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
          <UserForm />
        </Modal>
        <Search />
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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birth}</td>
                <td>{user.city}</td>
                <td>
                  <div className="user-buttons">
                    <Button>
                      <i class="fa-regular fa-pen-to-square"></i>
                    </Button>
                    <Button>
                      <i class="fa-regular fa-trash-can"></i>
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
