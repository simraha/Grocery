import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';

function Slider() {
    return (
        <>
            <section id="sliders">
                <div id="slider" class="slider">
                    <div class="wrapper">
                        <div id="slides" class="slides">
                            <span class="slide">
                                <img src="https://images.unsplash.com/photo-1533499513792-8c4483a36c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80
                  " alt="produce" />
                                <div class="category-text">Produce</div>
                            </span>
                            <span class="slide">
                                <img src="https://images.unsplash.com/photo-1590091626142-167ee3798ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RlYWt8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60
                  " alt="meat" />
                                <div class="category-text">Meat</div>
                            </span>
                            <span class="slide">
                                <img src="https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlsa3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
                  " alt="milk" />
                                <div class="category-text">Milk</div>
                            </span>
                            <span class="slide">
                                <img src="https://images.unsplash.com/photo-1534072700421-3100bd80c44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60
                  " alt="canned-goods" />
                                <div class="category-text">Canned Foods</div>
                            </span>
                            <span class="slide">
                                <img src="https://images.unsplash.com/photo-1629282957386-1f55a760fc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNlYWZvb2R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60
                  " alt="seafood" />
                                <div class="category-text">Seafood</div>
                            </span>
                            <span class="slide">
                                <img src="https://images.unsplash.com/photo-1616003472653-c24aa160047c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFrZXJ5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60
                  " alt="bakery" />
                                <div class="category-text">Various breads</div>
                            </span>
                            <span class="slide">
                                <img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
                  " alt="eggs" />
                                <div class="category-text">Eggs</div>
                            </span>
                        </div>
                    </div>
                    <a id="prev" class="control prev"></a>
                    <a id="next" class="control next"></a>
                    <div class="dots">

                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider