import { MouseEvent, useState } from "react";

function ListGroup() {
  const cities = ["jaipur", "pune", "delhi"];
  const classes = [
    "list-group-item list-group-item-primary",
    "list-group-item list-group-item-secondary",
    "list-group-item list-group-item-success",
  ];

  // let selectedIndex = -1;
  //hoook(function), its data or state can change over time, contains initial state and dunction that changes state
  // const handleClicked = (event: MouseEvent) =>
  //   console.log(event.currentTarget.className);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={
              selectedIndex === index
                ? classes[cities.indexOf(city)] + " active"
                : classes[cities.indexOf(city)]
            } // {classes[cities.indexOf(city)]} //
          >
            {city}
          </li>
        ))}
        {/* <li className="list-group-item">A simple default list group item</li>

        <li className="list-group-item list-group-item-primary">
          A simple primary list group item
        </li>
        <li className="list-group-item list-group-item-secondary">
          A simple secondary list group item
        </li>
        <li className="list-group-item list-group-item-success">
          A simple success list group item
        </li>
        <li className="list-group-item list-group-item-danger">
          A simple danger list group item
        </li>
        <li className="list-group-item list-group-item-warning">
          A simple warning list group item
        </li>
        <li className="list-group-item list-group-item-info">
          A simple info list group item
        </li>
        <li className="list-group-item list-group-item-light">
          A simple light list group item
        </li>
        <li className="list-group-item list-group-item-dark">
          A simple dark list group item
        </li> */}
      </ul>
    </>
  );
}

export default ListGroup;
