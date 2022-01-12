import React, { useState } from 'react'

export default function About(props) {
    let darkModeStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }
    // const [darkModeStyle, toogleDarkLightMode] = useState(
    //     {
    //         color: 'black',
    //         BackgroundColor: 'white'
    //     }
    // );
    // const [toogleBtnText, setToogleBtnText] = useState("Enable Light Mode");
    // const toogleStyle = () => {
    //     if (darkModeStyle.color === 'black') {
    //         toogleDarkLightMode({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             Border: '1px solid white'
    //         })
    //         setToogleBtnText("Disable Light Mode");
    //     }
    //     else {
    //         toogleDarkLightMode(
    //             {
    //                 color: 'black',
    //                 backgroundColor: 'white'
    //             }
    //         )
    //         setToogleBtnText("Enable Dark Mode");
    //     }
    // }
    return (
        <div className="container">
            <h1 className="my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h1>
            <div className="accordion" id="accordionExample" style={darkModeStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={darkModeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analize Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={darkModeStyle}>
                            This Editor gives us you efficient way to Analize your text with the utility of providing word count and character count along with average readding time.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={darkModeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={darkModeStyle}>
                            This Application is free to use with zero fees. This helps you to convert your text to upper case, lower case etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={darkModeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={darkModeStyle}>
                            This Text Editor Can be ran on any modoern web browser like Chrome, FireFox, Internet Exporler, etc. It suits to word Count characters in Facebook, blog, books, excel documents, pdf, etc.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}