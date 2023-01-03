import React from 'react';
import {VictoryPie} from "victory";
import Header from "../Component/header";
import { Audio } from 'react-loader-spinner'

//doc pour les loaders https://mhnpd.github.io/react-loader-spinner/docs/category/components/
function Stats() {
    const datas = [{ x: "Cats", y: 35 },{ x: "Dogs", y: 40 },{ x: "Birds", y: 55 }]

    return (
        <>
            <Header/>
            <VictoryPie
                data={datas}
                colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                height={200}
                style={{ labels: { fill: "white", fontSize: 15 } }}
            />
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </>
    );
}
export default Stats;