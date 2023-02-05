import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faHeart, faTag } from '@fortawesome/free-solid-svg-icons'

export function Choose () {
    return (
        <section className='mt-[10%] m-[6%]'>
                <div className='flex'>
                    <div>
                        <p className='text-[#009E7E] uppercase font-medium mb-5'>Why choose us</p>
                        <h1 className='text-slate-700 text-4xl font-bold'>Best services available for<br />the best customers</h1>
                        <img src='./images/illustration.png' alt="Customer png" />
                    </div>
                    <div class='card' className='flex flex-col'>
                        <div class='card1' className='flex bg-white shadow-lg px-[3%] py-[5%] rounded-[8px]'>
                            <FontAwesomeIcon icon={faHeart} className='text-[#009E7E] text-3xl mr-[5%] mt-[2%]' />
                            <div>
                                <h2 className='text-slate-700 text-2xl font-bold'>Honesty & transparency</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                        <div class='card1' className='flex bg-white shadow-lg mt-[5%] px-[3%] py-[5%] rounded-[8px]'>
                            <FontAwesomeIcon icon={faTag} className='text-[#009E7E] text-3xl mr-[5%] mt-[2%]' />
                            <div>
                                <h2 className='text-slate-700 text-2xl font-bold'>Extra Discount</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                        <div class='card1' className='flex bg-white shadow-lg mt-[5%] px-[3%] py-[5%] rounded-[8px]'>
                            <FontAwesomeIcon icon={faHeadset} className='text-[#009E7E] text-3xl mr-[5%] mt-[2%]' />
                            <div>
                                <h2 className='text-slate-700 text-2xl font-bold'>24/7 Premium Support</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
    )
}