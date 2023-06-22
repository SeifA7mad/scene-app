interface Props {
  price: number;
  className?: string;
}

export function SPrice(props: Props) {
  return <p className={`text-base ${props.className}`}>E£{props.price}</p>;
}
