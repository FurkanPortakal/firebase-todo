import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="checkedA" color="primary" />
        }
        label="ToDo"
      />
      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="checkedB" color="primary" />
        }
        label="In Progress"
      />
      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="checkedB" color="primary" />
        }
        label="Done"
      />
    </FormGroup>
  );
}
