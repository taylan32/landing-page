import React from 'react'
import '../css/mobile.css'
import '../css/global.css'
import '../css/main.css'
import Navbar from './Navbar'
import PersonelInfo from './PersonelInfo'
import Projects from './Projects'
import Certificate from './Certificate'
import Contact from './Contact'

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <PersonelInfo />
            <Projects />
            <Certificate />
            <Contact />
        </div>
    )
}
