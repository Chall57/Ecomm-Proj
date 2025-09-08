import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AutorenewIcon from "@mui/icons-material/Autorenew";

function ClientePerfil() {
  // ⚠️ Depois vamos puxar os dados do cliente logado
  const cliente = {
    nome: "Lucas",
    email: "lucas.franca.paulino@hotmail.com",
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      {/* Topo com avatar, nome e email */}
      <Card elevation={4} sx={{ mb: 4 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ width: 72, height: 72, bgcolor: "secondary.main" }} />
          <Box>
            <Typography variant="h6">Bem-vindo, {cliente.nome}</Typography>
            <Typography variant="body2" color="text.secondary">
              {cliente.email}
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Button
              variant="contained"
              color="warning"
              component={Link}
              to="/clientes/form"
            >
              Editar Dados
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Atalhos */}
      <Typography variant="h6" gutterBottom>
        Atalhos
      </Typography>
      <Grid container spacing={3}>
        {/* Meus dados */}
        <Grid item xs={12} sm={4}>
          <Card
            component={Link}
            to="/clientes/info"
            sx={{
              textDecoration: "none",
              "&:hover": { boxShadow: 6 },
              height: "100%",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <PersonIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="subtitle1">Meus dados</Typography>
              <Typography variant="body2" color="text.secondary">
                Altere seus dados e cadastre endereços e cartões
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Meus pedidos */}
        <Grid item xs={12} sm={4}>
          <Card
            component={Link}
            to="/pedidos"
            sx={{
              textDecoration: "none",
              "&:hover": { boxShadow: 6 },
              height: "100%",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <ShoppingBagIcon sx={{ fontSize: 40, color: "success.main" }} />
              <Typography variant="subtitle1">Meus pedidos</Typography>
              <Typography variant="body2" color="text.secondary">
                Veja históricos e acompanhe suas compras
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Trocas */}
        <Grid item xs={12} sm={4}>
          <Card
            component={Link}
            to="/trocas"
            sx={{
              textDecoration: "none",
              "&:hover": { boxShadow: 6 },
              height: "100%",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <AutorenewIcon sx={{ fontSize: 40, color: "error.main" }} />
              <Typography variant="subtitle1">Trocas</Typography>
              <Typography variant="body2" color="text.secondary">
                Solicite e acompanhe suas trocas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ClientePerfil;
