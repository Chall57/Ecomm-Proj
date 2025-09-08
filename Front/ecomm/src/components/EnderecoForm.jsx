import React from "react";
import { Grid, TextField } from "@mui/material";

function EnderecoForm({ endereco }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Tipo de residência" value={endereco.tipoResidencia} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Tipo Logradouro" value={endereco.tipoLogradouro} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Logradouro" value={endereco.logradouro} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Número" value={endereco.numero} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Bairro" value={endereco.bairro} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="CEP" value={endereco.cep} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Cidade" value={endereco.cidade} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Estado" value={endereco.estado} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="País" value={endereco.pais} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Observações" value={endereco.observacoes} />
      </Grid>
    </Grid>
  );
}

export default EnderecoForm;
