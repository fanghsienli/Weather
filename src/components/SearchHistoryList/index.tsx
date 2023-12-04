// Components
import SearchHistory from "./SearchHistory";

// Types
import type { Weather } from "../../types";

// Styles
import styles from "./index.module.scss";

type Props = {
  searchHistories: Weather[];
  onSearch: ({ city, country }: { city: string; country: string }) => {};
  onDelete: ({
    id,
    fetchDateTime,
  }: {
    id: number;
    fetchDateTime: number;
  }) => {};
};

function SearchHistoryList({ searchHistories, onDelete, onSearch }: Props) {
  return (
    <div className={styles.searchHistoryListContainer}>
      <div className={styles.searchHistoryTitle}>Search History</div>
      <div className={styles.searchHistoryList}>
        {searchHistories.map(
          ({ name: city, sys: { country }, fetchDateTime, id }) => (
            <SearchHistory
              key={`${id}${fetchDateTime}`}
              city={city}
              country={country}
              timestamp={fetchDateTime!}
              onSearch={() => onSearch({ city, country })}
              onDelete={() => onDelete({ id, fetchDateTime: fetchDateTime! })}
            />
          )
        )}
      </div>
    </div>
  );
}

export default SearchHistoryList;
