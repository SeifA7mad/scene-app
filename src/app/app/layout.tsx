import { AppHeading } from "src/components/app/AppHeading";

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <header>
        <nav>
          <AppHeading />
          {props.modal}
        </nav>
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
