// Types
import type { WeatherResponse } from "./types";

export function kelvinToCelsius(kelvin: number) {
  return Math.round(kelvin - 273.15);
}

export function formatTimestampToDateString(timestamp: number) {
  const dateObject = new Date(timestamp * 1000);
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");
  const year = dateObject.getFullYear();
  const hours = dateObject.getHours().toString().padStart(2, "0");
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  const ampm = dateObject.getHours() >= 12 ? "pm" : "am";

  const formattedDate = `${month}-${day}-${year} ${hours}:${minutes}${ampm}`;
  return formattedDate;
}

export async function fetchWeatherRecord({
  city,
  country,
}: {
  city: string;
  country: string;
}) {
  try {
    const response = await fetch(
      `https://openweathermap.org/data/2.5/find?q=${city},${country}&appid=439d4b804bc8187953eb36d2a8c26a02`
    );
    const data = (await response.json()) as WeatherResponse;
    if (data?.list && data?.list.length > 0) {
      const newWeatherRecord = {
        ...data.list[0],
        fetchDateTime: Date.now(),
      };
      return { data: newWeatherRecord };
    }
    return {
      errorMessage: "Not Found",
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return {
      errorMessage: error as string,
    };
  }
}
