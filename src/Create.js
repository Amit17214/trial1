import React, { useState } from "react";
import Select from "react-select";
 
const Create = () => {
    let date = new Date();
    let todayDate = date.toDateString();
    let today = date.getDate();
    let todayMonth = date.getMonth();
 
    const monthArr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
 
    const [holidays, setHolidays] = useState(0);
 
    const options = Array.from({ length: holidays }, (_, index) => ({
        value: index + 1,
        label: `Day ${index + 1}`,
    }));
 
    const [vac, setVac] = useState([]);
 
    function updateDays(e) {
        // Sort the selected days based on the 'value' property
        const sortedVac = e.sort((a, b) => a.value - b.value);
        setVac(sortedVac);
    }
 
    return (
        <div>
            <span>Today's Date: {todayDate}</span>
 
            <br />
            <br />
 
            <label htmlFor="holiday">Total Holiday Days: </label>
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
 
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Select
                    isMulti
                    options={options}
                    onChange={(selected) => updateDays(selected)}
                />
            </div>
            <div>
                {/* Map over the sorted 'vac' array */}
                <div
                    style={{
                        border: "2px solid black",
                        backgroundColor:"alice-blue",
                        width: "300px",
                        marginLeft: "20%",
                        marginTop: "50px",
                        padding: "10px",
                    }}>
                    {vac.map((val, index) => {
                        return (
                            <p key={index}>
                                {today + val.value - 1} {monthArr[todayMonth]}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
 
export default Create;