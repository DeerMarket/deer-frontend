import Image from "next/image";
import s from "./ShopCard.module.scss";

export default function ShopCard({
  shop,
}: {
  shop: {
    name: string;
    description: string;
    logo: string;
    cover: string;
    items: number;
    volume: number;
  };
}) {
  return (
    <div className={s.parent}>
      <div className={s.cover}>
        <Image src={shop.cover} alt={shop.name} width={300} height={200} />
      </div>
      <div className={s.top}>
        <Image src={shop.logo} alt={shop.name} width={100} height={100} />
        <div>
          <h5>pirates</h5>
          <h3>{shop.name}</h3>
        </div>
      </div>
    </div>
  );
}
