import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const memoizedCars = createSelector(
  [(state) => state.carList.cars, (state) => state.carList.searchTerm],
  (cars, searchTerm) =>
    cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(memoizedCars);
  const name = useSelector((state) => state.carCreation.name); 
  const handleCarDelete = (id) => {
    dispatch(removeCar(id));
  };
  const renderedCars = useMemo(() => {
    return cars.map((car) => {
      const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
      return (
        <div key={car.id} className={`panel ${bold && 'bold'}`}>
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            onClick={() => handleCarDelete(car.id)}
            className="button is-danger"
          >
            DELETE
          </button>
        </div>
      );
    });
  }, [cars , name]);
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
export default CarList;
