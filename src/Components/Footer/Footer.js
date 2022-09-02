import React from 'react'
import './Fotter.css'

const Footer = () => {
    return (
        <div>

            <footer className="sub_footer">
                <div className="container">
                   <div className="row">
                   <div className="col-md-4">
                        <p className="sub-footer-text text-center">&copy;  Tree Restaurant 2014, Created by <a
                            href="/">Sukraj Chaudhary</a></p>
                    </div>
                    <div className="col-md-4">
                        <p className="sub-footer-text text-center">Back to <a href="#top">TOP</a></p>
                    </div>
                    <div className="col-md-4">
                        <p className="sub-footer-text text-center">Developer<a href="https://github.com/Sukrajchaudhary"> Contact</a></p>
                    </div>
                   </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer