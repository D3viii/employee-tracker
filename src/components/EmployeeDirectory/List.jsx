import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1 id="EMP">You have {props.employees.length} Employees</h1>
      </div>
      <div>
            {props.employees.map((employee) => (
              <Item {...employee} key={employee.id}/>
            ))}
      </div>
    </div>
  );
};

export default List;
