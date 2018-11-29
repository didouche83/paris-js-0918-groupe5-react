import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SimpleSelect extends React.Component {
  state = {
    frequency: "",
    age:'',
    responsible:'',
    category:'',
    name: "hai",
    labelWidth: 0
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.frequency, 'ola', this.state.age)

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="frequency-required">Fréquence</InputLabel>
          <Select
            value={this.state.frequency}
            onChange={this.handleChange}
            name="frequency"
            inputProps={{
              id: "frequency-required"
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value='once'>Une seule fois</MenuItem>
            <MenuItem value='everyday'>Tous les jours</MenuItem>
            <MenuItem value='everydayWeek'>
              Tous les jours de la semaine (du lundi au vendredi)
            </MenuItem>
            <MenuItem value='everyMonday'>Tous les lundis</MenuItem>
            <MenuItem value='eveyTuesday'>Tous les mardis</MenuItem>
            <MenuItem value='everyWednesday'>Tous les mercredis</MenuItem>
            <MenuItem value='everyThursday'>Tous les jeudis</MenuItem>
            <MenuItem value='everyFriday'>Tous les vendredis</MenuItem>
            <MenuItem value='everySaturday'>Tous les samedis</MenuItem>
          </Select>
          <FormHelperText>
            Indiquer ici la récurrence de l'événement
          </FormHelperText>
        </FormControl>

        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="responsible-required">Responsable</InputLabel>
          <Select
            value={this.state.responsible}
            onChange={this.handleChange}
            name="responsible"
            inputProps={{
              id: "responsible-required"
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value='grey'>Dr Grey</MenuItem>
            <MenuItem value='jackson'>Michael Jackson</MenuItem>
            <MenuItem value='jolivet'>Karine Jolivet</MenuItem>
          </Select>
          <FormHelperText>
            Assigner un responsable à cet événement
          </FormHelperText>
        </FormControl>

         <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="category-required">Catégorie</InputLabel>
          <Select
            value={this.state.category}
            onChange={this.handleChange}
            name="category"
            inputProps={{
              id: "category-required"
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value='medical'>Consultation médicale</MenuItem>
            <MenuItem value='nurse'>Soins infirmiers</MenuItem>
            <MenuItem value='family'>Visite d'un proche</MenuItem>
          </Select>
          {/* <FormHelperText>
            Assigner un responsable à cet événement
          </FormHelperText> */}
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
