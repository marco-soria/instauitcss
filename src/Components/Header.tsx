import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { HomeIcon } from "@heroicons/react/24/outline"
import { PlusCircleIcon } from "@heroicons/react/24/outline"

export const Header = () => {
  return (
    <div className="sticky top-0 border-b shadow-sm bg-white z-30">
      

      <div
        className="flex justify-between h-24 items-center mx-4 xl:max-w-6xl xl:mx-auto"
      >
        

        <div className="cursor-pointer w-24 hidden lg:inline-grid">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            alt="instagram-logo"
          />
        </div>
        <div className="cursor-pointer w-10 lg:hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
            alt="instagram-logo"
          />
        </div>

        

        <div className="relative mt-1">
          <div >
            <MagnifyingGlassIcon 
            className="absolute top-2 left-2 h-5 w-5 text-gray-500"
            stroke-width="2"
            />
          </div>
          <input
            placeholder="Search"
            className="pl-10 rounded-md focus:ring-black focus:border-black bg-gray-50 border-gray-500 text-sm"
            type="text"
          />
        </div>

       
        <div className="flex space-x-4 items-center">
          <HomeIcon 
          className="h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex"
          stroke-width="2" 
          />
          
          <PlusCircleIcon 
          className="h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" 
          stroke-width="2"
          />
          
          <img
            className="h-10 rounded-full cursor-pointer"
            src="/satorugojo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
