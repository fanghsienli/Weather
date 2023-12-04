// Assets
import cloud from "../../assets/cloud.png";
import sun from "../../assets/sun.png";

// Styles
import styles from "./index.module.scss";

type Props = {
  temperature: number;
  highTemperature: number;
  lowTemperature: number;
  humidity: number;
  location: string;
  isCloud: boolean;
  status: string;
  recordDateTime: string;
};

function TodaysWeather({
  temperature,
  highTemperature,
  lowTemperature,
  humidity,
  location,
  isCloud,
  status,
  recordDateTime,
}: Props) {
  return (
    <div className={styles.todaysWeatherContainer}>
      <div className={styles.title}>
        <div className={styles.containerWeatherDetail}>
          <div className={styles.todaysWeather}>Today's Weather</div>
        </div>
        {isCloud ? (
          <img src={cloud} alt="cloud" />
        ) : (
          <img src={sun} alt="sun" />
        )}
      </div>
      <div className={styles.context}>
        <div className={styles.leftContext}>
          <div>
            <div className={styles.degreeNumber}>{`${temperature}°`}</div>
            <div className={styles.tempRange}>
              {`H: ${highTemperature}° L: ${lowTemperature}°`}
            </div>
          </div>
          <div className={styles.location}>{location}</div>
        </div>
        <div className={styles.rightContext}>
          <div>{status}</div>
          <div>{`Humidity: ${humidity}%`}</div>
          <div>{recordDateTime}</div>
        </div>
      </div>
    </div>
  );
}

export default TodaysWeather;
