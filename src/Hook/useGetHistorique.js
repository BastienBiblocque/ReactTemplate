import React, {useEffect, useState} from 'react';
import axios from "axios";

function useGetHistorique () {
    const [historique, setHistorique] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://localhost:7140/History')
            .then((response) => {
                setHistorique(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);

    return {historique, isLoading};
}

export default useGetHistorique;
