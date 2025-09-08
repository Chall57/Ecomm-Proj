import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ClienteService from "../../services/ClienteService";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";

export default function ClienteDetails() {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ClienteService.getClienteById(id).then((res) => setCliente(res.data));
  }, [id]);

  if (!cliente) {
    return (
      <Container sx={{ mt: 6, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Carregando dados do cliente...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Detalhes do Cliente
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <Typography><b>Nome:</b> {cliente.nome}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography><b>Email:</b> {cliente.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography><b>CPF:</b> {cliente.cpf}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography><b>Status:</b> {cliente.status || "Ativo"}</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/clientes/form`}
                state={{ cliente }}
              >
                Editar
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/clientes")}
              >
                Voltar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
