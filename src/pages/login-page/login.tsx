import { AppHeader } from "../../components/app-header/app-header";
import { Login } from "../../components/authorization-components/login/login";

function LoginPage(): JSX.Element {
  return (
    <>
      <AppHeader />
      <Login />
    </>
  );
}

export { LoginPage };
