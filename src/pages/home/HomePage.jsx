import React, { useState, useEffect } from "react";
import DataService from "../../store/services/DataService";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const performances = useSelector((state) => state.performanceReducer);

  return (
    <div>
      {performances.content &&
        performances.content.map((item) => (
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
                  {item.performanceName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <h6 style={{ paddingTop: 10 }}>Datum izvodjenja:</h6>
                  {item.dateOfThePerformance}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Container>
        ))}
    </div>
  );
};

export default HomePage;
