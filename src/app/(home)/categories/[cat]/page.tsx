import ShopsCarousel from "../../_/ShopsCarousel";
import s from "./page.module.scss";

const shopData = {
  name: "Shop Name",
  description: "Shop Description goes here",
  logo: "https://i.pinimg.com/236x/fd/b3/5c/fdb35c80a19b090c583caf59f461edcc.jpg",
  cover:
    "https://i.pinimg.com/736x/58/92/10/589210afedbc5e0c9ec5736387346572.jpg",
  items: 0,
  volume: 0,
};

export default function page({
  params: { cat },
}: {
  params: {
    cat: string;
  };
}) {
  return (
    <div>
      <div className={s.head}>
        <div className={s.container}>
          <h1
            style={{
              textTransform: "capitalize",
            }}
          >
            {cat.replaceAll("-", " ")}
          </h1>
          <p></p>
        </div>
      </div>
      <div className={s.container}>
        <ShopsCarousel
          title=""
          subtitle=""
          shops={[
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
            shopData,
          ]}
        />
      </div>
    </div>
  );
}
