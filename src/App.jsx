// Components
import SearchNav from "./components/SearchNav"


export default function App() {
  return (
    <>

    <SearchNav />

    {/* <!-- Recomendations Section --> */}
    <section id="Sec-Recomendations" class="relative py-4">
        <h3 class="text-red text-3xl font-bold m-4">Recomendaciones</h3>

        <div id="default-carousel" className="m-2 p-4 whitespace-nowrap overflow-x-auto overscroll-x-contain flex-none " >

            <div className="rounded-lg h-72 w-60 mx-4 shadow-lg overflow-hidden inline-block hover:cursor-pointer">
                <div className="Card">
                        <img src="./img/new_York.jpg" alt="" />
                </div>
                <div class="container-text bg-green h-2/5 p-4">
                    <h4 className="text-black font-bold text-xl">New York</h4>
                    <p className="text-black">Beautiful Landscapes</p>
                </div>
            </div>

            <div class=" rounded-lg h-72 w-60 mx-4 shadow-lg overflow-hidden inline-block hover:cursor-pointer">
                <div class="Card">
                    <img src="./img/sanFrancisco.jpg" alt="" />
                </div>
                <div class="container-tex h-2/5 p-4">
                    <h4 class="font-bold text-blue text-xl">San Francisco</h4>
                    <p class="text-blue">Concrete Jungle</p>
                </div>
            </div>
            
            <div class=" rounded-lg h-72 w-60 mx-4 shadow-lg overflow-hidden inline-block hover:cursor-pointer">
                <div class="Card">
                        <img src="./img/singapur.jpg" alt="" />
                </div>
                <div className="container-text bg-green h-2/5 p-4">
                    <h4 className="text-black font-bold text-xl">Singapur</h4>
                    <p className="text-black">A break from the world</p>
                </div>
            </div>

            <div className=" rounded-lg h-72 w-60 mx-4 shadow-lg overflow-hidden inline-block hover:cursor-pointer">
                <div className="Card">
                    <img src="./img/faro.jpg" alt="" />
                </div>
                <div className="container-text h-2/5 p-4">
                    <h4 className="text-blue font-bold text-xl">new zelanda</h4>
                    <p className="text-blue">The Vibrant City</p>
                </div>
            </div>

            <div className=" rounded-lg h-72 w-60 mx-4 shadow-lg overflow-hidden inline-block hover:cursor-pointer">
                <div className="Card">
                    <img src="./img/paris.jpg" alt="" />
                </div>
                <div className="container-text bg-green h-2/5 p-4 whitespace-normal">
                    <h4 className="text-white font-bold text-xl">paris</h4>
                    <p className="text-white">Town Between the Mountains</p>
                </div>
            </div>

            <div className=" rounded-lg h-72 w-60 mx-4 shadow-lg overflow-hidden inline-block hover:cursor-pointer">
                <div className="Card">
                    <img src="./img/new_York.jpg" alt="" />
                </div>
                <div className="container-text h-2/5 p-4">
                    <h4 className="text-blue font-bold text-xl">Berlin</h4>
                    <p className="text-blue">City of Artists</p>
                </div>
            </div>


        </div>
    </section>


    {/* <!-- Trending Section --> */}
    <section id="Sec-Trending">
        <h3 className="text-red text-3xl font-bold p-6">Tendencia</h3>

        <div className="px-4 md:px-10">
            <div className="my-5 bg-[url('../public/img/chicago.jpg')] bg-cover bg-bottom rounded-lg h-[30rem] p-10">
                <div className="text-white font-bold text-left md:text-right">
                    <h3 className="text-3xl drop-shadow-lg">Chicago</h3>
                    <p className="text-xl drop-shadow-lg">2 rooms, bathroom and kitchen.</p>

                </div>
            </div>

            <div class="grid grid-rows-3 md:grid-rows-4 md:grid-cols-5 gap-5 md:h-[40rem]">
    
                <div className="rounded-lg bg-[url('../public/img/abudabi.jpg')] bg-cover bg-center h-[28rem] md:h-auto row-span-1 md:col-span-2 md:row-span-4 p-10">
                    <div className="text-white font-bold text-left md:text-right">
                        <h3 className="text-3xl drop-shadow-lg">Paises Arabes</h3>
                        <p className="text-xl drop-shadow-lg">4 rooms, 3 bathrooms, kitchen and private pool.</p>
                    </div>
                </div>
    
                <div className="rounded-lg bg-[url('../public/img/moscu.jpg')] bg-cover bg-bottom row-span-1 md:col-span-3 md:row-span-2 p-10">
                    <div className="text-white font-bold text-left md:text-right">
                        <h3 className="text-3xl drop-shadow-lg">Moscu</h3>
                        <p className="text-xl drop-shadow-lg">3 rooms, 2 bathrooms, kitchen and amazing sea view.</p>
                    </div>
                </div>
    
                <div className="rounded-lg bg-[url('../public/img/paisaje.jpg')] bg-cover bg-bottom  row-span-1 md:col-span-3 md:row-span-2 p-10">
                    <div className="text-white font-bold text-left md:text-right">
                        <h3 className="text-3xl drop-shadow-lg">Australia</h3>
                        <p className="text-xl drop-shadow-lg">2 rooms, 2 bathrooms, kitchen and private pool</p>
                    </div>
                </div>
    
            </div>

        </div>
    </section>

    <br />

    {/* <!-- Footer --> */}
    <footer>
        <h3 class="m-6 text-2xl font-bold">About Us</h3>
        <ul class="mx-10">
            <li><a href="#" class="hover:text-red font-semibold">Investors</a></li>
            <li><a href="#" class="hover:text-red font-semibold">Jobs</a></li>
            <li><a href="#" class="hover:text-red font-semibold">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-red font-semibold">Terms and Conditions</a></li>
            <li><a href="#" class="hover:text-red font-semibold">Platzi Travel.Inc</a></li>
            <li><a href="#" class="hover:text-red font-semibold">Follow Us</a></li>
        </ul>
        <div class="flex flex-row justify-between my-4 mx-10 w-24">
            <a href="#">
              <img src="" alt="" />
              </a>
            <a href="#">
              <img src="" alt="" />
              </a>
        </div>
    </footer>

    </>
  )
}
