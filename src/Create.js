import React, { useState } from "react";
import Select from "react-select";

const Create = () => {
    const date = new Date();
    const todayDate = date.toDateString();
    const today = date.getDate();
    const todayMonth = date.getMonth();

    const monthArr = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    const [holidays, setHolidays] = useState(0);
    const [vac, setVac] = useState([]);

    const updateDays = (e) => {
        const sortedVac = e.sort((a, b) => a.value - b.value);
        console.log(sortedVac);
        setVac(sortedVac);
    };

    const options = Array.from({ length: holidays }, (_, index) => ({
        value: index + 1,
        label: `Day ${index + 1}`,
    }));

    return (
        <div>
            <span>Today's Date: {todayDate}</span>

            <br />
            <br />

            <label htmlFor="holiday">Stay Nights : </label>
            <br />
            <input
                type="number"
                name="holiday"
                id="holiday"
                min="0"
                placeholder="please enter a digit"
                value={holidays}
                onChange={(e) => setHolidays(e.target.value)}
            />

            <br />
            <br />

            <Select
                isMulti
                options={options}
                onChange={(selected) => updateDays(selected)}
            />

            {vac.map(({ value }, index) => (
                <p key={index}>
                    {today + value - 1} {monthArr[todayMonth]}
                </p>
            ))}
        </div>
    );
};

export default Create;
