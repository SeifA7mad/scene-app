import { StoreFooter } from "src/components/store/StoreFooter";
import { StoreHeading } from "src/components/store/StoreHeading";

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <header>
        <nav>
          <StoreHeading />
          {props.modal}
        </nav>
      </header>
      <main className="grid min-h-full px-4">{props.children}</main>
      <StoreFooter />
    </>
  );
}
