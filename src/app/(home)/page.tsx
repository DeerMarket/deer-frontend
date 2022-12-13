import ShopsCarousel from "./_/ShopsCarousel";
import s from "./page.module.scss";

const shopData = {
  name: "Shop Name",
  description: "Shop Description goes here",
  logo: "https://i.pinimg.com/236x/fd/b3/5c/fdb35c80a19b090c583caf59f461edcc.jpg",
  cover: "https://i.pinimg.com/736x/58/92/10/589210afedbc5e0c9ec5736387346572.jpg",
  items: 0,
  volume: 0,
  
};

export default function Homepage() {
  return (
    <div>
      <div className={s.container}>
        <ShopsCarousel
          title="Featured Shops"
          subtitle="These shops are featured by our team"
          shops={[shopData, shopData, shopData, shopData, shopData, shopData]}
        />
        <ShopsCarousel
          title="Popular Shops"
          subtitle="These shops are popular on the platform"
          shops={[shopData, shopData, shopData, shopData, shopData, shopData]}
        />
        <ShopsCarousel
          title="New Shops"
          subtitle="These shops are new to the platform"
          shops={[shopData, shopData, shopData, shopData, shopData, shopData]}
        />
      </div>
    </div>
  );
}
