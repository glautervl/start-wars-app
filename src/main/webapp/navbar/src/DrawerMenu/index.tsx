import React from "react";

import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PublicIcon from "@material-ui/icons/Public";
import PeopleIcon from "@material-ui/icons/People";
import MenuIcon from "@material-ui/icons/Menu";

export type DrawerToggle = (
  event: React.KeyboardEvent | React.MouseEvent
) => void;

const DrawerMenu: React.FunctionComponent<{}> = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleDrawer =
    (open: boolean): DrawerToggle =>
    (): void => {
      setIsOpen(open);
    };

  const list = () => (
    <List>
      <Link to="/planets">
        <ListItem button>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Planets" />
        </ListItem>
      </Link>

      <Link to="/planets/about">
        <ListItem button>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Planets About" />
        </ListItem>
      </Link>

      <Link to="/people">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
      </Link>

      <Link to="/people/about">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="People Index" />
        </ListItem>
      </Link>
    </List>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default DrawerMenu;
