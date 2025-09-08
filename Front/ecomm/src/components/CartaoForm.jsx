import React from "react";
import { Grid, TextField } from "@mui/material";

function CartaoForm({ cartao }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField fullWidth label="Número do cartão" value={cartao.numero} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Validade" value={cartao.validade} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Bandeira" value={cartao.bandeira} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Nome impresso" value={cartao.nome} />
      </Grid>
    </Grid>
  );
}

export default CartaoForm;
