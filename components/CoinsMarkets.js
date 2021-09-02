import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useMarketCoins from '../hooks/useMarketCoins';

export default function CoinsMarkets() {

    const [page, setPages] = useState(1)

    const data = useMarketCoins(page)
    console.log(data)

    // console.log(state)
    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Coins Markets</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        See More
                    </Button>
                </div>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto max-h-96">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    ID
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Name
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Name
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Precio
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    1 hr
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    24 hr
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    7 dias
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.markets?.map((coin, i) =>
                                    <tr key={coin.id}>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {i + 1}
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <Image src={coin.image} height={30} width={30} />
                                        </th>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {coin.name}
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {coin.current_price}
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {coin.price_change_24h}
                                        </td>
                                        <td className={` ${coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'} border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left`}>
                                            {coin.price_change_percentage_24h}
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {coin.total_volumen}
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </CardBody>
            <Pagination className='overflow-hidden'>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(1)} ripple="dark">
                    <Icon name="keyboard_arrow_left" />
                </PaginationItem>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(1)} ripple="light">1</PaginationItem>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(2)} ripple="dark">2</PaginationItem>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(3)} ripple="dark">3</PaginationItem>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(4)} ripple="dark">4</PaginationItem>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(5)} ripple="dark">5</PaginationItem>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(6)} ripple="dark">6</PaginationItem>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(7)} ripple="dark">7</PaginationItem>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(8)} ripple="dark">8</PaginationItem>
                <PaginationItem className='cursor-pointer' onClick={()=> setPages(91)} ripple="dark">
                    <Icon name="keyboard_arrow_right" />
                </PaginationItem>
            </Pagination>
        </Card>
    );
}
