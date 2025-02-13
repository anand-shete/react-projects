import { useEffect, useState } from "react";

export default function useCurrencyAPI(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(url)
            .then(res => res.json())
            .then(body => {
                setData(body[currency])
            })
    }, [currency])

    return data;
}