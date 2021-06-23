import React from 'react'

import Heading from '../Reusable/Heading'

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/f/mgerygpk" method="POST">
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="mobile" id="mobile" placeholder="Your Mobile"/>
                    </div>
                    <div className="form-group">
                        <textarea type="text" className="form-control" name="description" id="description" placeholder="Your Message"/>
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>
        </section>
    )
}
