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
