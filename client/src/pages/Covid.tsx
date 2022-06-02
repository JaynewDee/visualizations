import React, { useState, useEffect } from "react";
import { getTwenty } from "../data/routeIndex";
import Loading from "../components/Loading";
import OneDay from "../components/covid/OneDay";

const Covid: React.FC = () => {
  const [twoZero, setTwoZero] = useState<any>();
  const [twoOne, setTwoOne] = useState<any>();
  const [loading, setLoadState] = useState<boolean>(true);
  const [perPage, setPerPage] = useState<number>(10);
  console.log(twoZero);
  console.log(twoOne);
  
  useEffect(() => {
    const fetchData: any = async (): Promise<any> => {
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
        twoZero
          .filter((day: any, index: number) => index < perPage)
          .map((day: any, index: number) => (
            <>
            <OneDay
              key={index}
              date={`${new Date(day.date).toLocaleDateString("en-us", { weekday: "long", year:"numeric", month:"short", day:"numeric"})}`}
              states={day.states}
              cases={day.cases.total.value}
            />
            {index < perPage - 1 ? <hr /> : <></>}
            
            </>
          ))
      )}
    </>
  );
};

export default Covid;
