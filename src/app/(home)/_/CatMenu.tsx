import Link from "next/link";
import s from "./CatMenu.module.scss";

const menu: { [key: string]: string[] | boolean } = {
  "Physical Products": ["Books", "Clothing"],
  "Digital Products": ["Software", "eBooks"],
  Services: ["Web Design", "Photography"],
  NFTs: ["Art", "Collectibles"],
  Cryptocurrency: ["Bitcoin", "Ethereum"],
  Other: true,
};
export default function CatMenu() {
  return (
    <div className={s.cat}>
      <ul>
        {Object.keys(menu).map((key: string, i: number) => {
          return (
            <li key={i} className={s.topList}>
              <Link
                href={"categories/" + key.replaceAll(" ", "-").toLowerCase()}
              >
                {key}
              </Link>
              {typeof menu[key] === "object" && (
                <nav>
                  <ul>
                    {(menu[key] as string[]).map((item: string, i: number) => {
                      return (
                        <li key={i} className={s.childList}>
                          <Link
                            href={
                              "categories/" +
                              item.replaceAll(" ", "-").toLowerCase()
                            }
                          >
                            {item}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
