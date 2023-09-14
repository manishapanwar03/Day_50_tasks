import React, { useState } from 'react'
import './Progress.css'
const Progresssteps = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const handlePre = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }
    const handleNext = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep +     1)
        }
    }

    const getCircleColor = (stepNumber) => {
        return currentStep >= stepNumber ? 'red' : 'lightgray';

    }
    return (
        <>
            <div className='container'>
                <div className='progreess'>
                    <div className='circle' style={{ backgroundColor: getCircleColor(1) }}>1</div>
                    <div className='circle' style={{ backgroundColor: getCircleColor(2) }}>2</div>
                    <div className='circle' style={{ backgroundColor: getCircleColor(3) }}>3</div>
                    <div className='circle' style={{ backgroundColor: getCircleColor(4) }}>4</div>
                    <div className='circle' style={{ backgroundColor: getCircleColor(5) }}>5</div>
                </div>
                <button className="pre" onClick={handlePre}>Pre</button>
                <button className='pre' onClick={handleNext}>Next</button>
            </div>
        </>
    )
}

export default Progresssteps