export default function list(req, res) {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
        .then(res => res.json())
        .catch(error => res.error('Error:', error))
        .then(response => res.send(response));
}