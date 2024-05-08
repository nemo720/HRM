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

	const getBirthdayClass = (birthday) => {
		const today = moment();
		const bday = moment(birthday);
		const diffDays = bday.diff(today, 'days');
		if (diffDays < 3) return 'text-red-500';
		if (diffDays < 10) return 'text-orange-500';
		return 'text-green-500';
	};

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
							<p className="text-sm text-gray-800">{notify.firstName} {notify.lastName}</p>
							{/* Cập nhật span để hiển thị ngày sinh theo định dạng dd-MM-yyyy và áp dụng màu sắc dựa trên điều kiện */}
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
