import classNames from 'classnames';
import { useEffect, useState } from "react";
import { listBirthDay } from "@/services/BirthdayService.js";
import moment from 'moment';

const Notification = () => {
	const [notification, setNotification] = useState([]);

	useEffect(() => {
		listBirthDay()
			.then(response => {
				// Lọc ra những sinh nhật trong tháng hiện tại
				const currentMonthBirthdays = response.data.filter(birthday =>
					moment(birthday.date).month() === moment().month()
				);
				setNotification(currentMonthBirthdays);
			})
			.catch(error => console.error("Fetching birthdays failed:", error));
	}, []);

	function getBirthdayClass(birthday) {
		const today = moment().startOf('day');
		const bday = moment(birthday);
		const nextBday = moment({ year: today.year(), month: bday.month(), day: bday.date() });
		const diffDays = nextBday.diff(today, 'days');
		if (diffDays < 3) {
			return 'text-red-500';
		} else if (diffDays < 10) {
			return 'text-orange-500';
		} else {
			return 'text-green-500';
		}
	}

	return (
		<div className="w-auto h-auto bg-white p-4 rounded border border-gray-200">
			<strong className="text-gray-700 font-medium">Notifications</strong>
			<div className="mt-4 flex flex-col gap-3">
				{notification.map((notify) => (
					<p
						key={notify.personalId}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm"></div>
						<div className="ml-4 flex-1">
							<h2 className="text-sm text-gray-800">{notify.firstName} {notify.lastName}</h2>
							<span
								className={classNames(
									getBirthdayClass(notify.birthday),
									'text-xs font-medium'
								)}
							>
                                {moment(notify.birthday).format('DD-MM-yyyy')}
                            </span>
						</div>
					</p>
				))}
			</div>
		</div>
	);
};

export default Notification;
