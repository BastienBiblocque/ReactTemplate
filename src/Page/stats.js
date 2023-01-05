import React, {useEffect} from 'react';
import {VictoryPie} from "victory";
import Header from "../Component/header";
import {RotatingSquare} from 'react-loader-spinner'
import axios from "axios";
import Footer from "../Component/footer";

//doc pour les loaders https://mhnpd.github.io/react-loader-spinner/docs/category/components/
function Stats() {
    const [statistics, setStatistics] = React.useState([]);

    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        getStats();
    }, [])

    const getStats = () => {
        axios.get('https://localhost:7140/Statistics').then((response) => {
            Object.keys(response.data).forEach(function(key, index) {
                statistics.push({x: key, y: response.data[key]});
            });
            setStatistics(statistics);
            setIsLoading(false);
        });
    }

    return (
        <>
            <Header/>
            <div>
                <div className="min-h-screen">
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
                            data={statistics}
                            colorScale={["tomato", "orange", "gold", "red"]}
                            height={200}
                            style={{labels: {fill: "white", fontSize: 15}}}
                        />
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Stats;