export interface WeatherData {
  name: string;
  main: Main;
  clouds: Clouds;
  weather: Weather[];
  visibility: number;
}

interface Main {
  temp: number;
  humidity: number;
  pressure: number;
}

interface Clouds {
  all: number;
}

interface Weather {
  description: string;
  icon: string;
}
