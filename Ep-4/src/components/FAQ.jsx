import React, { useState } from 'react'
import { FAQ_Questions } from '../utils/mockData';

export const FAQ = () => {
    const [showFAQ, setShowFAQ] = useState(0);
    return (
        <div className='faq-section'>
            <h1 className="tittle">FAQ SECTION</h1>
            {
                FAQ_Questions.map((questions, index) => {
                    return (
                        <div key={index} >
                            <div className="header" data-testid="arrowId" onClick={() => setShowFAQ(index)}>
                                <span className="title"> {questions.question} </span>
                                <span className="down-arrow" > downArrowId </span>
                            </div>
                            {(showFAQ === index ? true : false) && <div className="body" data-testid="faqId"> {questions.answer} </div>}
                        </div>
                    )
                })
            }
        </div>
    )
}
