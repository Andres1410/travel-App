import SearchNav from "../components/Search/SearchNav"

function MyGeneral() {
  return (
    <>
    <section id="Sec-Recomendations" className=" w-full h-screen relative py-4 font-monserrat ">
                <SearchNav/>

                <h3 class="text-red text-3xl font-bold m-4">Recomendaciones</h3>

                <div id="default-carousel" className="m-2 p-4 whitespace-nowrap overflow-x-auto overscroll-x-contain flex-none " >

                    <div className="rounded-lg h-72 w-60 mx-4 shadow-lg inline-block hover:cursor-pointer overflow-y-hidden">
                        <div className="Card">
                                <img src="./img/new_York.jpg" alt="" />
                        </div>
                        <div class="container-text bg-green h-2/5 p-4">
                            <h4 className="text-black font-bold text-xl">New York</h4>
                            <p className="text-black">Beautiful Landscapes</p>
                        </div>
                    </div>

                    <div class=" rounded-lg h-72 w-60 mx-4 shadow-lg  inline-block hover:cursor-pointer  overflow-y-hidden">
                        <div class="Card">
                            <img src="./img/sanFrancisco.jpg" alt="" />
                        </div>
                        <div class="container-tex h-2/5 p-4">
                            <h4 class="font-bold text-blue text-xl">San Francisco</h4>
                            <p class="text-blue">Concrete Jungle</p>
                        </div>
                    </div>
                    
                    <div class=" rounded-lg h-72 w-60 mx-4 shadow-lg  inline-block hover:cursor-pointer overflow-y-hidden">
                        <div class="Card">
                                <img src="./img/singapur.jpg" alt="" />
                        </div>
                        <div className="container-text bg-green h-2/5 p-4">
                            <h4 className="text-black font-bold text-xl">Singapur</h4>
                            <p className="text-black">A break from the world</p>
                        </div>
                    </div>

                    <div className=" rounded-lg h-72 w-60 mx-4 shadow-lg  inline-block hover:cursor-pointer overflow-y-hidden">
                        <div className="Card">
                            <img src="./img/faro.jpg" alt="" />
                        </div>
                        <div className="container-text h-2/5 p-4">
                            <h4 className="text-blue font-bold text-xl">new zelanda</h4>
                            <p className="text-blue">The Vibrant City</p>
                        </div>
                    </div>

                    <div className=" rounded-lg h-72 w-60 mx-4 shadow-lg  inline-block hover:cursor-pointer overflow-y-hidden">
                        <div className="Card">
                            <img src="./img/arquitectura.jpg" alt="" />
                        </div>
                        <div className="container-text bg-green h-2/5 p-4 whitespace-normal">
                            <h4 className="text-white font-bold text-xl">paris</h4>
                            <p className="text-white">Town Between the Mountains</p>
                        </div>
                    </div>

                    <div className=" rounded-lg h-72 w-60 mx-4 shadow-lg  inline-block hover:cursor-pointer overflow-y-hidden">
                        <div className="Card">
                            <img src="./img/new_York.jpg" alt="" />
                        </div>
                        <div className="container-text h-2/5 p-4">
                            <h4 className="text-blue font-bold text-xl">Berlin</h4>
                            <p className="text-blue">City of Artists</p>
                        </div>
                    </div>
                </div>
                <div className="px-6 h-full w-full" id="rentas_destacadas">
                    <p className="text-3xl text-primary font-semibold pb-6 pt-2 mt-6">Rentas destacadas</p>
                    <div className="w-full h-full flex flex-col space-y-6 items-center justify-center">
                        <div className="w-full h-96  bg-cover rounded-lg"  style={{ backgroundImage: "url('./public/img/moscu.jpg')" }}>
                            <p className="CardTitle">Chicago</p>
                            <p className="text-md pl-8 text-white mr-24">2 Habitaciones, baño y cocina</p>
                        </div>
                        <div className="w-full h-96  bg-cover rounded-lg"  style={{ backgroundImage: "url('./public/img/moscu.jpg')" }}>
                            <p className="CardTitle">Chicago</p>
                            <p className="text-md pl-8 text-white mr-24">2 Habitaciones, baño y cocina</p>
                        </div>
                    </div>
                </div>
                

                <div className="w-full h-full" id="faqs">
                    <div className="w-full h-full px-6 flex flex-col space-y-4">
                        <p className="text-3xl text-primary font-semibold mt-20">FAQS</p>
                        <div>
                            <p className="text-xl font-medium text-primary">
                                Politica de Cancelaciòn
                            </p>
                            <p className="text-md pt-2">
                                Para estancias menores a una semana
                                es importante
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
}

export default MyGeneral;