import { FC, useEffect, FormEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router";

import stylesLogin from "./login.module.css";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { routesUrl } from "../../utils/routesData";
import { authSel } from "../../utils/selectorData";

import { useAppSelector, useAppDispatch } from "../../../services/hooks/hooks";
import { useForm, initialFormState } from "../../../services/hooks/useForm";

import { loginAction } from "../../../services/actions/authorization";

import { TFormStateType } from "../../../services/types/data";

const theme = createTheme();

const Login: FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const { values, handleChange } = useForm<TFormStateType>(initialFormState);
  const { loginRequest, loginError, loginSuccess } = useAppSelector(authSel);

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
