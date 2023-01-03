import React, {useEffect} from 'react';
import {VictoryPie} from "victory";
import Header from "../Component/header";
import {RotatingSquare} from 'react-loader-spinner'
import axios from "axios";

//doc pour les loaders https://mhnpd.github.io/react-loader-spinner/docs/category/components/
function Stats() {
    const datas = [{x: "Cats", y: 35}, {x: "Dogs", y: 40}, {x: "Birds", y: 55}];

    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        getStats();
    }, [])

    const getStats = () => {
        axios.get('http://localhost:5089').then((response) => {
            setIsLoading(false);
        }).catch((error) => {
            console.log(error)
            setIsLoading(false);
        });
    }

    return (
        <>
            <Header/>
            {isLoading ?
                <div className="w-full mt-8 grid justify-items-center">
                    <RotatingSquare
                        height="100"
                        width="100"
                        color="#dc944c"
                        ariaLabel="rotating-square-loading"
                        strokeWidth="4"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>:
                <VictoryPie
                    data={datas}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    height={200}
                    style={{labels: {fill: "white", fontSize: 15}}}
                />
            }
        </>
    );
}

export default Stats;