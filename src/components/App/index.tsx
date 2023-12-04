// Hooks
import { useState } from "react";

// Components
import SearchHistoryListContainer from "../SearchHistoryListContainer";
import TodaysWeather from "../TodaysWeather";
import ToggleSwitch from "../ThemeToggle";
import SearchBar from "../SearchBar";
import Message from "../Message";
import { Loading } from "../../icons";

// Types
import type { Weather } from "../../types";

// Utils
import cx from "classnames";
import { fetchWeatherRecord } from "../../utils";

// Styles
import styles from "./index.module.scss";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [weather, setWeather] = useState<Weather | undefined>();
  const [searchHistories, setSearchHistories] = useState<Weather[]>([]);
  const [message, setMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const handleThemeChange = ({ checked }: { checked: boolean }) => {
    if (checked) {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme(true);
    }
  };

  const handleSearch = async ({
    city,
    country,
  }: {
    city: string;
    country: string;
  }) => {
    setMessage(undefined);
    if (!city || !country) {
      if (city) {
        setMessage("Please enter country");
      } else if (country) {
        setMessage("Please enter city");
      } else {
        setMessage("Please enter city and country");
      }
      return;
    }
    setLoading(true);

    const { data: newWeatherRecord, errorMessage } = await fetchWeatherRecord({
      city,
      country,
    });

    if (newWeatherRecord) {
      setWeather(newWeatherRecord);
      setSearchHistories([newWeatherRecord, ...searchHistories]);
    } else {
      setMessage(errorMessage);
    }

    setLoading(false);
  };

  const handleDelete = async ({
    id,
    fetchDateTime,
  }: {
    id: number;
    fetchDateTime: number;
  }) => {
    const filteredSearchHistories = searchHistories.filter(
      (x) => `${x.id}${x.fetchDateTime}` !== `${id}${fetchDateTime}`
    );
    setSearchHistories(filteredSearchHistories);
  };

  return (
    <main
      className={cx(
        styles.app,
        isDarkTheme ? styles.themeDark : styles.themeLight
      )}
    >
      <div className={styles.searchBar}>
        <SearchBar onSearch={handleSearch} />
      </div>
      {loading ? <Loading className={styles.loading} /> : null}
      {message ? (
        <div className={styles.message}>
          <Message message={message}></Message>
        </div>
      ) : null}
      <div className={styles.toggleSwitch}>
        <ToggleSwitch onChange={handleThemeChange} defaultValue={true} />
      </div>
      <div className={styles.container}>
        <TodaysWeather weather={weather} />
        {searchHistories.length > 0 || weather ? (
          <SearchHistoryListContainer
            searchHistories={searchHistories}
            searchHistory={handleSearch}
            deleteHistory={handleDelete}
          />
        ) : null}
      </div>
    </main>
  );
}

export default App;
