import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import {
  Container,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Alert,
  Link,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already logged in
  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const user = login(formData.email, formData.password);

      if (user) {
        setSuccessMessage("Logged in successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setErrors({ submit: "Invalid email or password" });
      }
    } catch (error) {
      setErrors({ submit: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", minHeight: "100vh", alignItems: "center", py: 4 }}>
      <Card sx={{ width: "100%", boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <LoginIcon sx={{ mr: 2, fontSize: 32, color: "#387ed1" }} />
            <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
              Log In
            </Typography>
          </Box>

          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Access your trading dashboard
          </Typography>

          {successMessage && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {successMessage}
            </Alert>
          )}

          {errors.submit && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors.submit}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              placeholder="you@example.com"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              placeholder="Enter your password"
              variant="outlined"
            />

            <Button
              fullWidth
              variant="contained"
              size="large"
              type="submit"
              disabled={isLoading}
              sx={{
                mt: 2,
                backgroundColor: "#387ed1",
                "&:hover": { backgroundColor: "#2d5fa3" },
              }}
            >
              {isLoading ? "Logging In..." : "Log In"}
            </Button>
          </Box>

          <Box sx={{ mt: 3, textAlign: "center", borderTop: "1px solid #e0e0e0", pt: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Don't have an account?{" "}
              <Link
                href="/signup"
                sx={{
                  color: "#387ed1",
                  textDecoration: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>

          <Box sx={{ mt: 2, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}>
            <Typography variant="caption" color="textSecondary">
              <strong>Demo Note:</strong> Use any email and password to log in.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
