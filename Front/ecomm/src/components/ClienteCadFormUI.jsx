import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  MenuItem,
} from "@mui/material";

function ClienteCadFormUI() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    nascimento: "",
    genero: "",
    celular: "",
    cpf: "",
    email: "",
    emailConfirm: "",
    senha: "",
    senhaConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
    // POST para API depois...
  };

  // Props comuns para os TextFields (garante altura mínima uniforme)
  const commonTextFieldProps = {
    fullWidth: true,
    sx: {
      // força altura mínima uniforme para o OutlinedInput (ajusta campos tipo date também)
      "& .MuiOutlinedInput-root": {
        minHeight: 56,
      },
      // alinha o conteúdo verticalmente
      "& .MuiOutlinedInput-input": {
        paddingTop: "14px",
        paddingBottom: "14px",
      },
    },
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Crie sua conta pessoal
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Nome */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Nome
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  label="Seu nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Sobrenome */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Sobrenome
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  label="Sobrenome"
                  name="sobrenome"
                  value={form.sobrenome}
                  onChange={handleChange}
                  required
                />
              </Grid>
        
              {/* Data de Nascimento */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Data de Nascimento
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  type="date"
                  name="nascimento"
                  // para que o label não sobreponha o valor do date
                  InputLabelProps={{ shrink: true }}
                  value={form.nascimento}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Gênero */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Gênero
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  select
                  name="genero"
                  value={form.genero || ""}
                  onChange={handleChange}
                  // displayEmpty para permitir mostrar texto quando value é "".
                  SelectProps={{
                    displayEmpty: true,
                    renderValue: (selected) =>
                      selected ? (
                        selected
                      ) : (
                        // placeholder exibido dentro do campo, estilizado mais claro
                        <span style={{ color: "rgba(0,0,0,0.6)" }}>Gênero *</span>
                      ),
                  }}
                  required
                >
                  {/* NÃO colocamos um MenuItem de placeholder aqui.
                      Somente as opções verdadeiras são listadas: */}
                  <MenuItem value="Masculino">Masculino</MenuItem>
                  <MenuItem value="Feminino">Feminino</MenuItem>
                  <MenuItem value="Outro">Outro</MenuItem>
                </TextField>
              </Grid>

              {/* Celular */}
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Telefone
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  label="Telefone"
                  name="celular"
                  value={form.celular}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* CPF */}
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  CPF
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  label="CPF"
                  name="cpf"
                  value={form.cpf}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* E-mail */}
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  E-mail
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  type="email"
                  label="E-mail"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Confirmar e-mail */}
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Digite novamente o e-mail
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  type="email"
                  label="Confirme seu e-mail"
                  name="emailConfirm"
                  value={form.emailConfirm}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Senha */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Senha
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  type="password"
                  label="Senha"
                  name="senha"
                  value={form.senha}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Confirmar senha */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Digite novamente a senha
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  type="password"
                  label="Confirme sua senha"
                  name="senhaConfirm"
                  value={form.senhaConfirm}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Botão Criar Conta */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  size="large"
                  sx={{ py: 1.8, fontSize: "1rem" }}
                >
                  Criar Conta
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ClienteCadFormUI;
