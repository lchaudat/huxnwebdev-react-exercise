interface Weather {
  temperature: number;
}

const getTemperature = (temp: number) => {
  if (temp < 15) return <div>it's cold outside</div>;
  else if (temp > 15 && temp < 25) return <div>it's nice outside</div>;
  else return <div>it's horrible</div>;
};

const Weather = function ({ temperature }: Weather) {
  return <> {getTemperature(temperature)}</>;
};

export default Weather;
