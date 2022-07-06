import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerformances } from "../store/actions/Message";
import CardC from "../shared/CardC";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const UserPage = () => {
  const performances = useSelector((state) => state.performanceReducer);
  console.log(performances);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerformances());
  }, [dispatch]);
  return (
    <Grid container>
      {performances.content &&
        performances.content.map((data = performances) => {
          return <CardC data={data} />;
        })}
    </Grid>
  );
};
export default UserPage;
