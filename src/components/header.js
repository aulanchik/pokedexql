import React from 'react'

const Header = ({ children }) => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__title">
                    <h1>{children}</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;