import Head from 'next/head';
import TradeForm from '../components/Trade/TradeForm';

export default function Trade() {

    return (
        <>
        <Head>
                <title>Trade</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-gray-800 pt-14 pb-28 px-3 md:px-8 h-auto">
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-1">
                        <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                        <TradeForm />
                        </div>
                    </div>
                </div>
            </div>

        </>
        );
}