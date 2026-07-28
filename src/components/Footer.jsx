
const Footer = () => {
  return (
    <div className=" h-64">
        <footer className="rounded-lg m-4" dir="ltr">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="./" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/E-favicon.ico" className="h-8 ml-4" alt="portfolio logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Portfolio</span>
                    </a>
                    <ul className="flex flex-wrap item-center mb-6 text-sm font-medium text-gray-200 mt-6">
                        <li><a href="/main" className="hover:underline me-4 md:me-6">MainPage</a></li>
                        <li><a href="./" className="hover:underline me-4 md:me-6">Home</a></li>
                        <li><a href="/about" className="hover:underline me-4 md:me-6">About Me</a></li>
                    </ul>
                </div>
                <hr  className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <span className="text-white text-lg mx-auto">Design and Development : Elham Barzeghar</span>
            </div>
        </footer>
    </div>
  )
}

export default Footer