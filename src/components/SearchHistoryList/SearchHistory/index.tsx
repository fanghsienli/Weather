// Components
import { DeleteIcon, SearchIcon } from "../../../icons";

// Utils
import { formatTimestampToDateString } from "../../../utils";

// Styles
import styles from "./index.module.scss";

type Props = {
  city: string;
  country: string;
  timestamp: number;
  onSearch: () => void;
  onDelete: () => void;
};

function SearchHistory({
  city,
  country,
  timestamp,
  onSearch,
  onDelete,
}: Props) {
  const loaction = `${city}, ${country}`;
  const searchDateTime = formatTimestampToDateString(
    Math.floor(timestamp / 1000)
  );

  return (
    <div className={styles.searchHistoryContainer}>
      <div className={styles.context}>
        <div className={styles.cityAndCountry}>{loaction}</div>
        <div className={styles.searchDateTime}>{searchDateTime}</div>
      </div>
      <div className={styles.buttons}>
        <div onClick={onSearch}>
          <SearchIcon className={styles.svgIcon} />
        </div>
        <div onClick={onDelete}>
          <DeleteIcon className={styles.svgIcon} />
        </div>
      </div>
    </div>
  );
}

export default SearchHistory;
