import React from "react";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

function ActionButtons({ onAdd, onEdit, onDelete, onSave }) {
  return (
    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
      <IconButton color="success" onClick={onAdd}><AddIcon /></IconButton>
      <IconButton sx={{ color: "orange" }} onClick={onEdit}><EditIcon /></IconButton>
      <IconButton color="error" onClick={onDelete}><DeleteIcon /></IconButton>
      <IconButton color="primary" onClick={onSave}><SaveIcon /></IconButton>
    </Box>
  );
}

export default ActionButtons;
