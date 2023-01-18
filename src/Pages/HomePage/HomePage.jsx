import Carousels from "../../Components/Carousel/Carousel";
import EditorsChoice from "../../Components/EditorsChoice/EditorsChoice";
import OneKind from "../../Components/OneKind/OneKind";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";

import './HomePage.css'
const HomePage = () =>{

    return<>

    <div  className="homepage-wrapper">
        <div className="carousel">
            <Carousels />
        </div>
        <div className="one-kind">
            <OneKind />
        </div>
        <div className="editors">
            <EditorsChoice />
        </div>
        <div className="popular">
            <PopularProducts />

        </div>
    </div>
    </>
}
export default HomePage;