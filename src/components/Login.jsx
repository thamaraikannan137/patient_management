import React, { useState } from "react";
import loginImage from "../assets/images/login_image.png";
import Logo from "../assets/images/rotary.png";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
      <div className="hidden md:block col-span-2">
        <img
          src={loginImage}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center 2xl:gap-24 p-8 gap-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8">
          <img src={Logo} alt="Rotary Club Logo" className="w-40 h-auto" />
          <Typography variant="h4" fontWeight="bold">
            Rotary Club
          </Typography>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-1 text-left">
            <Typography variant="h5" fontWeight={500}>
              Welcome to Rotary Club
            </Typography>
            <Typography variant="body1" color="textSecondary" className="font-sans">
              Please sign in to your account to begin
            </Typography>
          </div>

          <TextField label="Email or Username" variant="outlined" fullWidth />

          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className="flex items-center justify-between text-sm">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Remember me"
            />
            <Typography
              variant="body2"
              sx={{ color: "#282C87", cursor: "pointer" }}
            >
              Forgot Password?
            </Typography>
          </div>

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#282C87",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1f256f",
              },
            }}
          >
            Login
          </Button>

          <div className="text-center text-sm font-sans">
            <span>Not registered? </span>
            <span style={{ color: "#282C87", cursor: "pointer" }}>
              Contact an administrator
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
