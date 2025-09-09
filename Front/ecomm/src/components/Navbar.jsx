import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Marca/Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          HOME
        </Typography>

        {/* Botão Administração -> AdminHome */}
        <Button
          color="inherit"
          component={Link}
          to="/admin"
          sx={{ mr: 2 }}
        >
          Administração
        </Button>

        {/* Avatar -> Perfil do cliente */}
        <IconButton component={Link} to="/perfil" color="inherit">
          <Avatar sx={{ bgcolor: "secondary.main" }}></Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
