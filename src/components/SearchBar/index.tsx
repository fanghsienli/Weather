// Hooks
import { useState } from "react";

// Components
import { DeleteIcon, SearchIcon } from "../../icons";

// Styles
import styles from "./index.module.scss";

type Props = {
  onSearch: ({ city, country }: { city: string; country: string }) => void;
};

function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const handleSearch = () => {
    onSearch({ city, country });
  };

  const handleClear = () => {
    setCity("");
    setCountry("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <label className={styles.title}>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className={styles.container}>
        <label className={styles.title}>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className={styles.button} onClick={handleSearch}>
        <SearchIcon className={styles.svgIcon} />
      </div>
      <div className={styles.button} onClick={handleClear}>
        <DeleteIcon className={styles.svgIcon} />
      </div>
    </>
  );
}

export default SearchBar;
