import { Stories } from "./Stories"
import { Post } from "./Post"
import { MiniProfile } from "./MiniProfile"
import { Suggestions } from "./Suggestions"

export const HomePage = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-6xl">
        <section className="md:col-span-2">
          <Stories />
          <Post />
        </section>
        <section className="hidden md:inline-grid md:col-span-1">
          <div className="fixed w-[380px] flex flex-col">
          <MiniProfile />
          <Suggestions />
          </div>
        </section>
      </main>
  )
}
