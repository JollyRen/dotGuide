import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // Loading screen?
      return;
    }

    if (user) navigate("/profile");
  }, [user, loading]);

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: "50%",
        ml: "auto",
        mr: "auto",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#2f2f2f",
          p: 1,
          pl: 2,
          pr: 2,
          // mr: 1,
          width: "25%",
          minHeight: "10vh",
          textOverflow: "ellipsis",
          border: 1.25,
          borderColor: "#353540",
          flexGrow: 1,
        }}
      >
        <Typography variant="h3" sx={{ pt: 3, pb: 5, color: "white", textAlign: "center" }}>
          Login
        </Typography>
        <TextField
          sx={{
            pb: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
                borderRadius: 3,
                mt: 0.5,
                mb: 0.5,
              },
              "& adornedEnd": {
                pr: 0,
              },
            },
          }}
          size="small"
          variant="outlined"
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <TextField
          sx={{
            pb: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
                borderRadius: 3,
                mt: 0.5,
                mb: 0.5,
              },
              "& adornedEnd": {
                pr: 0,
              },
            },
          }}
          size="small"
          variant="outlined"
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button>
            <ArrowBackIcon
              sx={{ color: "gray" }}
              onClick={() => navigate("/")}
            />
          </Button>
          <Button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            <CheckCircleOutlineIcon />
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
