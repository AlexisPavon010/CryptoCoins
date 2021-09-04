import Head from 'next/head'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Progress from '@material-tailwind/react/Progress';

export default function CardTable() {
    return (
        <>
            <Head>
                <title>Movimientos | Crypto Coin's</title>
            </Head>
            <Card>
                <CardHeader color="green" contentPosition="left">
                    <h2 className="text-white text-2xl">Ultimos Movimientos</h2>
                </CardHeader>
                <CardBody>
                    <div className="overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-2 text-green-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Operation
                                    </th>
                                    <th className="px-2 text-green-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Cryptocurrency
                                    </th>
                                    <th className="px-2 text-green-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Value
                                    </th>
                                    <th className="px-2 text-green-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Quantity
                                    </th>
                                    <th className="px-2 text-green-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Exchange
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-green-500 mr-2"></i>{' '}
                                        Buy
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        BTC
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        USDT 50000.00
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        BTC 1.00000000
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Binance
                                    </th>
                                </tr>
                                <tr>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <i className="fas fa-circle fa-sm text-blue-500 mr-2"></i>{' '}
                                        Sell
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        BTC
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        USDT 50000.00
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        BTC 1.00000000
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Binance
                                    </th>
                                </tr>
                                <tr>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-green-500 mr-2"></i>{' '}
                                        Buy
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        BTC
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        USDT 50000.00
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        BTC 1.00000000
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Binance
                                    </th>
                                </tr>
                                <tr>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-blue-500 mr-2"></i>{' '}
                                        Sell
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        BTC
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        USDT 50000.00
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        BTC 1.00000000
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        Binance
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
