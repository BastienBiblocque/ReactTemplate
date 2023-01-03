import React, {useState} from 'react';
import Header from "../Component/header";

function Index() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <Header/>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </>
    );
}

export default Index;