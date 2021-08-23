import { useRouter } from 'next/dist/client/router'
import requests from '../utils/request'


function Nav() {

    const router = useRouter();
    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm-x-20 overflow-x-scroll scrollbar-hide'>
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 
                    key={key}
                    onClick={()=> router.push(`/?genre=${key}`)} 
                    className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white last:pr-24 active:text-red-600'>{title.toUpperCase()}</h2>
                ))}
            </div>

            <div className='abolute top-0 right-0 bg-gradient-to-l from primary h-10 w-1/12'/>
        </nav>
    )
}

export default Nav