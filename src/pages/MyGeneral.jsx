import SearchNav from "../components/Search/SearchNav"

function MyGeneral() {
  return (
    <>
    <section id="Sec-Recomendations" className=" w-full h-screen relative py-4">
                <SearchNav/>

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
                            <img src="./img/arquitectura.jpg" alt="" />
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
    </>
  );
}

export default MyGeneral;