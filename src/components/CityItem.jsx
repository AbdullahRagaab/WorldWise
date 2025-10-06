import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import Flag from "react-world-flags";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function emojiToCountryCode(emoji) {
  if (!emoji || emoji.length < 2) return "";
  const codePoints = [...emoji].map((char) => char.codePointAt(0));
  return String.fromCharCode(
    codePoints[0] - 127397,
    codePoints[1] - 127397
  ).toLowerCase();
}

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <Flag
          code={emojiToCountryCode(emoji)}
          className={styles.flag}
          style={{
            width: "20px",
            height: "15px",
            borderRadius: "2px",
            objectFit: "cover",
          }}
          fallback="/fallback-flag.png"
          alt={`${cityName} flag`}
        />

        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
