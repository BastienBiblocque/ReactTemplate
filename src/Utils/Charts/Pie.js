import React from 'react';
import {RotatingSquare} from 'react-loader-spinner'
import {VictoryPie} from "victory";
function PieCharts(props) {
    return (
        <VictoryPie
            data={props.statistics}
            colorScale={["tomato", "orange", "gold", "red"]}
            height={200}
            style={{labels: {fill: "white", fontSize: 15}}}
        />
    );
}

export default PieCharts;