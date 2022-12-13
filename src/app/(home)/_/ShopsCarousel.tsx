import ShopCard from "./ShopCard";
import s from "./ShopsCarousel.module.scss";

export default function ShopsCarousel({
  shops,
  title,
  subtitle,
}: {
  shops?: any;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div>
      <div className={s.head}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className={s.flex}>
        {shops?.map((shop: any, i: any) => (
          <ShopCard shop={shop} key={i} />
        ))}
      </div>
    </div>
  );
}
