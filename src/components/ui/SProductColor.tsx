interface Props {
    color: string;
    className?: string;
}

export function SProductColor(props: Props) {
  return (
    <div
      className={`badge badge-sm ${props.className ?? ""}}`}
      style={{
        backgroundColor: props.color,
      }}
    ></div>
  );
}
