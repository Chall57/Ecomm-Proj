import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
  Chip,
  Button,
} from "@mui/material";

function ClienteTrocas() {
  // Mock de trocas
  const [trocas] = useState([
    {
      id: 101,
      pedidoId: 2,
      produto: "Notebook Gamer",
      motivo: "Defeito de fábrica",
      status: "Em análise",
    },
    {
      id: 102,
      pedidoId: 3,
      produto: "Mouse sem fio",
      motivo: "Produto não corresponde ao anunciado",
      status: "Aprovada",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Em análise":
        return "warning";
      case "Aprovada":
        return "success";
      case "Rejeitada":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h5" gutterBottom>
        Minhas Trocas
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        {trocas.map((troca) => (
          <Grid item xs={12} key={troca.id}>
            <Card variant="outlined">
              <CardContent>
                <Grid
                  container
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>Troca #{troca.id}</b> (Pedido #{troca.pedidoId})
                    </Typography>
                    <Typography variant="body2">
                      Produto: {troca.produto}
                    </Typography>
                    <Typography variant="body2">
                      Motivo: {troca.motivo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Chip
                      label={troca.status}
                      color={getStatusColor(troca.status)}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
                  <Button variant="contained" size="small" color="secondary">
                    Detalhes
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ClienteTrocas;
