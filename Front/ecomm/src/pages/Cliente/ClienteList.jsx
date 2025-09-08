import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
  Box,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BlockIcon from "@mui/icons-material/Block";

function ClienteList() {
  // Mock de clientes
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nome: "Lucas Silva",
      email: "lucas.silva@email.com",
      cpf: "123.456.789-00",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Maria Souza",
      email: "maria.souza@email.com",
      cpf: "987.654.321-00",
      status: "Ativo",
    },
    {
      id: 3,
      nome: "João Oliveira",
      email: "joao.oliveira@email.com",
      cpf: "111.222.333-44",
      status: "Inativo",
    },
  ]);

  const [filtros, setFiltros] = useState({
    nome: "",
    email: "",
    cpf: "",
    status: "",
  });

  const [openInativar, setOpenInativar] = useState(false);
  const [motivo, setMotivo] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  // Função de filtro
  const clientesFiltrados = clientes.filter((c) => {
    return (
      (filtros.nome === "" || c.nome.toLowerCase().includes(filtros.nome.toLowerCase())) &&
      (filtros.email === "" || c.email.toLowerCase().includes(filtros.email.toLowerCase())) &&
      (filtros.cpf === "" || c.cpf.includes(filtros.cpf)) &&
      (filtros.status === "" || c.status === filtros.status)
    );
  });

  const handleAbrirInativar = (cliente) => {
    setClienteSelecionado(cliente);
    setOpenInativar(true);
  };

  const handleConfirmarInativar = () => {
    if (clienteSelecionado) {
      setClientes(
        clientes.map((c) =>
          c.id === clienteSelecionado.id ? { ...c, status: "Inativo" } : c
        )
      );
    }
    setMotivo("");
    setOpenInativar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Gerenciamento de Clientes
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {/* Barra de ações */}
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/clientes/form"
            >
              + Novo Cliente
            </Button>
            <TextField
              label="Nome"
              size="small"
              value={filtros.nome}
              onChange={(e) => setFiltros({ ...filtros, nome: e.target.value })}
            />
            <TextField
              label="Email"
              size="small"
              value={filtros.email}
              onChange={(e) => setFiltros({ ...filtros, email: e.target.value })}
            />
            <TextField
              label="CPF"
              size="small"
              value={filtros.cpf}
              onChange={(e) => setFiltros({ ...filtros, cpf: e.target.value })}
            />
            <TextField
              select
              label="Status"
              size="small"
              value={filtros.status}
              onChange={(e) => setFiltros({ ...filtros, status: e.target.value })}
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="Ativo">Ativo</MenuItem>
              <MenuItem value="Inativo">Inativo</MenuItem>
            </TextField>
          </Box>

          {/* Tabela de clientes */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Nome</b></TableCell>
                  <TableCell><b>Email</b></TableCell>
                  <TableCell><b>CPF</b></TableCell>
                  <TableCell><b>Status</b></TableCell>
                  <TableCell><b>Ações</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clientesFiltrados.map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell>{cliente.nome}</TableCell>
                    <TableCell>{cliente.email}</TableCell>
                    <TableCell>{cliente.cpf}</TableCell>
                    <TableCell
                      sx={{
                        color: cliente.status === "Ativo" ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {cliente.status}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        component={Link}
                        to={`/clientes/${cliente.id}`}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        sx={{ color: "orange" }}
                        component={Link}
                        to="/clientes/form"
                        state={{ cliente }} // futuro: passar dados para edição
                      >
                        <EditIcon />
                      </IconButton>
                      {cliente.status === "Ativo" && (
                        <IconButton
                          color="error"
                          onClick={() => handleAbrirInativar(cliente)}
                        >
                          <BlockIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Modal de inativação */}
          <Dialog open={openInativar} onClose={() => setOpenInativar(false)}>
            <DialogTitle>Inativar Cliente</DialogTitle>
            <DialogContent>
              <Typography gutterBottom>
                Informe o motivo da inativação do cliente{" "}
                <b>{clienteSelecionado?.nome}</b>:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                placeholder="Digite o motivo..."
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenInativar(false)}>Cancelar</Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleConfirmarInativar}
                disabled={!motivo}
              >
                Confirmar
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ClienteList;
