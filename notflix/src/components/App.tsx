import React from 'react';
import { RouteComponentProps, withRouter } from "react-router"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import {InputLabel, MenuItem, FormControl, Select, Button } from "@material-ui/core"

import Logo from "../assets/notflix_logo.png"

import '../styles/App.css';

const useSelectStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

type AppComponentRouterProps = RouteComponentProps;

const App: React.FC<AppComponentRouterProps> = ({ history }) => {
  const classesSelect = useSelectStyles();
  const classesButton = useButtonStyles();
  const [lang, setLang] = React.useState('')

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setLang(e.target.value as string)
  }

  return (
    <div className="app">
      <header className="app-header">
        <img className="app-header-logo"src={Logo} alt="Notflix logo" />
        <div className="app-header-menu">
          <FormControl variant="outlined" className={classesSelect.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={lang}
              onChange={handleChange}
              label="Age"
              className={classesSelect.selectEmpty}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Español">Español</MenuItem>
            </Select>
          </FormControl>
          <div className={classesButton.root}>
            <Button variant="contained" color="primary" onClick={() => {
              history.push("/signin");
            }}>
              Sign In
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default withRouter(App);
