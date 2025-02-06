import { useState, useEffect } from "react";

// custom Hook that expects a countryCode and returns conversion rate for that currency
export default function useCurrencyAPI(currencyCode) {
    const [data, setData] = useState({});

    // If we directly call fetch() in the body of the function (outside of useEffect), it would execute every time the component re-renders, leading to an infinite loop. useEffect ensures that the fetch request runs only once when the component mounts ([] as the dependency array)
    // useEffect does not directly support returning a Promise so we cannot make it asynchronous function
    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.json`;
        fetch(url)
            .then(res => res.json())
            .then(body => {
                setData(body[currencyCode]);
            });
    }, [currencyCode]);
    return data;
}