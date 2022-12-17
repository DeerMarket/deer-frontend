import ShopsCarousel from "./_/ShopsCarousel";
import s from "./page.module.scss";
import HomeHero from "./_/HomeHero";

const shops = [
  {
    name: "Cars & Bikes",
    description: "Cars & Bikes shop that sells cars and bikes",
    logo: "https://i.pinimg.com/236x/fd/b3/5c/fdb35c80a19b090c583caf59f461edcc.jpg",
    cover:
      "https://i.pinimg.com/736x/58/92/10/589210afedbc5e0c9ec5736387346572.jpg",
    items: 0,
    volume: 0,
  },
  {
    name: "Logo design solutions",
    description: "We design logos for your business",
    logo: "https://i.pinimg.com/564x/1c/2a/fd/1c2afd5df5bc136bfbae9ce51386cd5f.jpg",
    cover:
      "https://i.pinimg.com/564x/af/a6/bf/afa6bfda4910ccb10e2482c92a52a7c7.jpg",
    items: 0,
    volume: 0,
  },
  {
    name: "Pirates merchandise",
    description: "Shop Description goes here",
    logo: "https://i.pinimg.com/564x/e1/92/62/e19262f47fa1bdbe4b243a320f1216e9.jpg",
    cover:
      "https://i.pinimg.com/564x/e1/92/62/e19262f47fa1bdbe4b243a320f1216e9.jpg",
    items: 0,
    volume: 0,
  },
  {
    name: "The best shop in the world by minions",
    description: "Shop Description goes here",
    logo: "https://i.pinimg.com/564x/00/9a/b4/009ab476e7052fb16debc1418a28116e.jpg",
    cover:
      "https://i.pinimg.com/564x/00/9a/b4/009ab476e7052fb16debc1418a28116e.jpg",
    items: 0,
    volume: 0,
  },
  {
    name: "Dino Food",
    description: "Shop Description goes here",
    logo: "https://i.pinimg.com/564x/dc/7c/e5/dc7ce59ac6cbd230584f7902ef61fd2c.jpg",
    cover:
      "https://i.pinimg.com/564x/bb/3f/a3/bb3fa3effb4c895d8a3528ef4716d6b4.jpg",
    items: 0,
    volume: 0,
  },
  {
    name: "A shop",
    description: "Shop Description goes here",
    logo: "https://i.pinimg.com/564x/02/e6/62/02e662a386b396efe809a4bdcd2446cb.jpg",
    cover:
      "https://i.pinimg.com/564x/9d/cc/da/9dccdaa36e0cac9b5d45593249618487.jpg",
    items: 0,
    volume: 0,
  },
  {
    name: "A shop",
    description: "Shop Description goes here",
    logo: "https://i.pinimg.com/564x/02/e6/62/02e662a386b396efe809a4bdcd2446cb.jpg",
    cover:
      "https://i.pinimg.com/564x/9d/cc/da/9dccdaa36e0cac9b5d45593249618487.jpg",
    items: 0,
    volume: 0,
  },
  {
    name: "A shop",
    description: "Shop Description goes here",
    logo: "https://i.pinimg.com/564x/02/e6/62/02e662a386b396efe809a4bdcd2446cb.jpg",
    cover:
      "https://i.pinimg.com/564x/9d/cc/da/9dccdaa36e0cac9b5d45593249618487.jpg",
    items: 0,
    volume: 0,
  },
];

export default function Homepage() {
  return (
    <div>
      <HomeHero />
      <div className={s.container}>
        <ShopsCarousel
          title="Featured Shops"
          subtitle="These shops are featured by our team"
          shops={[...shops]}
        />
        <ShopsCarousel
          title="Popular Shops"
          subtitle="These shops are popular on the platform"
          shops={[...shops]}
        />
        <ShopsCarousel
          title="New Shops"
          subtitle="These shops are new to the platform"
          shops={[...shops]}
        />
      </div>
    </div>
  );
}
