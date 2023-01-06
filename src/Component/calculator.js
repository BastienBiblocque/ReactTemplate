import React from 'react';
import '../Style/calculator.css';
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";
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
        const payload = generatePayload(operation);
        if (payload.input1 && payload.input2 && payload.OperationType)
            postOperation(payload);
        else
            toast.error("Une erreur est présente dans votre calcul.");
    }

    const generatePayload = (operation) => {
        const signSelected = getSign(operation);
        const numbersSelected = operation.split(signSelected);
        return {
            OperationType: correspondance[signSelected],
            input1: numbersSelected[0],
            input2: numbersSelected[1]
        }
    }
    const getSign = (operation) => {
        let signSelected = '';
        signs.forEach((sign) => {
            if (operation.includes(sign))
                signSelected=sign;
        })
        return signSelected;
    }
    const postOperation = (payload) => {
        axios.post('https://localhost:7140/Calcul', payload).then((response) => {
            setResult(response.data.output.toString());
            resetOperation();
        });
    }

    return (
        <div className="calculator mx-auto">
            <Toaster/>
            <div className="container select-none min-h-screen">
                <div className="calc-body">
                    <div className="calc-screen">
                        <div className="calc-operation">{result ? result : 'Total'}</div>
                        <div className="calc-typed">{operation}<span className="blink-me">_</span></div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button c" onClick={()=>{resetOperation()}}>C</div>
                        <div className="button ">(</div>
                        <div className="button ">)</div>
                        <div className="button l" onClick={()=>{addInput('/')}}>/</div>
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