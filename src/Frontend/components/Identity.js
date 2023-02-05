export function Identity () {
    return (
        <section className='mt-[10%] mx-12'>
                <div className="flex justify-between">
                    <div>
                        <p className='text-[#009E7E] uppercase font-medium mb-8'>Who we are</p>
                        <h2 className='text-5xl font-bold text-slate-700 mb-4'>With us, expect more<br /> than just a pharmacy.</h2>
                        <p>Erat litora dignissim consectetur sit mollis. Placerat gravida dolor<br />
                            integer mollis habitant felis consectetur lorem platea ac hendrerit.<br />
                            Vitae platea massa consectetuer tristique vivamus vulputate<br />
                            suspendisse blandit.
                        </p>
                    </div>
                    <div>
                        <img src='/images/pharmacists.jpg' alt='Two pharmacists talking about something' className="" style={{
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            height: '500px',
                            width: '700px',
                            borderRadius: '8px'
                        }}/>
                    </div>
                </div>
            </section>
    )
}