import { useState } from 'react';
import Link from 'next/link'
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <Link href='/'>
                        <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 text-center w-full inline-block"
                        >
                            <H6 color="gray">Material Tailwind</H6>
                        </a>
                    </Link>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <Link href='/'>
                                    <a
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <Icon name="dashboard" size="2xl" />
                                        Dashboard
                                    </a>
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2">
                                <Link href='/settings'>
                                    <a
                                        to="/settings"
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <Icon name="settings" size="2xl" />
                                        Settings
                                    </a>
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <Link href='/tables'>
                                    <a
                                        to="/tables"
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <Icon name="toc" size="2xl" />
                                        Tables
                                    </a>
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link href='/map'>
                                    <a
                                        to="/maps"
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <Icon name="map" size="2xl" />
                                        Maps
                                    </a>
                                </Link>
                            </li>
                            {/* <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <Link href="/">
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 text-sm font-light py-3"
                                    >
                                        <Icon name="fingerprint" size="2xl" />
                                        Login
                                    </a>
                                </Link>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <Link href="">
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 text-sm font-light py-3"
                                    >
                                        <Icon name="list_alt" size="2xl" />
                                        Register
                                    </a>
                                </Link>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="web" size="2xl" />
                                    Landing Page
                                </a>
                            </li> */}
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <Link href='profile'>
                                    <a
                                        rel="noreferrer"
                                        className="flex items-center gap-4 text-sm font-light py-3"
                                    >
                                        <Icon name="account_circle" size="2xl" />
                                        Profile Page
                                    </a>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
}
