import React from "react";
import { getUserId } from "../Component/Users/selector";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "white",
  },
  inline: {
    display: "inline",
  },
});

const TextIndicate = ({ textUid, text, userImage, twitterName }) => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  const userLayout = textUid === uid ? "p-chat__reverse" : "p-chat-row";
  const userTextLayout = textUid === uid ? "p-text-revers" : "";

  return (
    <List className={classes.root}>
      <ListItem className={userLayout}>
        <ListItemAvatar>
          <Avatar alt="user image" src={userImage} />
        </ListItemAvatar>

        <ListItemText
          className={userTextLayout}
          primary={"@" + twitterName}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {text}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </List>
  );
};

export default TextIndicate;
