import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentForm from "./PaymentForm";

import DataService from "../store/services/DataService";
import { useParams } from "react-router-dom";

const PUBLIC_KEY =
  "pk_test_51Ky2LLG1nIyP1xYPAfQhHedaaZ7jlLva3FF1X0iuV0ftwmiYX0tarTRSuU3VMQuwYPR9EY9a27f7EXMvYQO8lHgN00xOnbXhJr";

const stripeTestPromise = loadStripe(PUBLIC_KEY);
const StripeContainer = ({ onSubmit }) => {
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
  //console.log(currentPerformance.ticket.ticketPrice);
  const { id } = useParams();
  useEffect(() => {
    getPerformances(id);
  }, [id]);
  return (
    <div>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm onSubmit={onSubmit} />
      </Elements>
    </div>
  );
};

export default StripeContainer;
