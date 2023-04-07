import { AppHeader } from "../../components/app-header/app-header";
import { NotFound } from "../../components/not-found/not-found";

function NotFoundPage(): JSX.Element {
  return (
    <>
      <AppHeader />
      <NotFound />
    </>
  );
}

export { NotFoundPage };
