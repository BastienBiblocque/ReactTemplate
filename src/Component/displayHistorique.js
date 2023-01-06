import React from 'react';

function DisplayHistorique(props) {

    console.log(props.historique)

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Nombre 1</th>
                    <th>Operation </th>
                    <th>Nombre 2</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {props.historique.map((item, index) => (
                    <tr key={index}>
                        <th>{index}</th>
                        <th>{item.input1}</th>
                        <th>{item.operationType}</th>
                        <th>{item.input2}</th>
                        <th>{item.output}</th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default DisplayHistorique;