import React from "react";
import './header.css'
import {BsSearch} from 'react-icons/bs';

export const Header = () => {
    return (
        <section class="block container block-domain">
            <header class="block__header">
                <h2>Enter your destination</h2>
                <p>Find exciting activities to explore!</p>
            </header>    
                <div class="input-group">
                    <input 
                    type="text" 
                    class="input" 
                    placeholder="Where to?"
                    />
                    <button class="btn btn--color">Search  <BsSearch/> </button>
                </div>
        </section>
    )
}

export default Header