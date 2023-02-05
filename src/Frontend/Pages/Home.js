import {Header} from '../components/Header'
import { Hero } from '../components/Hero'

import { Identity } from '../components/Identity'
import { Latest } from '../components/Latest'
import { Choose } from '../components/Choose'
import { Testimonial } from '../components/Testimonial'
import { Footer } from '../components/Footer'
// import { ContactForm } from '../components/ContactForm'


export function Home () {
    return (
        <>
            <Header />
            <Hero /> 
            <Identity />
            <Latest />
            <Choose />
            <Testimonial />
            <Footer />
            
        </>
        
        
    )
}



