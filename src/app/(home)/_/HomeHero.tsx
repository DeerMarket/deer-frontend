import s from "./HomeHero.module.scss";

export default function HomeHero() {
  return (
    <div className={s.parent}>
      <div className={s.container}>
        <h1>
          Your decentralized marketplace on Near
        </h1>
        <p>
          Buy and sell anything with no middleman, no fees, and no hassle. Grow
          your business with our easy to use Web3 platform.
        </p>
        {/* <p>
          We&apos;re changing the way people buy and sell items by creating a
          trustless, transparent marketplace with no need for third party
          interference. Join us on this journey!
        </p> */}
        <nav>
          <a className={s.mainBtn}>Browse shops</a>
          <a>Create a shop</a>
        </nav>
      </div>
    </div>
  );
}
