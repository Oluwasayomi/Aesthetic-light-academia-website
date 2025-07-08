export default function App() {
  return (
   <main>

    <p>Choose one to experience a different Light Academia inspiration</p>

      <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">

          <div className="absolute backface-hidden border-2 w-full h-full">
          <img src="src/assets/Light Academia.jpg" alt="Light academia pic" className="w-full h-full"/>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
            <div className="text-center flex flex-col item-center justify-center h-full">
              <h1>Light Academia inspiration</h1>
              <p className="my-2">9.9 Rating</p>
              <p> 
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Ullam repellendus quis 
                ab corrupti saepe sit corporis esse! 
                Iste quibusdam nesciunt itaque, 
                quisquam aspernatur quas ex libero 
                eaque voluptas inventore eius.
              </p>
              <button className="bg-pink-400 px-6 py-2 font-semibold text-white rounded-full 
              absolute left-1/2 transform -translate-x-1/2 -bottom-5 delay-500 duration-1000 group-hover:bottom-5 scale-0
              group-hover:scale-125">
              Click now</button>
            </div>
          </div>

        </div>
      </div>

    <h4>For all my light academia girlies</h4>
  
   </main>
  )
}