import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
  TextField,
  Box,
} from "@mui/material";

function ClienteInfo() {
  // Mock de informações do cliente (futuramente pode vir da API)
  const cliente = {
    nome: "Nome do Cliente",
    email: "email@exemplo.com",
    cpf: "000.000.000-00",
    telefone: "(00) 00000-0000",
  };

  const [cartoes, setCartoes] = useState([
    { numero: "**** **** **** 1234", validade: "12/28", bandeira: "Visa" },
  ]);

  const [enderecos, setEnderecos] = useState([
    {
      tipoResidencia: "Casa",
      tipoLogradouro: "Rua",
      logradouro: "das Flores",
      numero: "123",
      bairro: "Centro",
      cep: "00000-000",
      cidade: "Cidade Exemplo",
      estado: "SP",
      pais: "Brasil",
      observacoes: "Opcional",
    },
  ]);

  const handleAddCartao = () => {
    alert("Adicionar novo cartão (futuro modal/form)");
  };

  const handleAddEndereco = () => {
    alert("Adicionar novo endereço (futuro modal/form)");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Card elevation={4}>
        <CardContent>
          {/* Informações do Cliente */}
          <Typography variant="h5" gutterBottom>
            Informações do Cliente
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6}>
              <Typography><b>Nome:</b> {cliente.nome}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography><b>E-mail:</b> {cliente.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography><b>CPF:</b> {cliente.cpf}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography><b>Telefone:</b> {cliente.telefone}</Typography>
            </Grid>
          </Grid>

          {/* Cartões */}
          <Typography variant="h6" gutterBottom>
            Cartões
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            {cartoes.map((cartao, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography><b>Número:</b> {cartao.numero}</Typography>
                    <Typography><b>Validade:</b> {cartao.validade}</Typography>
                    <Typography><b>Bandeira:</b> {cartao.bandeira}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleAddCartao}
          >
            Adicionar Cartão
          </Button>

          {/* Endereços */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Endereços
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {enderecos.map((endereco, index) => (
                <Grid item xs={12} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Tipo de residência"
                            placeholder="Casa, Apartamento..."
                            value={endereco.tipoResidencia}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Tipo Logradouro"
                            placeholder="Rua, Avenida..."
                            value={endereco.tipoLogradouro}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Logradouro"
                            placeholder="Digite o logradouro"
                            value={endereco.logradouro}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Número"
                            placeholder="Digite o número"
                            value={endereco.numero}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Bairro"
                            placeholder="Digite o bairro"
                            value={endereco.bairro}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="CEP"
                            placeholder="00000-000"
                            value={endereco.cep}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Cidade"
                            placeholder="Digite a cidade"
                            value={endereco.cidade}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Estado"
                            placeholder="Digite o estado"
                            value={endereco.estado}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="País"
                            placeholder="Digite o país"
                            value={endereco.pais}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Observações"
                            placeholder="Opcional"
                            value={endereco.observacoes}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleAddEndereco}
            >
              Adicionar Endereço
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ClienteInfo;
