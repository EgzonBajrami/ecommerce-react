import furnitureMain from '../../assets/furnitureMain.webp'
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import './FurniturePage.scss'
import {useLocation} from 'react-router-dom'
import engageMent from '../../assets/engageMent.jpg';
import hoodieMain from '../../assets/hoodieMain.jpg'
import elegantJewelry from '../../assets/elegantJewelry.jpg'
import girlMakeup from '../../assets/girlMakeup.jpg'
import shoesWalp from '../../assets/shoesWalp.jpg'
import {useEffect} from 'react';
const FurniturePage = () =>{
    const location = useLocation();
    const section = location.pathname.split('/')[2];
    console.log(location.pathname.split('/'))
    let icon;
    let text ='';
    if(section==='Furniture'){
        icon = furnitureMain;
        text = "Our furnitures are designed with you in mind!"
       

    }

    if(section==='Engagement'){
        icon = engageMent;
        text = "We have the best choices when it comes to wedding gifts."
    }
    if(section==='Hoodies'){
        icon = hoodieMain;
        text = 'Best choice of hoodies & sweaters here!'
    }
    if(section==='Jewelry'){
        icon = elegantJewelry;
        text = 'Here you can find the most elegant and unique jewelry!'
    }
    if(section==='MakeUp'){
        icon = girlMakeup;
        text = 'For the best glow up!'
    }
    if(section==='Shoes'){
        icon = shoesWalp;
        text = 'Comortable, cool and water resistant. The words to describe our shoes!'
    }
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    
    return<>
    <div className="furniture-wrapper">
        <div className="furniture-first">

     
        <div className="furniture-icon">
            <img src={icon} alt="furni" />
        </div>
        <div className="furniture-title">
            <h3>{text}</h3>
        </div>
        </div>
        <div className="products-wrapper">
            <ProductsContainer section={section} />
        </div>
    </div>
    </>
}
export default FurniturePage;