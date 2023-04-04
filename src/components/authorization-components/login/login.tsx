import { FC, useEffect } from "react";

import stylesLogin from "./login.module.css";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useAppSelector, useAppDispatch } from "../../../services/hooks/hooks";
import { FormEvent } from "react";
import { loginAction } from "../../../services/actions/authorization";
import { useForm, initialFormState } from "../../../services/hooks/useForm";
import { TFormStateType } from "../../../services/types/data";
import { useNavigate } from "react-router";
import { routesUrl } from "../../utils/routesData";

const theme = createTheme();

const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { values, handleChange } = useForm<TFormStateType>(initialFormState);
  const { loginRequest, loginError, loginSuccess } = useAppSelector(
    (store) => store.auth
  );

  const handleSubmitLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(loginAction(values));
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate(routesUrl.mainPage);
    }
  }, [loginSuccess, navigate]);

  return (
    <>
      {!loginRequest ? (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              {loginError && (
                <h1
                  className={`${stylesLogin.errorTitle} text text_type_main-medium`}
                >
                  Неверный логин или пароль, попробуйте еще раз
                </h1>
              )}
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                onSubmit={handleSubmitLogin}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoFocus
                  onChange={handleChange}
                  value={values.name || ""}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={values.password || ""}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      ) : null}
    </>
  );
};

export { Login };
