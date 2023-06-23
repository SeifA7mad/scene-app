import { StoreFooter } from "src/components/store/StoreFooter";
import { StoreHeading } from "src/components/store/StoreHeading";

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <header className="h-[8vh]">
        <nav>
          <StoreHeading />
          {props.modal}
        </nav>
      </header>
      <main className="grid min-h-[92vh] px-4">{props.children}</main>
      <StoreFooter />
    </>
  );
}
