import React from 'react';
import '../App.css';

export default function NewsLetter() {
    return (
        <>
            <section class="newsletter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="content">
                                <h2><b>GET THE LATEST NEWS & OFFERS</b></h2>
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Enter your email" />
                                    <span class="input-group-btn">
                                        <button class="btn" type="submit">Subscribe Now</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
