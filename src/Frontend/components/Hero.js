import { Container} from 'react-bootstrap'

export function Hero () {
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
                        <div className='text-[#009E7E] bg-white mt-[10%] px-5 pt-1 font-semibold' style={{
                            border: 'none',
                            borderRadius: '16px',
                            display: 'inline-block',
                            height: '36px',
                            textTransform: 'uppercase'
            
                        }} >Welcome to Divine Care Pharmaceuticals</div>
                        <h1 className="font-bold text-7xl text-white mb-7">Our only priority is to<br />keep you healthy</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ut elit tellus, luctus nec ullamcorper <br />mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <a href="/">
                        <div className='text-center bg-white text-[#009E7E] px-8 pt-2' style={{
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            display: 'inline-block',
                            height: '43px',
                            margin: '0 auto',
                            transform: 'translate(0, -7%)',
                            zIndex: 1

                        }}>Discover More</div>
                    </a>
                </Container>
                
                
            </section>
    )
}