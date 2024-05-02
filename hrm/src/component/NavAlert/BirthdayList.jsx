import React, { useState, useEffect } from 'react';
import {listBirthDay} from "@/services/BirthdayService.js";
import {format, parseISO} from "date-fns";

function BirthdayList () {
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
        <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg p-4 shadow-lg w-4/5 text-xl">
                <h2 className="w-auto h-auto font-semibold text-3xl text-center">Birthday lists in month: </h2>
                {birthdays.map((person, index) => (
                    <div key={index} className="">
                        <div className="bg-white px-4 py-3 border-b">
                            <h3 className="font-semibold">Employee name: {person.firstName} {person.lastName}</h3>
                            <p>Birthday: {format(parseISO(person.birthday), 'dd/MM/yyyy')}</p>
                            <p>Phone number: {person.phoneNumber}</p>
                            <p>Email: {person.email}</p>
                        </div>
                    </div>
                    /*<div key={index} className="">
                        <div className="text-2xl font-bold">
                            <span>Employee name: </span> {person.firstName} {person.lastName}</div>
                        <div className="text-2xl font-medium">
                            <span>Birthday: </span> {format(parseISO(person.birthday), 'dd/MM/yyyy')}</div>
                        <div>
                            <span>Phone number: </span> {person.phoneNumber}</div>
                        <div>
                            <span>Email: </span> {person.email}</div>
                    </div>*/
                ))}
            </div>
        </div>
    );
}

export default BirthdayList;