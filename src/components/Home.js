import React from 'react'
import { products} from '../assets/assets'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Home() {
    return (
        <div>

<Navbar className="bg-body-tertiary" style={{backgroundColor:'black'}}>
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:'bolder'}}>APPLE</Navbar.Brand>
        <Navbar.Toggle />
        
      </Container>
    </Navbar>
        <div className='mt-4  grid grid-cols-2 grid-rows-3 gap-4 w-screen'>
            
            {
                products.map(i=>(
                    <div className='bg-quaternary h-[calc(100vh-48px)]'>
                <div className='flex flex-col items-center space-y-2 w-full mt-12 mb-6'>
                    <div className='flex flex-col items-center space-y-2'>
                        <h3 className='text-4xl font-bold' >
                            {i.name}
                        </h3>
                        <h5 className='text-xl font-normal'>
                           {i.discription}
                        </h5>
                        <p>{i.details}</p>
                    </div>
                    <div className='w-1/3 flex flex-col justify-between items-center'>
                        
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                BUY
                            </button>
                       
                    </div>
                    <div>
                    <img className='object-contain w-full h-full' style={{height:'500px'}} src={i.image} alt="iphone15" />
                    </div>
                    
                </div>
            </div>
            
            
                ))
                
            }
            


        </div>
        </div>
    )
}

export default Home