import React from 'react'
import Heading from "./Heading"
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="col-10 col-sm-8 mx-auto text">
                    <p className="lead text-white mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Asperiores inventore veritatis dolor eaque blanditiis voluptas 
                        libero, similique minima fugiat repellat totam, eum aperiam 
                        temporibus consectetur, modi reiciendis architecto doloremque 
                        unde. Debitis beatae sed ullam deserunt excepturi magnam nam 
                        cumque vitae explicabo eum sint velit totam maiores voluptate, 
                        dicta molestias ipsa corporis fugit aliquam nesciunt at dolorem 
                        possimus illo. Totam, dolorum?
                    </p>
                    <Link to="/about/">
                        <button className="btn btn-warning btn-lg">
                            {heading}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
