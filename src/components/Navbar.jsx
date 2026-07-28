
import {useState} from 'react'
import {CiMenuFries} from "react-icons/ci";

const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    const responsive = () => {

        // console.log('button clicked')
        setMobile(!mobile)
    }
    return (
        <div className="mb-10">
            <nav className="bg-white border-gray-300 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="./" className="flex items-center gap-3 space-x-3 rtl:space-x-reverse mx-auto">
                        <img src="/E-favicon.ico" className="h-8" alt="portfolio logo"/>
                        <span className=" text-2xl font-semibold"> Portfolio </span>
                    </a>
                    <button onClick={responsive} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200">
                        <span className="sr-only">Menu</span>
                        <CiMenuFries className="text-4xl font-extrabold" />
                    </button>
                    {mobile  ? <div className="w-full md:block md:w-auto">
                                <ul className="flex flex-col gap-5 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-500 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                                    <li><a className="block py-2 px-3 text-white rounded md:bg-transparent md:text-indigo-700 md:p-0 hover:text-blue-400" href="/main"> MainPage</a></li>
                                    <li><a className="block py-2 px-3 text-white rounded md:bg-transparent md:text-indigo-700 md:p-0 hover:text-blue-400" href="./">Home</a></li>
                                    <li><a className="block py-2 px-3 text-white rounded md:bg-transparent md:text-indigo-700 md:p-0 hover:text-blue-400" href="/about">About Me</a></li>
                                </ul>
                        </div>
                        :

                                <div className="hidden w-full md:block md:w-auto">
                                    <ul className="flex flex-col gap-5 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                                        <li><a className="block py-2 px-3 text-white rounded md:bg-transparent md:text-indigo-700 md:p-0 text-base transition-transform  duration-200 hover:scale-125 hover:text-blue-400" href="/main"> MainPage</a></li>
                                        <li><a className="block py-2 px-3 text-white rounded md:bg-transparent md:text-indigo-700 md:p-0 text-base transition-transform  duration-200 hover:scale-125 hover:text-blue-400" href="./">Home</a></li>
                                        <li><a className="block py-2 px-3 text-white rounded md:bg-transparent md:text-indigo-700 md:p-0 text-base transition-transform  duration-200 hover:scale-125 hover:text-blue-400" href="/about">About Me</a></li>

                                    </ul>
                                </div>

                    }
                </div>
            </nav>
        </div>
    )
}
export default Navbar;