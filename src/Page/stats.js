import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import useGetStatistics from "../Hook/useGetStatistics";
import SquareLoader from "../Utils/Loader/SquareLoader";
import PieChart from "../Utils/Charts/Pie";
function Stats() {
    const statistics = useGetStatistics();
    return (
        <>
            <Header/>
            <div>
                <div className="min-h-screen">
                    {statistics.isLoading ?
                        <div className="w-full mt-8 grid justify-items-center">
                            <SquareLoader />
                        </div>
                        :
                        <PieChart statistics={statistics.statistics} />
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Stats;