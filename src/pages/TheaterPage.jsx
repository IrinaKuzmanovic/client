import React, { useEffect, useState } from "react";
import Table from "../shared/TableComponent.jsx";
import AddTheater from "../components/AddTheater.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getTheater, deleteTheater } from "../store/actions/Message";
import DataService from "../store/services/DataService";

import { useNavigate, useParams } from "react-router-dom";

const TheaterPage = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theaters = useSelector((state) => state.theaterReducer);
  const { id } = useParams;
  const initialTheatersState = {
    id: id,
    address: "",
    city: "",
    theaterName: "",
    phoneNumber: "",
  };
  const [currentTheater, setCurrentTheater] = useState(initialTheatersState);
  console.log(theaters);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  /*   const getTheater = (id) => {
    DataService.get(id)
      .then((response) => {
        setCurrentTheater(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }; */
  const removeTheaters = () => {
    dispatch(deleteTheater(currentTheater.id))
      .then(() => {
        console.log("irina");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /*   useEffect(() => {
    getTheater(props.match.params.id);
  }, [props.match.params.id]); */
  useEffect(() => {
    dispatch(getTheater());
  }, [dispatch]);

  const column = [
    { heading: "Naziv pozorista" },
    { heading: "Adresa" },
    { heading: "Grad" },
    { heading: "Broj telefona" },
  ];

  return (
    <>
      <h1>Pozorista</h1>
      <AddTheater
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        //onAdded={onTheatAdded}
      />
      <Table
        data={theaters}
        column={column}
        onAddClick={() => setIsOpen(true)}
        onRemoveClick={removeTheaters}
      />
    </>
  );
};

export default TheaterPage;
