import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import useGetStatistics from "../Hook/useGetStatistics";
import SquareLoader from "../Utils/Loader/SquareLoader";
import PieChart from "../Utils/Charts/Pie";
function Historique() {
    return (
        <>
            <Header/>
            <div className="min-h-screen">
                historique
            </div>
            <Footer/>
        </>
    );
}

export default Historique;