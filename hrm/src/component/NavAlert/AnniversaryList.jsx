import React, { useEffect, useState } from 'react';
import {listAnniversary} from "@/services/AnniversaryService.jsx";

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
                            <span>Employee name: </span> {person.firstName} {person.lastName}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnniversaryList;
