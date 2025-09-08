import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ActionCard({ icon, title, description, link, color = "primary" }) {
  return (
    <Card
      component={Link}
      to={link}
      sx={{
        textDecoration: "none",
        "&:hover": { boxShadow: 6 },
        height: "100%",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        {React.cloneElement(icon, { sx: { fontSize: 40, color: `${color}.main` } })}
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ActionCard;
