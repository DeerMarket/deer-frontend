import Link from "next/link";
import s from "./Header.module.scss";
import Logo from "../assets/svg/logomark.svg";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import UserButton from "./UserButton";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <input
          id="navToggle"
          type="checkbox"
          readOnly
          className={s.navToggle}
        />
        <div className={s.logo}>
          <Link href="/">
            <Image
              src={Logo}
              alt="DEER Logo"
              height={20}
              quality={100}
              title="Go to home page"
            />
          </Link>
        </div>
        <label htmlFor="navToggle" className={s.mobileToggle} id="mobileToggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <label className={s.search} htmlFor="search">
          <MagnifyingGlassIcon />
          <input type="text" placeholder="Search" id="search" />
        </label>
        <div className={s.buttons}>
          <button className={s.button}>
            <ChatBubbleOvalLeftEllipsisIcon />
          </button>
          <button className={s.button}>
            <BellIcon />
          </button>
        </div>
        <nav className={s.nav}>
          <div className={s.navItem}>
            <Link href="/buyer/orders">Orders</Link>
          </div>
          <div className={s.navItem}>
            <a
              style={{
                pointerEvents: "none",
              }}
            >
              Community
              <ChevronDownIcon width={16} />
            </a>
            <div>
              <ul>
                <li>
                  <Link href="/community/dashboard">Community Dashboard</Link>
                </li>
                <li>
                  <Link href="/community/disputes">Solve Disputes</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.navItem}>
            <a
              style={{
                pointerEvents: "none",
              }}
            >
              Seller
              <ChevronDownIcon width={16} />
            </a>
            <div>
              <ul>
                <li>
                  <Link href="/seller/dashboard">Seller Dashboard</Link>
                </li>
                <li>
                  <Link href="/seller/stores">Your Stores</Link>
                </li>
                <li>
                  <Link href="/seller/orders">Manage Orders</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className={s.user}>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
