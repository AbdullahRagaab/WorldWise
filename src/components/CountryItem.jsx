import styles from "./CountryItem.module.css";
import Flag from "react-world-flags";

function emojiToCountryCode(emoji) {
  if (!emoji || emoji.length < 2) return "";
  const codePoints = [...emoji].map((char) => char.codePointAt(0));
  return String.fromCharCode(
    codePoints[0] - 127397,
    codePoints[1] - 127397
  ).toLowerCase();
}

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <Flag
        code={emojiToCountryCode(country.emoji)}
        className={styles.flag}
        style={{
          width: "40px",
          height: "30px",
          borderRadius: "2px",
          objectFit: "cover",
        }}
        fallback="/fallback-flag.png"
        alt={`${country.country} flag`}
      />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
