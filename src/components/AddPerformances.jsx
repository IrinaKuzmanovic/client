import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPerformance, getGenre } from "../store/actions/Message";
const AddPerformances = () => {
  const genres = useSelector((state) => state.genreReducer);
  console.log(genres);
  const initialPerformanceState = {
    id: null,
    performanceName: "",
    dateOfThePerformance: "",
    //genreId: "",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  const navigate = useNavigate();
  const [performance, setPerformance] = useState(initialPerformanceState);
  const [submitted, setSubmitted] = useState(false);
  console.log(performance);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPerformance({ ...performance, [name]: value });
  };

  const savePerformance = () => {
    const { performanceName, dateOfThePerformance } = performance;
    dispatch(createPerformance(performanceName, dateOfThePerformance))
      .then((data) => {
        setPerformance({
          id: data.id,
          performanceName: data.performanceName,
          dateOfThePerformance: data.dateOfThePerformance,
          //genreId: data.genres.content.id,
        });
        setSubmitted(true);
        console.log(data);
      })
      .then(() => {
        navigate(`/performances`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newPerformance = () => {
    setPerformance(initialPerformanceState);
    setSubmitted(false);
  };
  return (
    <div>
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newPerformance}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="performance">Naziv predstave</label>
              <input
                type="text"
                className="form-control"
                id="performanceName"
                required
                text="performance name"
                value={performance.performanceName}
                onChange={handleInputChange}
                name="performanceName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfThePerformance">Datum predstave</label>
              <input
                type="datetime"
                className="form-control"
                text="date of the performance"
                id="dateOfThePerformance"
                required
                value={performance.dateOfThePerformance}
                onChange={handleInputChange}
                name="dateOfThePerformance"
              />
            </div>
            {/*      <div className="form-group">
              <label for="genre">Zanr</label>
              <select id="genreId" name="genreId" onChange={handleInputChange}>
                {genres.content &&
                  genres.content.map((data) => (
                    <>
                      <option value="genreId">{data.id}</option>
                    </>
                  ))}
              </select>
            </div> */}
            <button onClick={savePerformance} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPerformances;
