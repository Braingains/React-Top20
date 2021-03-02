import React, { useEffect, useState } from 'react';
import ChartDetails from "../components/ChartDetails";

const ChartContainer = () => {

    const [top20, setTop20] = useState({});

    const getTop20 = () => {
        console.log("Getting chart info")
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/feed/json`)
        .then(res => res.json())
        .then(data => setTop20(data))
    }

    useEffect(() => {
        getTop20();
    }, [])

    return (
        <>
        <p>Chart data!</p>
        <ChartDetails top20={top20}/>
        </>
    )




}

export default ChartContainer;