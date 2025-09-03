import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
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
          Ecomm
        </Typography>

        {/* Links de navegação */}
        <Button color="inherit" component={Link} to="/clientes/form">
          Form UI (Protótipo)
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
