import React from "react";
import { Container, Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Painel de Administração
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ mb: 3, color: "text.secondary" }}
          >
            Escolha uma das opções abaixo para gerenciar o sistema
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/admin/clientes"
              >
                Gerenciar Clientes
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AdminHome;
