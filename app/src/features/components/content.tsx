'use client'
import React from 'react';

export type Props = { // ①
    label?: string
    labels?: string[];
    star?: number[];
    detail?: string;
};

export default function Card({label="test", labels=['Thing 1', 'Thing 2'], star=[1, 2], detail='Here is Detail'}: Props): JSX.Element {
    
    var content = <div className="card">
        <div className="head">
            <p>{label}</p>
        </div>
        <div className="content">
            <div className='tool'>
                {
                    labels.map((pair, i)=>
                    <div className='item' key={i}>
                        <span>{pair}</span><br></br>
                        <span className="star5_rating" data-rate={star[i]}></span>
                    </div>
                )}
            </div>
            <div className='detail'>
                {detail}
            </div>
        </div>

    </div>
    
    return content
}