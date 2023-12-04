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
  return (
    <div className={styles.searchHistory}>
      <div className={styles.context}>
        <div className={styles.cityAndCountry}>
          {city}, {country}
        </div>
        <div className={styles.historyDate}>
          {formatTimestampToDateString(Math.floor(timestamp / 1000))}
        </div>
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
