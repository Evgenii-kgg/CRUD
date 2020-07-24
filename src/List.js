import React from "react";
import "./App.css";
//import Clock from './Clock';
import { Button } from "@material-ui/core";

function List(props) {
  console.log(props);  

  const itemList = props.items;

  return (
    <div className="item-list">
      {itemList.map((item) => (
        <div className="item" key={item.id}>
          <p className="item-name">{item.name} </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.action({ actionType: "delete", data: item })}
          >
            ✘
          </Button>
        </div>
      ))}
    </div>
  );
}
export default List;
