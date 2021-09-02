import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import { useRouter } from 'next/dist/client/router';
import { app } from '../firebase/client';
import useGetUserSession from '../hooks/useGetUserSession';
import Link from 'next/link';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const user = useGetUserSession();
    const cerrarSesion = () => {
        console.log('salir')
        app.auth().signOut()
    }

    return (
        <nav className="bg-gray-800 md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="white" />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-64' : '-left-64'
                            } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div>

                <div className="flex justify-end items-center w-full">
                    {/* <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4> */}

                    <div className="flex">
                        <NavbarInput placeholder="Search" />

                        <div className="-mr-4 ml-6">
                            <Dropdown
                                color="transparent"
                                buttonText={
                                    <div className="w-12">
                                        {/* <Icon name="account_circle" size="xl" /> */}
                                        <Image src={user?.user?.photoURL ? user?.user?.photoURL : "https://bridgemotorsbucket.s3.amazonaws.com/static/images/Home/user_men.png"} rounded />
                                    </div>
                                }
                                rounded
                                style={{
                                    padding: 0,
                                    color: 'transparent',
                                }}
                            >
                                <Link href='/perfil'>
                                    <a>
                                        <DropdownItem color="lightBlue">
                                            Perfil
                                        </DropdownItem>
                                    </a>
                                </Link>
                                <Link href='/configuracion'>
                                    <a>
                                        <DropdownItem color="lightBlue">
                                            Configurar Cuenta
                                        </DropdownItem>
                                    </a>
                                </Link>
                                <DropdownItem onClick={() => cerrarSesion()} color="lightBlue">
                                    Cerrar Sesion
                                </DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
