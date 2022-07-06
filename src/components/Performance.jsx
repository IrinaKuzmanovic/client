import React, { useState, useEffect } from "react";
import StripeContainer from "./StripeContainer";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DataService from "../store/services/DataService";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const Performance = () => {
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

  const { id } = useParams();
  useEffect(() => {
    getPerformances(id);
  }, [id]);
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      <div>
        <h1 style={{ paddingTop: 50 }}>Pozorisna karta</h1>
        <Container
          sx={{
            paddingBottom: 5,
            paddingTop: 5,
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
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Predstava
              </Typography>
              <Typography variant="h5" component="div">
                {currentPerformance.performanceName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <h6 style={{ paddingTop: 10 }}>Datum izvodjenja:</h6>
                {currentPerformance.dateOfThePerformance}
              </Typography>
              <h5 style={{ paddingBottom: 5 }}>Pozoriste:</h5>
              {currentPerformance.theater &&
                currentPerformance.theater.map((item) => (
                  <Typography variant="body2" style={{ paddingBottom: 15 }}>
                    {item.theaterName + ", " + item.address}
                  </Typography>
                ))}
              <h5>Izvodjaci:</h5>
              {currentPerformance.performer &&
                currentPerformance.performer.map((item) => (
                  <Typography variant="body2">
                    {item.firstNamePerformer + " " + item.lastNamePerformer}
                  </Typography>
                ))}
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Container>
        {showItem ? (
          <StripeContainer />
        ) : (
          <div>
            {currentPerformance.ticket &&
              currentPerformance.ticket.map((item) => (
                <h3>$ {item.ticketPrice}</h3>
              ))}
            <Container
              style={{
                width: "250px",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <button size="small" onClick={() => setShowItem(true)}>
                PAYMENT
              </button>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

export default Performance;
