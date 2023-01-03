import React from 'react';
import '../Style/calculator.css';
import axios from "axios";
function Calculator() {
    const [operation, setOperation] = React.useState('');
    const [result, setResult] = React.useState('');

    const signs = ['+', '-', '*', '/'];

    const correspondance = {
        '+': 'addition',
        '-': 'soustraction',
        '*': 'multiplication',
        '/': 'division'
    }

    const addInput = (value) => {
        let canAddNumberInString = true;
        if (signs.includes(value)) {
            signs.forEach((sign) => {
                if (operation.includes(sign))
                    canAddNumberInString = false;
            })
            if (operation.length === 0)
                canAddNumberInString = false;
        }
        if (canAddNumberInString)
            setOperation(operation + value);
    }
    const resetOperation = () => {
        setOperation('');
    }

    const calculate = () => {
        const payload = destructOperation(operation);
        axios.post('http://localhost:5089', payload).then((response) => {
            console.log(response)
        });
    }

    const getSign = (operation) => {
        let signSelected = '';
        signs.forEach((sign) => {
            if (operation.includes(sign)) {
                signSelected=sign;
            }
        })
        return signSelected;
    }

    const destructOperation = (operation) => {
        const signSelected = getSign(operation);
        const numbersSelected = operation.split(signSelected);
        return {
            sign: correspondance[signSelected],
            number1: numbersSelected[0],
            number2: numbersSelected[1]
        }
    }

    return (
        <div className="calculator mx-auto">
            <div className="container">
                <div className="calc-body">
                    <div className="calc-screen">
                        <div className="calc-operation">{result ? result : 'Total'}</div>
                        <div className="calc-typed">{operation}<span className="blink-me">_</span></div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button c" onClick={()=>{resetOperation()}}>C</div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button" onClick={()=>{addInput('7')}}>7</div>
                        <div className="button" onClick={()=>{addInput('8')}}>8</div>
                        <div className="button" onClick={()=>{addInput('9')}}>9</div>
                        <div className="button l" onClick={()=>{addInput('*')}}>*</div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button" onClick={()=>{addInput('4')}}>4</div>
                        <div className="button" onClick={()=>{addInput('5')}}>5</div>
                        <div className="button" onClick={()=>{addInput('6')}}>6</div>
                        <div className="button l" onClick={()=>{addInput('-')}}>-</div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button" onClick={()=>{addInput('1')}}>1</div>
                        <div className="button" onClick={()=>{addInput('2')}}>2</div>
                        <div className="button" onClick={()=>{addInput('3')}}>3</div>
                        <div className="button l" onClick={()=>{addInput('+')}}>+</div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button" onClick={()=>{addInput('.')}}>.</div>
                        <div className="button" onClick={()=>{addInput('0')}}>0</div>
                        <div className="button" onClick={()=>{addInput('00')}}>00</div>
                        <div className="button l" onClick={()=>{calculate()}}>=</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Calculator;