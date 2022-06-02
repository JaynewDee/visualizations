import React from 'react'


interface DayCardTypes {
    date: string,
    states: number,
    cases: {},
}


const OneDay:React.FC<DayCardTypes> = ({date, states, cases}) => {
  return (
    <div style={{color: "white"}}>
        <p>{date}</p>
        <p>{states} states infected</p>
        <p></p>
    </div>
  )
}

export default OneDay;