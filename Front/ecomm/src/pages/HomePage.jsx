import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  // Mock de produtos (futuramente virá da API)
  const produtos = [
    {
      id: 1,
      nome: "Console Sony PlayStation 5 Slim",
      preco: "R$ 3.626,07",
      desconto: "-2%",
      imagem: "/img/produto1.png", // futuramente substitua pelo caminho real
    },
    {
      id: 2,
      nome: "Placa de Vídeo AMD Radeon RX 7600",
      preco: "R$ 1.649,99",
      desconto: "-17%",
      imagem: "/img/produto2.png",
    },
    {
      id: 3,
      nome: "Processador Intel Core i5-10400F",
      preco: "R$ 649,99",
      desconto: "-22%",
      imagem: "/img/produto3.png",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Banner principal / Carrossel */}
      <Box
        sx={{
          height: 250,
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" color="text.secondary">
          Banner
        </Typography>
      </Box>

      {/* Título da seção */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Semana do Cliente
      </Typography>

      {/* Lista de produtos */}
      <Grid container spacing={3}>
        {produtos.map((produto) => (
          <Grid item xs={12} sm={6} md={4} key={produto.id}>
            <Card sx={{ height: "100%", cursor: "pointer" }}>
              {/* Imagem do produto */}
              <CardMedia
                component="img"
                height="160"
                image={produto.imagem}
                alt={produto.nome}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="subtitle1" gutterBottom noWrap>
                  {produto.nome}
                </Typography>
                <Typography variant="h6" color="primary">
                  {produto.preco}
                </Typography>
                <Typography variant="body2" color="error">
                  {produto.desconto}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Botão "Ver todos" */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/produtos"
        >
          Ver todos
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;
