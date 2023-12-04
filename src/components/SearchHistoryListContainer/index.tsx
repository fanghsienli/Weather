// Components
import SearchHistoryList from "../SearchHistoryList";

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

function SearchHistoryListContainer(props: Props) {
  return (
    <div className={styles.container}>
      <SearchHistoryList {...props} />
    </div>
  );
}

export default SearchHistoryListContainer;
