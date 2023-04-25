import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./style";
import logo from "../../img/logo.png";
import Button from "../../components/Button";
import Search from "../../components/Search";
import { Link } from "react-router-dom";
import { addCompanies } from "../../store/modules/companies/actions";

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

export const UserPage = () => {
  const allCompanies = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    birth: "",
    city: "",
  });
  const [companies, setCompanies] = useState([]);
  const [companiesFiltered, setCompaniesFiltered] = useState([]);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("");

  const formSchema = yup.object().shape({
    search: yup.string().required("Campo vazio"),
    searchType: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitSelect = ({ company_id }) => {
    axios
      .patch(`http://127.0.0.1:5000/user/${id}/${company_id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    closeModal();
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/user/${id}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`http://127.0.0.1:5000/user/${id}/companies`)
      .then((response) => {
        console.log(response);
        setCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setCompaniesFiltered(
      companies.filter((company) => company[searchType]?.includes(search))
    );
  }, [searchType, search]);

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
      <h1>{user.name}</h1>
      <div className="inputs-box">
        <Button onClick={openModal}>
          <i className="fa-regular fa-plus"></i>
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="add-company-box">
            <form onSubmit={handleSubmit(submitSelect)}>
              <select {...register("company_id")}>
                {allCompanies.map((company) => (
                  <option value={company.id} id={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
              <Button type="submit">+</Button>
            </form>
          </div>
        </Modal>
        <Search setSearch={setSearch} setSearchType={setSearchType} />
      </div>
      <div className="companies-box">
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>cnpj</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {search
              ? companiesFiltered.map((company) => (
                  <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.cnpj}</td>
                    <td>{company.address}</td>
                  </tr>
                ))
              : companies.map((company) => (
                  <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.cnpj}</td>
                    <td>{company.address}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};
