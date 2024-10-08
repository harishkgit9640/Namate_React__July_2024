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
                        <div key={index}>
                            <div className="header" onClick={() => setShowFAQ(index)}>
                                <span className="title"> {questions.question} </span>
                                <span className="down-arrow"> 🔽 </span>
                            </div>
                            {(showFAQ === index ? true : false) && <div className="body"> {questions.answer} </div>}
                        </div>
                    )
                })
            }
        </div>
    )
}
