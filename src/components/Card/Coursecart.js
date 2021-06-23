import { log } from 'debug'
import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'

const getCaty = items => {
    let holdItems = items.map( item => {
        return item.node.category
    });
    let holdCategories = new Set(holdItems);
    let categories = Array.from(holdCategories);
    categories = ["all", ...categories];
    return categories;
}

export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories: getCaty(props.courses.edges)
        }
    }

    catyClicked = (category) => {
        let keepItSafe = [...this.state.courses];
        if(category === "all"){
            this.setState( () => {
                return {mycourses: keepItSafe};
            })
        }else{
            let holdme = keepItSafe.filter( (edges) => edges.node.category === category)
            this.setState( () => {
                return { mycourses: holdme };
            })
        }
    }

    render() {
        return (
            <section className="py-5"> 
                <div className="container">
                    <Heading title="Courses"/>
                    <div className="row my-3">
                        <div className="col-10 mx-auto text-center">
                            {
                                this.state.mycategories.map( (category, index) => {
                                    return (
                                        <button 
                                            key={index} 
                                            type="button" 
                                            className="btn btn-info m-3 px-3"
                                            onClick={ () => {
                                                this.catyClicked(category)
                                            }}
                                        >
                                            {category}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row">
                        {this.state.mycourses.map( (edges) => {
                            return (
                                <div
                                Key={edges.node.id}
                                className="col-11 col-md-6 d-flex mx-auto my-3">
                                    <Img fixed={edges.node.image.fixed}/>
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0">{edges.node.title}</h6>
                                            <h6 className="mb-0 text-success">{edges.node.price}</h6>
                                        </div>
                                        <p className="text-muted">
                                            <small>{edges.node.description.description}</small>
                                        </p>
                                        <button 
                                        data-item-id={edges.node.id}
                                        data-item-name={edges.node.title}
                                        data-item-price={edges.node.price}
                                        data-item-url="https://myfirstecommercewebsite.netlify.app/"
                                        data-item-image={edges.node.image.fixed.src}
                                        className="btn btn-warning snipcart-add-item">
                                            Join Now
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>                
            </section>
        )
    }
}
