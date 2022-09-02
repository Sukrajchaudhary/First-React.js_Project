import React from 'react'
import './Features.css'
import image from '../assets/featured-vector.png'

const Feature = () => {
    return (
        <div>
            <section className="features">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 sm-12">
                            <img src={image} alt="" />
                        </div>
                        <div className="col-md-6 sm-12 mr-auto ">
                            <h3><span>BEST</span>   FEATURED</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sed necessitatibus commodi libero eius. Aut omnis libero, enim vitae dicta obcaecati, illum non deserunt, cum eius aspernatur inventore iste quod?</p>
                            <h4>Go To Any Things</h4>
                           <span> <i class="fab fa-atlassian"></i>Welcome to one of the world’s largest creative communities and the number one game development platform. Unity gives you everything.</span>
                           <i class="fab fa-bitcoin"></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature