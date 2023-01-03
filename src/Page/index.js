import React, {useState} from 'react';
import Header from "../Component/header";
import Calculator from "../Component/calculator";

function Index() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <Header/>
            <Calculator/>
        </>
    );
}

export default Index;