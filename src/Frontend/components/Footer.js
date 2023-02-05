import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export function Footer () {
    return(
        <section className=''>
            <div className='flex justify-between m-[4%]'>
                <div>
                    <h2 className='font-bold text-xl mb-[2%]'>Divine Care Pharmaceuticals</h2>
                    <p className='text-lg text-slate-500 w-[300px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                    luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div>
                    <h2 className='font-bold text-xl mb-[2%]'>Get in touch</h2>
                    <ul>
                        <li className='text-lg text-slate-500 w-[400px]'>4, Adeyemi Alao str. community busstop Oke-ira, Ogba.</li>
                        <li className='text-lg text-slate-500'>Lagos-Nigeria</li>
                        <li className='text-lg text-slate-500'><FontAwesomeIcon icon={faEnvelopeOpenText} className='text-[#009E7E] mr-[3%]' />roselineonyenuchi78@gmail.com</li>
                        <li className='text-lg text-slate-500'><FontAwesomeIcon icon={faPhoneAlt} className='text-[#009E7E] mr-[3%]' />+2348108085857</li>
                    </ul>
                </div>
                
            </div>
            <div className='mx-4' style={{
                    borderTop: '1px solid lightgray',
                    width: '95%'
                }}>
                    <h2>Hi there</h2>
            </div>
        </section>
    )
}