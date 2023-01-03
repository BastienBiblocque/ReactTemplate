import React from 'react';
import '../Style/calculator.css';
function Calculator() {
    const [values, setValues] = React.useState('');

    const addInput = (value) => {
        setValues(values + value);
    }
    const resetValues = () => {
        setValues('');
    }

    return (
        <div className="calculator mx-auto">
            <div className="container">
                <div className="calc-body">
                    <div className="calc-screen">
                        <div className="calc-operation">2536 + 419 +</div>
                        <div className="calc-typed">{values}<span className="blink-me">_</span></div>
                    </div>
                    <div className="calc-button-row">
                        <div className="button c">C</div>
                        <div className="button l">≠</div>
                        <div className="button l">%</div>
                        <div className="button l">/</div>
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
                        <div className="button" onClick={()=>{addInput('00')}}>0</div>
                        <div className="button" onClick={()=>{addInput('00')}}>00</div>
                        <div className="button l">=</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Calculator;