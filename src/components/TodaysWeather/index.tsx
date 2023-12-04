// Utils
import { formatTimestampToDateString, kelvinToCelsius } from "../../utils";

// Assets
import cloud from "../../assets/cloud.png";
import sun from "../../assets/sun.png";

// Types
import type { Weather } from "../../types";

// Styles
import styles from "./index.module.scss";

function TodaysWeather({ weather }: { weather?: Weather }) {
  if (!weather) {
    return <></>;
  }

  const {
    main: { temp, temp_min, temp_max, humidity },
    name,
    sys: { country },
    dt,
    clouds: { all },
    weather: mains,
  } = weather;

  return (
    <div className={styles.todaysWeatherContainer}>
      <div className={styles.title}>
        <div className={styles.containerWeatherDetail}>
          <div className={styles.todaysWeather}>Today's Weather</div>
        </div>
        {all > 50 ? (
          <img src={cloud} alt="cloud" />
        ) : (
          <img src={sun} alt="sun" />
        )}
      </div>
      <div className={styles.context}>
        <div className={styles.leftContext}>
          <div>
            <div className={styles.degreeNumber}>{`${kelvinToCelsius(
              temp
            )}°`}</div>
            <div className={styles.tempRange}>
              {`H: ${kelvinToCelsius(temp_max)}° L: ${kelvinToCelsius(
                temp_min
              )}°`}
            </div>
          </div>
          <div className={styles.location}>{`${name}, ${country}`}</div>
        </div>
        <div className={styles.rightContext}>
          <div>{mains[0].main}</div>
          <div>{`Humidity: ${humidity}%`}</div>
          <div>{formatTimestampToDateString(dt)}</div>
        </div>
      </div>
    </div>
  );
}

export default TodaysWeather;
