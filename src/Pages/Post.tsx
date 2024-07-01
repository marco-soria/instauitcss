import { BookmarkIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid"
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"
import { HeartIcon } from "@heroicons/react/24/outline"
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { FaceSmileIcon } from "@heroicons/react/24/outline"


export const Post = () => {
  return (
    <div>
    <div className="border my-7 bg-white rounded-md">
          
          <div className="flex items-center p-5">
            <img
              className="h-12 rounded-full border p-1 mr-3"
              src="/satorugojo.jpg"
              alt="user-image"
            />
            <p className="flex-1 font-bold">SatoruGojo</p>
            <EllipsisHorizontalIcon 
            className="h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
            stroke-width="2"
             />
            
          </div>

          

          <img
            className="w-full object-cover"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            alt=""
          />

          

          <div className="flex justify-between px-4 pt-4">
            <div className="flex space-x-4">
              <HeartIcon 
              stroke-width="2"
              className="h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" 
              />
              
              <ChatBubbleOvalLeftEllipsisIcon 
              className="h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" 
              stroke-width="2"
              />
              
              <PaperAirplaneIcon 
              className="h-6 w-6 -rotate-45 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" 
              stroke-width="2"
              />
             
            </div>
            <BookmarkIcon 
            className="h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
            stroke-width="2"
             />
            
          </div>

          

          

          <p className="p-5 truncate">
            <span className="font-bold mr-2">SatoruGojo</span>
            nice picture!
          </p>

          
          <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=1"
                alt="user-image"
              />
              <p className="font-semibold">RyanwatQueem</p>
              <p className="flex-1 truncate">nice</p>
              <p>2 hours ago</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=2"
                alt="user-image"
              />
              <p className="font-semibold">Vicenary</p>
              <p className="flex-1 truncate">amazing!</p>
              <p>5 hours ago</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=3"
                alt="user-image"
              />
              <p className="font-semibold">Stibialism</p>
              <p className="flex-1 truncate">great!</p>
              <p>2 days ago</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=4"
                alt="user-image"
              />
              <p className="font-semibold">Ubiquarian</p>
              <p className="flex-1 truncate">nice pic!</p>
              <p>1 month ago</p>
            </div>
          </div>

          

          <form className="flex items-center p-4">
          <FaceSmileIcon
              className="h-7 w-7"
              stroke-width="2"
            />

            <input
              className="border-none flex-1 focus:ring-0"
              type="text"
              placeholder="Enter your comment"
            />
            <button 
            className="font-bold text-blue-400"
            onClick={(e) => e.preventDefault()}
            >Post</button>
          </form>
        </div>
        <div className="border my-7 bg-white rounded-md">
          
          <div className="flex items-center p-5">
            <img
              className="h-12 rounded-full border p-1 mr-3"
              src="/satorugojo.jpg"
              alt="user-image"
            />
            <p className="flex-1 font-bold">SatoruGojo</p>
            <EllipsisHorizontalIcon 
            className="h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" 
            stroke-width="2"
            />
          </div>

          

          <img
            className="w-full object-cover"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            alt=""
          />

          

          <div className="flex justify-between px-4 pt-4">
            <div className="flex space-x-4">
              <HeartIconSolid 
              className=" h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
              fill="#d62626"
              stroke-width="2"
              />
              
              <ChatBubbleOvalLeftEllipsisIcon 
              className="h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" 
              stroke-width="2"
              />
              
              <PaperAirplaneIcon 
              className="h-6 w-6 -rotate-45 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" 
              stroke-width="2"/>
            </div>
            <BookmarkIconSolid 
            className="h-6 w-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" 
            stroke-width="2"
            />
            
          </div>

          

          

          <p className="p-5 truncate">
            <span className="font-bold">2 likes</span>
            <br />
            <span className="font-bold mr-2">SatoruGojo</span>
            nice picture!
          </p>

          

          <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=1"
                alt="user-image"
              />
              <p className="font-semibold">RyanwatQueem</p>
              <p className="flex-1 truncate">nice</p>
              <p>2 hours ago</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=2"
                alt="user-image"
              />
              <p className="font-semibold">Vicenary</p>
              <p className="flex-1 truncate">amazing!</p>
              <p>5 hours ago</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=3"
                alt="user-image"
              />
              <p className="font-semibold">Stibialism</p>
              <p className="flex-1 truncate">great!</p>
              <p>2 days ago</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src="https://i.pravatar.cc/150?img=4"
                alt="user-image"
              />
              <p className="font-semibold">Ubiquarian</p>
              <p className="flex-1 truncate">nice pic!</p>
              <p>1 month ago</p>
            </div>
          </div>

          

          <form className="flex items-center p-4">
            <FaceSmileIcon
              className="h-7 w-7"
              stroke-width="2"
            />
           

            <input
              className="border-none flex-1 focus:ring-0"
              type="text"
              placeholder="Enter your comment"
            />
            <button 
            className="font-bold text-blue-400"
            onClick={(e) => e.preventDefault()}

            >Post</button>
          </form>
        </div>
        </div>
  )
}
