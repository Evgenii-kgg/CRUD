import React from "react";
import "./App.css";

import { TextField } from "@material-ui/core";

function Form(props) {
  console.log(props);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <br />
      <label style={{ marginLeft: "50px", marginRight: "10px" }}>
        Название
        <br />
        <TextField
          id="outlined-basic"
          label="Text"
          variant="outlined"
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
      </label>
      <input type="submit" value="Добавить" onClick={props.Add} />
    </div>
  );
}
export default Form;
