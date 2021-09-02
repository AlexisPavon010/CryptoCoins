import Head from 'next/head'
import StatusCard from '../components/StatusCard';
//import ChartLine from '../components/CharLine';
//import ChartBar from '../components/ChartBar';
import TrafficCard from '../components/TrafficCard';
import CoinsMarkets from '../components/CoinsMarkets';


export default function Home({markets, backend}) {

  return (
    <div>
      <Head>
        <title>Next-Tailwind | Crypto Coins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="bg-gray-800  h-40" />
        <div className="px-3  -mt-24">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 xl:grid-cols-5">
              <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                {/* <ChartLine /> */}
              </div>
              <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                {/* <ChartBar /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 md:px-8">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
              <StatusCard
                color="pink"
                icon="trending_up"
                title="Traffic"
                amount="350,897"
                percentage="3.48"
                percentageIcon="arrow_upward"
                percentageColor="green"
                date="Since last month"
              />
              <StatusCard
                color="orange"
                icon="groups"
                title="New Users"
                amount="2,356"
                percentage="3.48"
                percentageIcon="arrow_downward"
                percentageColor="red"
                date="Since last week"
              />
              <StatusCard
                color="purple"
                icon="paid"
                title="Sales"
                amount="924"
                percentage="1.10"
                percentageIcon="arrow_downward"
                percentageColor="orange"
                date="Since yesterday"
              />
              <StatusCard
                color="blue"
                icon="poll"
                title="Performance"
                amount="49,65%"
                percentage="12"
                percentageIcon="arrow_upward"
                percentageColor="green"
                date="Since last month"
              />
            </div>
          </div>
        </div>

        <div className="px-3 md:px-3 h-auto">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 xl:grid-cols-1">
              <div className="xl:col-start-1 xl:col-end-4  mb-14">
                <CoinsMarkets markets={markets} />
              </div>
              <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                <TrafficCard />
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch(`https://crypto-coins-virid.vercel.app/api/coins/markets`)
  const data = await res.json()



  if (!data) {
    return {
      props: {}
    }
  }

  return {
    props: { markets: data }, // will be passed to the page component as props
  }
}