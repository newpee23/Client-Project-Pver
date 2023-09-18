import React, { useState } from 'react';

type Props = {}

function FormHome({ }: Props) {
    const [searchQuery, setSearchQuery] = useState<string>(''); // เริ่มต้นค่า searchQuery เป็นสตริงเปล่า

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // เพิ่มโค้ดที่คุณต้องการให้ทำงานเมื่อกดปุ่มค้นหา
        console.log('Submitted search query:', searchQuery);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value); // อัปเดตค่า searchQuery ของเราเมื่อมีการเปลี่ยนแปลงใน input
    };

    return (
        <div className="p-5 mt-4 block md:flex md:justify-center">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative w-full md:w-[450px]">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        placeholder="Search"
                        required
                        value={searchQuery} // ใช้ค่า searchQuery เป็นค่าของ input
                        onChange={handleInputChange} // เรียกฟังก์ชัน handleInputChange เมื่อมีการเปลี่ยนแปลงใน input
                    />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                        Search
                    </button>
                </div>
            </form>
        </div>

    )
}

export default FormHome