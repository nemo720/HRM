import React, { useEffect, useState } from 'react';
import {listBirthDay} from "@/services/BirthdayService.js";
import { format, parseISO } from 'date-fns';

function BirthdayList() {
    const [birthdays, setBirthdays] = useState([]);

    useEffect(() => {
        listBirthDay()
            .then(response => {
                console.log(response.data);
                setBirthdays(response.data);
            })
            .catch(error => console.error("Fetching birthdays failed:", error));
    }, []);

    return (
        <div className="p-4 min-h-screen">
            {birthdays.map((person, index) => (
                <div key={index} className="bg-white px-10 py-3 shadow-md rounded-lg mx-10 my-auto">
                    <div className="text-2xl font-semibold">
                        <span>Employee name: </span> {person.firstName} {person.lastName}</div>
                    <div className="font-normal">
                        <span>Birthday: </span> {format(parseISO(person.birthday), 'dd/MM/yyyy')}</div>
                    <div>
                        <span>Phone number: </span> {person.phoneNumber}</div>
                    <div>
                        <span>Email: </span> {person.email}</div>
                </div>
            ))}
        </div>
    );
}

export default BirthdayList;
