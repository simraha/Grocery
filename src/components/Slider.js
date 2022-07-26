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
                    <div class="dots" onClick={myFunction()}>
                    </div>
                </div>
            </section>
        </>
    )
}

// function
function myFunction() {
    var slider = document.getElementById('slider'),
        sliderItems = document.getElementById('slides'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        dot = document.querySelector('.dots');
    function slide(wrapper, items, prev, next) {
        var posX1 = 0,
            posX2 = 0,
            posInitial,
            posFinal,
            threshold = 100,
            slides = items.getElementsByClassName('slide'),
            slidesLength = slides.length,
            slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
            index = 0,
            allowShift = true;
        wrapper.classList.add('loaded');
        for (var j = 0; j < slidesLength; j++) {
            var dotItem = document.createElement('i');
            dotItem.dataset.id = j;
            dot.appendChild(dotItem);
        }
        document.querySelector('.dots i:first-child').classList.add('active');
        function appendAfter(n, original, appendTo) {
            for (var i = 0; i < n; i++) {
                var clone = original[i].cloneNode(true);
                appendTo.appendChild(clone);
            }
        }
        appendAfter(4, slides, items);
        items.insertBefore(slides[slidesLength - 1].cloneNode(true), slides[0]);
        // Click events
        prev.addEventListener('click', function () { shiftSlide(-1) });
        next.addEventListener('click', function () { shiftSlide(1) });
        // Transition events
        items.addEventListener('transitionend', checkIndex);
        function dragStart(e) {
            e = e || window.event;
            e.preventDefault();
            posInitial = items.offsetLeft;

            if (e.type == 'touchstart') {
                posX1 = e.touches[0].clientX;
            } else {
                posX1 = e.clientX;
                document.onmouseup = dragEnd;
                document.onmousemove = dragAction;
            }
        }
        function dragAction(e) {
            e = e || window.event;
            if (e.type == 'touchmove') {
                posX2 = posX1 - e.touches[0].clientX;
                posX1 = e.touches[0].clientX;
            } else {
                posX2 = posX1 - e.clientX;
                posX1 = e.clientX;
            }
            items.style.left = (items.offsetLeft - posX2) + "px";
        }
        function dragEnd(e) {
            posFinal = items.offsetLeft;
            if (posFinal - posInitial < -threshold) {
                shiftSlide(1, 'drag');
            } else if (posFinal - posInitial > threshold) {
                shiftSlide(-1, 'drag');
            } else {
                items.style.left = (posInitial) + "px";
            }
            document.onmouseup = null;
            document.onmousemove = null;
        }
        function shiftSlide(dir, action) {
            items.classList.add('shifting');
            if (allowShift) {
                if (!action) { posInitial = items.offsetLeft; }
                if (dir == 1) {
                    items.style.left = (posInitial - slideSize) + "px";
                    index++;
                } else if (dir == -1) {
                    items.style.left = (posInitial + slideSize) + "px";
                    index--;
                }

            };
            allowShift = false;
        }
        function checkIndex() {
            items.classList.remove('shifting');
            if (index == -1) {
                items.style.left = -(slidesLength * slideSize) + "px";
                index = slidesLength - 1;
            }

            if (index == slidesLength) {
                items.style.left = -(1 * slideSize) + "px";
                index = 0;
            }
            deleteDots();
            dot.children[index].classList.add('active');
            allowShift = true;
        }
        dot.addEventListener('click', function (e) {
            if (e.target.tagName.toLowerCase() !== 'i') return;
            checkDots(e);
        });
        function checkDots(e) {
            items.classList.add('shifting');
            deleteDots();
            e.target.classList.add('active');
            items.style.left = -(1 * (slideSize * e.target.dataset.id)) + "px";
            index = e.target.dataset.id;
        }
        function deleteDots(e) {
            var dotElements = document.querySelectorAll('.dots i');
            for (var i = 0; i < dotElements.length; i++) {
                dotElements[i].classList.remove('active');
            }
        }
    }
    slide(slider, sliderItems, prev, next);
}

export default Slider

