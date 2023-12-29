import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <div >
      <Toolbar className="mt-4 position-relative w-40 mx-auto animated slideInDown d-flex align-items-center">
        <Box className="d-flex">
        <h3 className='text-primary'>Explore new places!</h3>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
            
              <InputBase placeholder="Search…" className="form-control border-1 rounded-pill pt-2" />

            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </div>
  );
};

export default Header;
