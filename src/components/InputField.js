import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "12px",
    marginLeft: "10px",
    width: "10px"
  },
  input: {
      position: "absolute",
      bottom: "2vh",
      textAlign: "center",
      width: "100%",
  },
}));

function InputField() {
    const classes = useStyles();



    return (
        <div className={classes.input}>
              <form>
                   <TextField id="standard-basic" label="Standard"  />
                   <Button
                   variant="contained"
                   color="primary"
                   className={classes.button}
                   endIcon={<Icon>send</Icon>}
                 >
                 </Button>
             </form>
        </div>

    );
}


export default InputField;
