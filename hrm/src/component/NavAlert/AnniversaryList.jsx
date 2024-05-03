import React, { useEffect, useState } from 'react';
import {listAnniversary} from "@/services/AnniversaryService.jsx";
import {format, parseISO} from "date-fns";

function AnniversaryList() {
    const [Anniversary, setAnniversary] = useState([]);

    useEffect(() => {
        listAnniversary()
            .then(response => {
                console.log(response.data);
                setAnniversary(response.data);
            })
            .catch(error => console.error("Fetching Anniversary failed:", error));
    }, []);

    return (
        <div className="p-4 max-w-7xl mx-10">
            <div className="flex flex-col max-w-7xl gap-3">
                {Anniversary.map((person, index) => (
                    <div key={index} className="bg-white px-10 py-3 shadow-md rounded-lg">
                        <div className="text-2xl font-semibold">
                            <span>Employee name: </span> {person.current_FIRST_NAME} {person.current_MIDDLE_NAME} {person.current_LAST_NAME}
                        </div>
                        <div className="text-xl">
                            <span>Gender: </span> {person.current_GENDER === true ? "Male" : "Female"}</div>
                        <div className="text-xl ">
                            <span>Date of starting work: </span> {format(parseISO(person.hire_DATE_FOR_WORKING), 'dd/MM/yyyy')}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnniversaryList;
