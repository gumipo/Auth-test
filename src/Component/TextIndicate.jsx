import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: "white",
  },
  inline: {
    display: "inline",
  },
});

const TextIndicate = ({ text, userImage, twitterName }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="user image" src={userImage} />
        </ListItemAvatar>

        <ListItemText
          primary={"@" + twitterName}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {text}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </List>
  );
};

export default TextIndicate;
