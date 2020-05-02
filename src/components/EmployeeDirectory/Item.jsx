import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = (props) => {
  const styles = {
    employeePhoto: {
      maxHeight: 50,
      maxWidth: 50,
    },
  };

  const [employeeImageUrl, setEmployeeImageUrl] = useState(
    "https://api.adorable.io/avatars/daniel"
  );

  useEffect(() => {
  
    axios
      .get("https://api.adorable.io/avatars/random")
      .then((response) => {
        setEmployeeImageUrl(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      <div className="col">
        <img
          src={employeeImageUrl}
          alt="Employee avatar"
          style={styles.employeePhoto}
        ></img>
      </div>
      <div className="col">{props.id}</div>
      <div className="col">{props.employee_name}</div>
      <div className="col"> $ {props.employee_salary}</div>
      <div className="col">{props.employee_age}</div>
    </div>
  );
};

export default Item;