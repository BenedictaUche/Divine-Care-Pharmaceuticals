import { products } from '../components/data'
import { Button} from 'react-bootstrap'

export function Latest () {
    return (
        <section className='mt-[10%] mx-12'>
                <h2 class='latest' className="font-bold text-4xl text-slate-700">Latest products</h2>
                <div className='flex flex-row flex-wrap m-4'>
                    {products.map((product) => (
                        <a href={product.link} key={product.image} className=''>
                            <div className='flex flex-col'style={{margin: '2px'}}>
                                <img alt='Pharmaceutical gallery' className='object-cover object-center h-40 w-40' src={product.image} style={{
                                    flexBasis: '20%',
                                    margin: '5px'
                                }} />
                                <div className=''>
                                    <h2 className="w-60" style={{wordWrap: 'break-word'}}>{product.description}</h2>
                                    <p>{product.oldPrice}</p>
                                    <p>{product.price}</p>
                                </div>
                                <Button className='' style={{}}>Add to cart</Button>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
    )
}