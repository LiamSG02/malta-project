import React from "react";
import './header.css'

export const Header = () => {
    return (
        <section class="block container block-domain">
            <div class="input-group">
                <input 
                type="text" 
                class="input" 
                placeholder="Where to?"
                />
                <button class="btn btn--color">Search</button>
            </div>
        </section>
    )
}

export default Header