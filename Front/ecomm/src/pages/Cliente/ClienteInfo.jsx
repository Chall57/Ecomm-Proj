import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

function ClienteInfo() {
  // Mock de informações do cliente (futuramente pode vir da API)
  const cliente = {
    nome: "Nome do Cliente",
    email: "email@exemplo.com",
    cpf: "000.000.000-00",
    telefone: "(00) 00000-0000",
  };

  const [cartoes, setCartoes] = useState([
    { id: 1, numero: "**** **** **** 1234", validade: "12/28", bandeira: "Visa", padrao: true },
    { id: 2, numero: "**** **** **** 5678", validade: "11/27", bandeira: "Mastercard", padrao: false },
  ]);
  const [cartaoSelecionado, setCartaoSelecionado] = useState(null);

  const [enderecos, setEnderecos] = useState([
    {
      id: 1,
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
  const [enderecoSelecionado, setEnderecoSelecionado] = useState(null);

  // ====== Funções Cartão ======
  const handleAddCartao = () => alert("Adicionar novo cartão (futuro modal/form)");
  const handleEditCartao = () =>
    cartaoSelecionado ? alert(`Editar cartão ${cartaoSelecionado}`) : alert("Selecione um cartão");
  const handleDeleteCartao = () => {
    if (!cartaoSelecionado) return alert("Selecione um cartão");
    setCartoes(cartoes.filter((c) => c.id !== cartaoSelecionado));
    setCartaoSelecionado(null);
  };
  const handleSalvarPadraoCartao = () => {
    if (!cartaoSelecionado) return alert("Selecione um cartão");
    setCartoes(cartoes.map((c) => ({ ...c, padrao: c.id === cartaoSelecionado })));
  };

  // ====== Funções Endereço ======
  const handleAddEndereco = () => alert("Adicionar novo endereço (futuro modal/form)");
  const handleEditEndereco = () =>
    enderecoSelecionado ? alert(`Editar endereço ${enderecoSelecionado}`) : alert("Selecione um endereço");
  const handleDeleteEndereco = () => {
    if (!enderecoSelecionado) return alert("Selecione um endereço");
    setEnderecos(enderecos.filter((e) => e.id !== enderecoSelecionado));
    setEnderecoSelecionado(null);
  };
  const handleSalvarPadraoEndereco = () => {
    if (!enderecoSelecionado) return alert("Selecione um endereço");
    alert(`Salvar endereço ${enderecoSelecionado} como padrão (futuro campo 'padrao')`);
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

          {/* Botões de ação */}
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <IconButton color="success" onClick={handleAddCartao}><AddIcon /></IconButton>
            <IconButton sx={{ color: "orange" }} onClick={handleEditCartao}><EditIcon /></IconButton>
            <IconButton color="error" onClick={handleDeleteCartao}><DeleteIcon /></IconButton>
            <IconButton color="primary" onClick={handleSalvarPadraoCartao}><SaveIcon /></IconButton>
          </Box>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            {cartoes.map((cartao) => (
              <Grid item xs={12} sm={6} key={cartao.id}>
                <Card
                  onClick={() => setCartaoSelecionado(cartao.id)}
                  sx={{
                    cursor: "pointer",
                    border: cartaoSelecionado === cartao.id ? "2px solid #1976d2" : "1px solid #ccc",
                    boxShadow: cartaoSelecionado === cartao.id ? 4 : 1,
                  }}
                >
                  <CardContent>
                    <Typography><b>Número:</b> {cartao.numero}</Typography>
                    <Typography><b>Validade:</b> {cartao.validade}</Typography>
                    <Typography><b>Bandeira:</b> {cartao.bandeira}</Typography>
                    {cartao.padrao && (
                      <Typography variant="caption" color="primary">Cartão padrão</Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Endereços */}
          <Typography variant="h6" gutterBottom>
            Endereços
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {/* Botões de ação */}
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <IconButton color="success" onClick={handleAddEndereco}><AddIcon /></IconButton>
            <IconButton sx={{ color: "orange" }} onClick={handleEditEndereco}><EditIcon /></IconButton>
            <IconButton color="error" onClick={handleDeleteEndereco}><DeleteIcon /></IconButton>
            <IconButton color="primary" onClick={handleSalvarPadraoEndereco}><SaveIcon /></IconButton>
          </Box>

          <Grid container spacing={2}>
            {enderecos.map((endereco) => (
              <Grid item xs={12} key={endereco.id}>
                <Card
                  onClick={() => setEnderecoSelecionado(endereco.id)}
                  sx={{
                    cursor: "pointer",
                    border: enderecoSelecionado === endereco.id ? "2px solid #1976d2" : "1px solid #ccc",
                    boxShadow: enderecoSelecionado === endereco.id ? 4 : 1,
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="Tipo de residência" value={endereco.tipoResidencia} /></Grid>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="Tipo Logradouro" value={endereco.tipoLogradouro} /></Grid>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="Logradouro" value={endereco.logradouro} /></Grid>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="Número" value={endereco.numero} /></Grid>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="Bairro" value={endereco.bairro} /></Grid>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="CEP" value={endereco.cep} /></Grid>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="Cidade" value={endereco.cidade} /></Grid>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="Estado" value={endereco.estado} /></Grid>
                      <Grid item xs={12} sm={6}><TextField fullWidth label="País" value={endereco.pais} /></Grid>
                      <Grid item xs={12}><TextField fullWidth label="Observações" value={endereco.observacoes} /></Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ClienteInfo;
