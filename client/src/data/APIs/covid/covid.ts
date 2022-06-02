import axios from "axios";

export const getTwenty = async (): Promise<any> => {
  return await axios
    .get("https://api.covidtracking.com/v2/us/daily.json")
    .then(({ data }) => {
      let twenty: object[] = data.data.slice(66, data.data.length + 1);
      let twenOne: object[] = data.data.slice(0, 66);

      const pair = [twenty, twenOne];

      console.log(pair);
      return pair;
    })
    .catch((err) => {
      console.error(err);
    });
};
getTwenty();
