import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export const MuiCheckbox = () => {
    return (
        <section>
        <FormControl component="fieldset">
          <FormLabel component="legend">Activities</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Beach"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Sightseeing"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Food"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Cruise Tour"
              labelPlacement="end"
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Swimming"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="City Tour"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Festival"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Pubs"
              labelPlacement="end"
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Nightclub"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Concert"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Shopping"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Fun Events"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
        </section>
      );
}
