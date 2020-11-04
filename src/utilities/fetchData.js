import axios from "axios";

const fetchData = async (url) => {
  let result = [];
  await axios.get(url).then((res) => {
    if (res.status === 200) {
      result = res.data;
    }
  });
  return result;
};

export default fetchData;
