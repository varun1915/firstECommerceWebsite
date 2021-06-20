import React from 'react'

export default function TeamPhotoSection() {
    return (
        <div className="row">
            <div className="col-10 col-sm-10 mx-auto">
                <div class="card-group">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Katherine</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Luthor</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://i.pinimg.com/236x/b7/c4/b2/b7c4b2e5e5e3cee85616d57502a2f7a2.jpg" 
                        class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Sophie</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
