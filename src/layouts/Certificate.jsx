import React from 'react'
import { Certificates } from '../data/informations'

export default function Certificate() {
    return (
        <section id="certificates">
            <h2 className='heading-large text-center text-uppercase'>Sertifikalar</h2>
            <div className='container'>
                <div className='items'>
                    {
                        Certificates.map(certificate => (
                            <div className='item' key={certificate.id}>
                                <h4 className='heading-small'>{certificate.name}</h4>
                                <h4>{certificate.description}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
