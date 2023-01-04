import React, {useEffect} from 'react';
import {VictoryPie} from "victory";
import Header from "../Component/header";
import {RotatingSquare} from 'react-loader-spinner'
import axios from "axios";
import Footer from "../Component/footer";

//doc pour les loaders https://mhnpd.github.io/react-loader-spinner/docs/category/components/
function Stats() {
    const datas = [{x: "Addition", y: 50}, {x: "Soustraction", y: 50}, {x: "Multiplication", y: 50},{x: "Division", y: 50}];

    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        // getStats();
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
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
            <div className="">
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
                        colorScale={["tomato", "orange", "gold", "red"]}
                        height={200}
                        style={{labels: {fill: "white", fontSize: 15}}}
                    />
                }
            </div>
            <Footer/>
        </>
    );
}

export default Stats;