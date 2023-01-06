import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import useGetHistorique from "../Hook/useGetHistorique";
import SquareLoader from "../Utils/Loader/SquareLoader";
import DisplayHistorique from "../Component/displayHistorique";
function Historique() {
    const historique = useGetHistorique();
    return (
        <>
            <Header/>
            <div className="min-h-screen">
                {historique.isLoading ?
                    <div className="w-full mt-8 grid justify-items-center">
                        <SquareLoader />
                    </div>
                    :
                    <DisplayHistorique historique={historique.historique} />
                }
            </div>
            <Footer/>
        </>
    );
}

export default Historique;