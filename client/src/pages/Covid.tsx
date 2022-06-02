import React, { useState, useEffect } from "react";
import { getTwenty } from "../data/routeIndex";
import Loading from "../components/Loading";
import OneDay from "../components/covid/OneDay";

const Covid: React.FC = () => {
  const [twoZero, setTwoZero] = useState(undefined);
  const [twoOne, setTwoOne] = useState(undefined);
  const [loading, setLoadState] = useState(true);
  console.log(twoZero);

  useEffect(() => {
    const fetchData: any = async ():Promise<any> => {
      const response = await getTwenty()
        .then((data) => data)
        .catch((err) => console.error(err));
      setTwoZero(response[0]);
      setTwoOne(response[1]);
      setLoadState(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        twoZero.filter((day, index) => index < 5).map((day) => 
          <OneDay date={`${new Date(day.date)}`} states={day.states} cases={day.cases}/>
        )
      )}
    </>
  );
};

export default Covid;
