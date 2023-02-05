import { testimonials } from '../components/data'
import { Container } from 'react-bootstrap'

export function Testimonial () {
    return (
        <section class="section" style={{textAlign: 'center'}}>
                <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 94, 78, 0.7)', /* adjust this value to change the opacity */
                opacity: 0.7
            }}></div>
                <Container className='text-center'>
                    <div className='' style={{
                        transform: 'translate(0, -7%)',
                        zIndex: 1

                    }}>
                        <div className='text-white  mt-[10%] px-5 pt-1 font-semibold' style={{
                            
                            display: 'inline-block',
                            height: '36px',
                            textTransform: 'uppercase'
            
                        }} >Testimonial</div>
                        <h1 className="font-bold text-5xl text-white mb-7">What they say about us</h1>
                        <p className='text-white mb-[3%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ut elit tellus, luctus nec ullamcorper <br />mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div className='flex flex-wrap'>
                        {testimonials.map((testimonial, index) => (
                            <div className='ml-[4%]' key={index}>
                                <div className={`bg-white shadow-lg p-10 rounded-[8px] testimonial-card testimonial-${index}`}>
                                    <p className='leading-relaxed mb-6 w-[300px] text-slate-700 text-xl text-center' style={{wordWrap: 'break-word'}}>{testimonial.quote}</p>
                                    <div className='flex items-center'>
                                        <img alt='testimonial' src={testimonial.image} className='w-10 rounded-full flex-shrink-0 object-cover object-center' />
                                        <span className='flex-grow flex flex-col'>
                                            <span className='title-font text-lg font-medium text-[#009E7E]'>{testimonial.name}</span>
                                            <span className='text-gray-500 text-sm capitalize'>{testimonial.job}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
                
                
            </section>
    )
}