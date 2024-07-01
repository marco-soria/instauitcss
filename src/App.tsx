import { Header } from "./Components/Header"
import { HomePage } from "./Pages/HomePage"


function App() {
  

  return (
    <>
      <Header />
      <HomePage />
      
    </>
  )
}

// function App() {
  

//   return (
//     <>
//       <Header />
//       <main className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-6xl">
//         <section className="md:col-span-2">
//           <Stories />
//           <Post />
//         </section>
//         <section className="hidden md:inline-grid md:col-span-1">
//           <MiniProfile />
//           <Suggestions />
//         </section>
//       </main>
//     </>
//   )
// }

export default App
