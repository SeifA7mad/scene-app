import { TbMoodEmpty } from "react-icons/tb";

interface Props {
  label?: string;
  className?: string;
}

export function SEmpty(props: Props) {
  return (
    <section
      className={`flex flex-col w-full items-center justify-center gap-y-6 text-xl text-warning-content ${
        props.className ?? ""
      }`}
    >
      <TbMoodEmpty size='3em' />
      <p>{props.label ?? "List is empty"}</p>
    </section>
  );
}
