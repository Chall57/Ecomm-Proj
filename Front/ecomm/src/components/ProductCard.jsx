import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function ProductCard({ nome, preco, desconto, imagem, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{ height: "100%", cursor: "pointer", "&:hover": { boxShadow: 6 } }}
    >
      <CardMedia
        component="img"
        height="160"
        image={imagem}
        alt={nome}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="subtitle1" gutterBottom noWrap>
          {nome}
        </Typography>
        <Typography variant="h6" color="primary">
          {preco}
        </Typography>
        {desconto && (
          <Typography variant="body2" color="error">
            {desconto}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default ProductCard;
