import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePerformances } from "../store/actions/Message";
import DataService from "../store/services/DataService";
import { useParams, useNavigate } from "react-router-dom";

import { deletePerformance } from "../store/actions/Message";
const EditPerformances = (props) => {
  const initialPerformanceState = {
    id: null,
    performanceName: "",
    dateOfThePerformance: "",
    //genreId: "",
  };
  const [currentPerformance, setCurrentPerformances] = useState(
    initialPerformanceState
  );
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [message, setMessage] = useState("");
  //const performance = useSelector((state) => state.performanceReducer);
  //console.log(performance);

  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPerformances({ ...currentPerformance, [name]: value });
  };
  const updateContent = () => {
    dispatch(updatePerformances(currentPerformance.id, currentPerformance))
      .then((response) => {
        console.log(response);
        setMessage("The performance was updated successfully!");
        navigate("/api/performances");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removePerformance = () => {
    dispatch(deletePerformance(currentPerformance.id))
      .then(() => {
        navigate("/api/performances");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {currentPerformance ? (
        <div className="edit-form">
          <h4>Predstave</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Naziv predstave</label>
              <input
                type="text"
                className="form-control"
                id="performanceName"
                name="performanceName"
                value={currentPerformance.performanceName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfThePerformance">Datum predstave</label>
              <input
                type="date"
                className="form-control"
                id="dateOfThePerformance"
                name="dateOfThePerformance"
                value={currentPerformance.dateOfThePerformance}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button
            className="badge badge-danger mr-2"
            onClick={removePerformance}
          >
            Delete
          </button>
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default EditPerformances;
