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
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Signup = () => {
  const navigate = useNavigate();
  const { signup, isLoggedIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const userData = {
        name: formData.name,
        email: formData.email,
      };

      signup(userData);
      setSuccessMessage("Account created successfully!");

      // Redirect to dashboard after 1.5 seconds
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setErrors({ submit: "Failed to create account. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", minHeight: "100vh", alignItems: "center", py: 4 }}>
      <Card sx={{ width: "100%", boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <PersonAddIcon sx={{ mr: 2, fontSize: 32, color: "#387ed1" }} />
            <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
              Sign Up
            </Typography>
          </Box>

          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Create a new account to start trading
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
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              placeholder="John Doe"
              variant="outlined"
            />

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
              placeholder="At least 6 characters"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              placeholder="Re-enter your password"
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
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </Box>

          <Box sx={{ mt: 3, textAlign: "center", borderTop: "1px solid #e0e0e0", pt: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Already have an account?{" "}
              <Link
                href="/login"
                sx={{
                  color: "#387ed1",
                  textDecoration: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Log In
              </Link>
            </Typography>
          </Box>

          <Box sx={{ mt: 2, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}>
            <Typography variant="caption" color="textSecondary">
              <strong>Demo Note:</strong> This is a simulation application. Your credentials are stored locally in the browser.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Signup;
