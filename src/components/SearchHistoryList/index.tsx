// Components
import SearchHistory from "./SearchHistory";

// Types
import type { Weather } from "../../types";

// Styles
import styles from "./index.module.scss";

type Props = {
  searchHistories: Weather[];
  searchHistory: ({ city, country }: { city: string; country: string }) => {};
  deleteHistory: ({
    id,
    fetchDateTime,
  }: {
    id: number;
    fetchDateTime: number;
  }) => {};
};

function SearchHistoryList({
  searchHistories,
  deleteHistory,
  searchHistory,
}: Props) {
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
              onSearch={() => searchHistory({ city, country })}
              onDelete={() =>
                deleteHistory({ id, fetchDateTime: fetchDateTime! })
              }
            />
          )
        )}
      </div>
    </div>
  );
}

export default SearchHistoryList;
