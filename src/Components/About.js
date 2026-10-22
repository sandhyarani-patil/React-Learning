import React, { useState } from 'react';


export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btntext, setBtnText] = useState("Enable dark Mode");

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            });
            setBtnText("Enable light mode");
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnText("Enable dark mode");
        }
    }

    return (
        <div className="container p-3" style={myStyle}>
            <h2 className="my-3">About Us</h2>
            <div className="accordion">
                <details className="accordion-item" name="accordionNested" open>
                    <summary className="accordion-header">
                        Accordion Item #1
                        <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                    </summary>
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the first item’s accordion body.</strong> It contains a nested accordion below.
                        <div className="accordion mt-3">
                            <details className="accordion-item" name="accordionNestedInner" open>
                                <summary className="accordion-header">
                                    Nested Item #1
                                    <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                                </summary>
                                <div className="accordion-body" style={myStyle}>
                                    This is the body of the first nested accordion item.
                                </div>
                            </details>
                            <details className="accordion-item" name="accordionNestedInner">
                                <summary className="accordion-header">
                                    Nested Item #2
                                    <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                                </summary>
                                <div className="accordion-body" style={myStyle}>
                                    This is the body of the second nested accordion item.
                                </div>
                            </details>
                            <details className="accordion-item" name="accordionNestedInner">
                                <summary className="accordion-header">
                                    Nested Item #3
                                    <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                                </summary>
                                <div className="accordion-body" style={myStyle}>
                                    This is the body of the third nested accordion item.
                                </div>
                            </details>
                        </div>
                    </div>
                </details>
                <details className="accordion-item" name="accordionNested">
                    <summary className="accordion-header">
                        Accordion Item #2
                        <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                    </summary>
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the second item’s accordion body.</strong> It does not contain a nested accordion.
                    </div>
                </details>
                <details className="accordion-item" name="accordionNested">
                    <summary className="accordion-header">
                        Accordion Item #3
                        <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                    </summary>
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the third item’s accordion body.</strong> It does not contain a nested accordion.
                    </div>
                </details>
            </div>
            
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    );
}