import Head from 'next/head'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import GenericsInput from '../Controls/GenericsInput';


export default function TradeForm() {
    return (
        <>
            <Head>
                <title>Trade | Crypto Coin's</title>
            </Head>
            <Card>
                <CardHeader color="green" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Trade</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            Settings
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <form>
                        <h6 className="text-green-500 text-sm mt-3 mb-6 font-light">
                            Choose Operation
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <GenericsInput
                                    type="text"
                                    color="green"
                                    placeholder="Choose Operation"
                                    outline={true}
                                    entity="operaciones"

                                />
                            </div>
                        </div>
                        <h6 className="text-green-500 text-sm mt-3 mb-6 font-light">
                            Choose Cryptocurrency
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <GenericsInput
                                    type="text"
                                    color="green"
                                    placeholder="Choose Cryptocurrency"
                                    outline={true}
                                    entity="criptomonedas"

                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="green"
                                    outline={true}
                                    placeholder="Select a Date"
                                />
                            </div>
                        </div>
                        <h6 className="text-green-500 text-sm my-6 font-light">
                            Values
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="green"
                                    outline={true}
                                    placeholder="Import to Buy/Sell"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="green"
                                    outline={true}
                                    placeholder="Cryptocurrency Price"
                                />
                            </div>

                            <div className="w-full lg:w-12/12 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="green"
                                    outline={true}
                                    placeholder="Quantity"
                                />
                            </div>

                        </div>

                        <div className="w-full flex items-center justify-between">
                            <Button
                                color="lightBlue"
                                buttonType="filled"
                                size="lg"
                                rounded={false}
                                block={true}
                                iconOnly={false}
                                ripple="light"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </>
    );
}