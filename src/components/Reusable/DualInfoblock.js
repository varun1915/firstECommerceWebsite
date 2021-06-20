import React from 'react'
import Heading from './Heading';
import { Link } from 'gatsby'

export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="cotainer">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mx-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            In ex ipsam doloremque neque dignissimos exercitationem 
                            odit aspernatur illum dolores magni iure error accusantium, 
                            suscipit eos unde dolor nesciunt iste, veniam obcaecati 
                            repudiandae consectetur minima. Repellendus illo, eveniet 
                            accusantium ipsam eos non hic beatae sed voluptates praesentium, 
                            officiis pariatur, enim sequi. Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. Temporibus, inventore ut maxime 
                            sequi tempore sed, similique praesentium, rem iure ratione 
                            cupiditate dolor. Optio minima veniam fugit odit eaque repudiandae 
                            ipsam harum, eveniet explicabo sunt voluptatum impedit corrupti 
                            ex tempora suscipit accusamus a officiis. Maxime corrupti minus 
                            ipsa fuga recusandae aspernatur, consequuntur voluptatem 
                            perferendis enim officiis incidunt deserunt ipsam ipsum nobis 
                            impedit magni, eius voluptates, aliquam veritatis cum magnam? 
                            Sapiente alias eveniet cum provident quaerat doloremque et 
                            molestias laudantium dolor, id autem beatae repellat consectetur 
                            ullam, odit aliquam soluta assumenda possimus aspernatur,
                            quibusdam iure voluptas laborum qui. Veritatis vitae temporibus aut!
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card bg-dark" style={{width: "85%"}}>
                            <img src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                            className="card-img-top" alt="Image goes here"/>
                            <div className="card-body text-white">
                                <h5 className="card-title text-success">Just click Photos</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Saepe et, itaque modi commodi odio eligendi 
                                dolores sequi doloribus incidunt inventore illo, nostrum amet 
                                mollitia quaerat maxime nam laudantium quis dolore.
                                </p>
                                <Link to="#" className="btn btn-warning btn-block">
                                    {heading}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
