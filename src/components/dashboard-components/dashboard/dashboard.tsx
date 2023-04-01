import * as React from "react";
import { FC } from "react";

import styleDashboard from "./dashboard.module.css";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { mainListItems, secondaryListItems } from "../menu/menu";
// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Orders";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const DashboardContent: FC = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Пряники
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <section className={styleDashboard.docList}>
              <div className={styleDashboard.docItem}>
                <h2 className={styleDashboard.docTitle}>Dogovor</h2>
                <div className={styleDashboard.docInfo}>
                  <p className={styleDashboard.docText}>
                    <span>Номер:</span>
                    <span>123</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Тип:</span>
                    <span>Prikaz</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Статус:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Подпись компании:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Дата подписи компании:</span>
                    <span>23.23.43</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Подпись сотрудника:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Дата подписи сотрудника:</span>
                    <span>23.23.43</span>
                  </p>
                </div>
              </div>
              <div className={styleDashboard.docItem}>
                {" "}
                <h2 className={styleDashboard.docTitle}>Dogovor</h2>
                <div className={styleDashboard.docInfo}>
                  <p className={styleDashboard.docText}>
                    <span>Номер:</span>
                    <span>123</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Тип:</span>
                    <span>Prikaz</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Статус:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Подпись компании:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Дата подписи компании:</span>
                    <span>23.23.43</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Подпись сотрудника:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Дата подписи сотрудника:</span>
                    <span>23.23.43</span>
                  </p>
                </div>
              </div>
              <div className={styleDashboard.docItem}>
                {" "}
                <h2 className={styleDashboard.docTitle}>Dogovor</h2>
                <div className={styleDashboard.docInfo}>
                  <p className={styleDashboard.docText}>
                    <span>Номер:</span>
                    <span>123</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Тип:</span>
                    <span>Prikaz</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Статус:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Подпись компании:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Дата подписи компании:</span>
                    <span>23.23.43</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Подпись сотрудника:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Дата подписи сотрудника:</span>
                    <span>23.23.43</span>
                  </p>
                </div>
              </div>
              <div className={styleDashboard.docItem}>
                {" "}
                <h2 className={styleDashboard.docTitle}>Dogovor</h2>
                <div className={styleDashboard.docInfo}>
                  <p className={styleDashboard.docText}>
                    <span>Номер:</span>
                    <span>123</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Тип:</span>
                    <span>Prikaz</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Статус:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Подпись компании:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Дата подписи компании:</span>
                    <span>23.23.43</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Подпись сотрудника:</span>
                    <span>done</span>
                  </p>
                  <p className={styleDashboard.docText}>
                    <span>Дата подписи сотрудника:</span>
                    <span>23.23.43</span>
                  </p>
                </div>
              </div>
            </section>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default function Dashboard() {
  return <DashboardContent />;
}

export { DashboardContent };
