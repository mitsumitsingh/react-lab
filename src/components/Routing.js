import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Employees from "./employee/Employees";
import cafes from "./cafe/cafes";
import EditEmployee from "./employee/EditEmployee";
import AddEmployee from "./employee/AddEmployee";

function Routing(props) {
  return (
    <Switch>
      <Route exact path="/employees" component={Employees} />
      <Route path="/employees/add" component={AddEmployee} exact />
      <Route path="/employees/:id" component={EditEmployee} exact />
      <Route path="/cafes" component={cafes} exact />
      <Route path="/" component={Home} />
    </Switch>
  );
}
export default memo(Routing);
