import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

import DataService from "../store/services/DataService";
const CardC = ({ data }) => {
  const performances = useSelector((state) => state.performanceReducer);
  const initialPerformanceState = {
    id: null,
    performanceName: "",
    dateOfThePerformance: "",
    //genreId: "",
  };
  const [currentPerformance, setCurrentPerformances] = useState(
    initialPerformanceState
  );
  const getPerformances = (id) => {
    DataService.getByIdPerformances(id)
      .then((response) => {
        setCurrentPerformances(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(currentPerformance);
  const { id } = useParams();
  useEffect(() => {
    getPerformances(id);
  }, [id]);
  return (
    <Container
      sx={{
        paddingBottom: 5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          minWidth: 275,
          width: 140,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Predstava
          </Typography>
          <Typography variant="h5" component="div">
            {data.performanceName}
          </Typography>
          <Typography sx={{ mb: 1.5, paddingTop: 2 }} color="text.secondary">
            <h6>Datum izvodjenja:</h6>
            {data.dateOfThePerformance}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Link to={`/performances-payment/` + data.id}>
            <Button size="small" style={{ fontSize: 12, width: 100 }}>
              ADD CARD
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};
export default CardC;
