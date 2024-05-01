import { useState } from 'react';

function PersonFilterButtons() {
    const [active, setActive] = useState('1');

    const handleButtonClick = (data) => {
        setActive(data);
        // Thêm hành động cập nhật dữ liệu tại đây
    };

    return (
        <div>
                <button
                    className={active === '1' ? 'w-[106px] h-[35px] border-[2px] border-blue-400 m-2 rounded shadow-md shadow-gray-500 bg-blue-400 text-white' : 'w-[106px] h-[35px] border-[2px] border-blue-400 m-2 rounded shadow-md shadow-gray-500 bg-slate-100'}
                    onClick={() => handleButtonClick('1')}>
                    Employee
                </button>
            <button
                className={active === '2' ? 'w-[106px] h-[35px] border-[2px] border-blue-400 m-2 rounded shadow-md shadow-gray-500 bg-blue-400 text-white' : 'w-[106px] h-[35px] border-[2px] border-blue-400 m-2 rounded shadow-md shadow-gray-500 bg-slate-100'}
                onClick={() => handleButtonClick('2')}>
                Shareholder
            </button>
        </div>
    );
}

export default PersonFilterButtons;
