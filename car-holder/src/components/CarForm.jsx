import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.carCreation.name);
  const cost = useSelector((state) => state.carCreation.cost);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value)) || 0);
  };
  return (
    <div className="car-creation panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              maxLength={20}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ""}
              maxLength={20}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default CarForm;
