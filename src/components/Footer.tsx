import { FiAlertCircle, FiHome, FiMail } from 'react-icons/fi';
import { Tooltip } from 'flowbite-react';

function Footer() {
    return (
        <footer className="bg-[#ebe6e4] text-slate-600 dark:bg-[#374151] w-full mt-auto p-5">
            <div className="flex items-center justify-between flex-wrap">
                <span className="text-sm font-medium dark:text-gray-200">
                    2024 orime studio ©
                </span>
                <ul className="flex flex-wrap items-center text-sm font-medium dark:text-slate-200">
                    <li className="mr-3">
                        <Tooltip content="Home" placement="top" className="text-xs bg-gray-700 rounded px-1 py-1">
                            <a href="/" className="hover:underline dark:text-gray-200"><FiHome size={20} /></a>
                        </Tooltip>
                    </li>
                    <li className="mr-3">
                        <Tooltip content="About" placement="top" className="text-xs bg-gray-700 text-white rounded px-1 py-1">
                            <a href="/about" className="hover:underline dark:text-gray-200"><FiAlertCircle size={20} /></a>
                        </Tooltip>
                    </li>
                    <li className="mr-3">
                        <Tooltip content="Contact" placement="top" className="text-xs bg-gray-700 text-white rounded px-1 py-1">
                            <a href="/contact" className="hover:underline dark:text-gray-200"><FiMail size={20} /></a>
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
