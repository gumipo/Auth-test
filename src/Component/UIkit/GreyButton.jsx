//インポート
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

//デザイン
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "grey",
    color: "000",
    fontSize: 16,
    height: 30,
    marginButtom: 16,
    width: 150,
  },
}));

const GreyButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  );
};
export default GreyButton;
