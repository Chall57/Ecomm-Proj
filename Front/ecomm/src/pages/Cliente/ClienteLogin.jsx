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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginFormUI() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentativa de login:", form);
    // Aqui você faria a chamada à API de autenticação
  };

  // Props comuns para padronizar os campos
  const commonTextFieldProps = {
    fullWidth: true,
    sx: {
      "& .MuiOutlinedInput-root": {
        minHeight: 56,
      },
      "& .MuiOutlinedInput-input": {
        paddingTop: "14px",
        paddingBottom: "14px",
      },
    },
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* E-mail */}
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  E-mail
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  type="email"
                  label="Digite seu e-mail"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Senha */}
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Senha
                </Typography>
                <TextField
                  {...commonTextFieldProps}
                  type="password"
                  label="Digite sua senha"
                  name="senha"
                  value={form.senha}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Botão Login */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{ py: 1.5, fontSize: "1rem" }}
                >
                  Entrar
                </Button>
              </Grid>

              {/* Botão Cadastrar */}
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  size="large"
                  sx={{ py: 1.5, fontSize: "1rem" }}
                  onClick={() => navigate("/clientes/form")}
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

export default LoginFormUI;
