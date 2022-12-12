"use client";
import Price from "./common/Price";
import s from "./UserButton.module.scss";

export default function UserButton() {
  return (
    <button className={s.user}>
      <div>
        <Price amount={360.88} />
      </div>
      <span>account.testnet</span>
    </button>
  );
}
