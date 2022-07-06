import React, { useState } from "react";
import ModalComponent from "../shared/ModalComponent";
import { Typography } from "@mui/material";
import Input from "../shared/Input";
import AddButton from "../shared/ButtonC";
import axios from "axios";
import ButtonComponent from "../shared/ButtonC";
import Form from "../shared/Form";

const AddTheater = ({ isOpen, setIsOpen, onAdded }) => {
  const [theaterName, setTheaterName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const theaters = { theaterName, city, address, phoneNumber };

    axios
      .post(`http://localhost:8080/api/theater`, theaters)
      .then((response) => {
        onAdded(response.data);
        setIsOpen(false);
      });
  };

  return (
    <>
      <ModalComponent open={isOpen} onClose={() => setIsOpen(false)}>
        <Form onSubmit={handleSubmit}>
          <Typography>Dodaj pozoriste</Typography>
          <br />
          <Input
            type="text"
            placeholder="Naziv pozorista"
            label="Naziv pozorista"
            onChange={(e) => setTheaterName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Naziv grada"
            label="Naziv grada"
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Naziv adrese"
            label="Naziv grada"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Broj telefona"
            label="Broj telefona"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <ButtonComponent type="submit">Save</ButtonComponent>
        </Form>
      </ModalComponent>
    </>
  );
};

export default AddTheater;
