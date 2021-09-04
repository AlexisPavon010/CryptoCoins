import { useEffect, useState } from "react"

const criptomonedas = [
    "Bitcoin",
    "Ethereum",
    "Cardano",
    "Dai",
    "Tether",
    "Solana",
    "Ergo"
];

const operaciones = [
    "Sell",
    "Buy"
];

export default function useFormControls(entity) {

    var results = []

    if (entity == "criptomonedas") {
        results=criptomonedas;
    }
    if (entity == "operaciones") {
        results=operaciones;
    }

    return {
        results
    }
}