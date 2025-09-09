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

function ClientePedidos() {
  // Mock de pedidos
  const [pedidos] = useState([
    {
      id: 1,
      data: "2025-09-01",
      status: "Em andamento",
      total: "R$ 1.200,00",
      itens: [
        { nome: "Placa de Vídeo RTX 3060", qtd: 1 },
        { nome: "Fonte 650W", qtd: 1 },
      ],
    },
    {
      id: 2,
      data: "2025-08-20",
      status: "Entregue",
      total: "R$ 3.500,00",
      itens: [{ nome: "Notebook Gamer", qtd: 1 }],
    },
    {
      id: 3,
      data: "2025-08-10",
      status: "Cancelado",
      total: "R$ 300,00",
      itens: [{ nome: "Mouse sem fio", qtd: 1 }],
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Em andamento":
        return "warning";
      case "Entregue":
        return "success";
      case "Cancelado":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h5" gutterBottom>
        Meus Pedidos
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        {pedidos.map((pedido) => (
          <Grid item xs={12} key={pedido.id}>
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
                      <b>Pedido #{pedido.id}</b> - {pedido.data}
                    </Typography>
                    <Typography variant="body2">
                      Total: {pedido.total}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Chip
                      label={pedido.status}
                      color={getStatusColor(pedido.status)}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle2">Itens:</Typography>
                {pedido.itens.map((item, idx) => (
                  <Typography key={idx} variant="body2">
                    {item.qtd}x {item.nome}
                  </Typography>
                ))}

                <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    sx={{ mr: 1 }}
                  >
                    Detalhes
                  </Button>
                  {pedido.status === "Entregue" && (
                    <Button variant="outlined" size="small" color="primary">
                      Solicitar Troca
                    </Button>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ClientePedidos;
