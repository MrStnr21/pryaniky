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
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Loader } from "../../loader/loader";

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
  const { loginRequest, loginError, loginSuccess } = useAppSelector(authSel);

  const { values, handleChange } = useForm<TFormStateType>(initialFormState);

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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Войти
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="https://pryaniky.com/%d0%b2%d0%be%d1%81%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bf%d0%b0%d1%80%d0%be%d0%bb%d1%8f/"
                    target="_blank"
                    variant="body2"
                  >
                    Забыли пароль?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://pryaniky.com/%d0%b2%d1%85%d0%be%d0%b4/"
                    target="_blank"
                    variant="body2"
                  >
                    {"Вы не зарегестрированы?"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      {loginRequest ? <Loader /> : null}
    </>
  );
};

export { Login };
