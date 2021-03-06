import axios from "axios";

export const getTwenty = async (): Promise<any> => {
  return await axios
    .get("https://api.covidtracking.com/v2/us/daily.json")
    .then(({ data }) => {
      let twenty: object[] = data.data.slice(66, data.data.length + 1);
      let twentyOne: object[] = data.data.slice(0, 66);

      const pair = [twenty, twentyOne];

      return pair;
    })
    .catch((err) => {
      console.error(err);
    });
};
getTwenty();
