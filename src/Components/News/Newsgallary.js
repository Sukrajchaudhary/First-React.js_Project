import React from 'react'
import Menu from './Menu'
import { useState } from 'react'
const Newsgallary = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (cat) => {
        const updateItem = Menu.filter((currentelem) => {
            return currentelem.category === cat;
        });
        setItems(updateItem);
    }
    return (
        <>
            <h3 className="mt-5 text-center main-heading">
                Our Latest News
            </h3>
            <hr />
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-9 sm-12">
                        {
                            items.map((elem) => {
                                const { image, title, description } = elem;
                                return (
                                    <div class="card mb-3">
                                        <img src={image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{title}</h5>
                                            <p class="card-text">{description}</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="col-md-3 sm-12">
                        <div className="box shadow-sm p-3 mb-5 bg-body rounded">
                            <div className="card">
                                <div class="d-grid gap-2 ">
                                    <button type='button'  className="list-group-item " onClick={() => filterItem('Latest-News')}>Today Latest News</button>
                                    <button  type='button' className="list-group-item "onClick={() => filterItem('Daily-news')}>Daily News</button>
                                    <button type='button' className="list-group-item"onClick={() => filterItem('popular')}>Popular</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Newsgallary