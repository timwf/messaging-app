import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';



const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "12px",
    marginLeft: "10px",
    width: "13px"
  },
  input: {
        width: "100%",
          bottom: "0",
          position: "fixed",
          textAlign: "center",
          backgroundColor: "grey",
          paddingBottom: "14px",
          paddingTop: "14px"

  },
}));

function InputField() {
  const classes = useStyles()

    
    return (
        <div className={classes.input}>
              <div>
                   <TextField
                       label="Write your message"
                    />
                   <Button
                   variant="contained"
                   color="primary"
                   className={classes.button}
                   endIcon={<Icon>send</Icon>}
                 >.
                 </Button>
             </div>
        </div>

    );
}


export default InputField;
