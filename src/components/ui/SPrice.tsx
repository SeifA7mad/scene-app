import { Product } from "src/lib/types";

interface Props {
  price: number;
  offer?: Product["offer"];
  className?: string;
}

export function SPrice(props: Props) {
  const isOfferValid =
    props.offer && props.offer.expiryDate > new Date().toISOString();

  if (!isOfferValid)
    return <p className={`text-base ${props.className}`}>E£{props.price}</p>;
  
  const discountedPrice = props.price - (props.price * props.offer!.percentage) / 100;

  return (
    <div className={`text-base whitespace-nowrap ${props.className}`}>
      <p>E£{discountedPrice}</p>
      <p className="text-error">{props.offer?.percentage}% OFF</p>
    </div>
  );
}
