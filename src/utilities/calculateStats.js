const calculateStatistics = (data) => {
  let temperatureSum = 0;
  let highestTemp = data.list[0];
  let lowestTemp = data.list[0];
  let humiditySum = 0;
  let highestHumidity = data.list[0];
  let lowestHumidity = data.list[0];
  for (const item of data.list) {
    temperatureSum += item.main.temp;
    humiditySum += item.main.humidity;
    if (highestTemp.main.temp < item.main.temp) {
      highestTemp = item;
    }
    if (lowestTemp.main.temp > item.main.temp) {
      lowestTemp = item;
    }
    if (highestHumidity.main.temp < item.main.humidity) {
      highestHumidity = item;
    }
    if (lowestHumidity.main.temp > item.main.humidity) {
      lowestHumidity = item;
    }
  }
  return {
    temperature: {
      max: highestTemp.main.temp,
      avg: temperatureSum / data.list.length,
      min: lowestTemp.main.temp,
    },
    humidity: {
      max: highestHumidity.main.humidity,
      avg: humiditySum / data.list.length,
      min: lowestHumidity.main.humidity,
    },
    warmestTime: `${highestTemp.dt_txt.split(" ")[1]}h, ${
      highestTemp.dt_txt.split(" ")[0]
    }`,
    coldestTime: `${lowestTemp.dt_txt.split(" ")[1]}h, ${
      lowestTemp.dt_txt.split(" ")[0]
    }`,
    // warmestTime: new Date(highestTemp.dt * 1000).toUTCString(),
    // coldestTime: new Date(lowestTemp.dt * 1000).toUTCString(),
  };
};

export default calculateStatistics;
