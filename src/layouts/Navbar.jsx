import React from 'react'

export default function Navbar() {
    return (
        <header className='bg-dark-blue'>
            <div className='container'>
                <nav id="navbar">
                    <h2 className='heading-small'>Taylan ALPARSLAN</h2>
                    <ul>
                        <li><a href='#personalInfo'>Kişisel Bilgiler</a></li>
                        <li><a href="#projects">Projeler</a></li>
                        <li><a href='#certificates'>Sertifikalar</a></li>
                        <li><a href='#contacts'>Bana Ulaşın</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
