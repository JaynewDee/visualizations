import React from 'react';
const OneDay = ({ date, states, cases }) => {
    return (React.createElement("div", { style: { color: "white" } },
        React.createElement("p", null, date),
        React.createElement("p", null,
            states,
            " states infected"),
        React.createElement("p", null)));
};
export default OneDay;
