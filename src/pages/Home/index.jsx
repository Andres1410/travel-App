// Components
import SearchNav from "../../components/SearchNav"
import MyGeneral from "../MyGeneral"


export default function App() {
  return (
    <>

    <SearchNav />

    {/* <!-- Recomendations Section --> */}
      <MyGeneral />
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
