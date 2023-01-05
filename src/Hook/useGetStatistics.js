import React, {useEffect, useState} from 'react';
import axios from "axios";

function useGetStatistics () {
    const [statistics, setStatistics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        statistics.length=0;
        axios.get('https://localhost:7140/Statistics')
            .then((response) => {
                Object.keys(response.data).forEach(function(key, index) {
                    statistics.push({x: key, y: response.data[key]});
                });
                setStatistics(statistics);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return {statistics, isLoading};
}

export default useGetStatistics;