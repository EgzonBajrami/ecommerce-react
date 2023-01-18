import './OneKind.css'
import furnitu from '../../assets/furnitu.avif'
import engagRing from '../../assets/engagRing.jpg'
import girl from '../../assets/girl.avif'
import uniq from '../../assets/uniq.avif'
import makeup from '../../assets/makeup.jpeg'
import shoes from '../../assets/shoes.jpg';
import {useNavigate} from 'react-router-dom';
const OneKind = () =>{
    const navigate = useNavigate();
    return <>
    <div className="onekind-wrapper">
        <div className="title-holder">
            <h3>Explore one-of-a-kind finds from independent makers</h3>
        </div>
        <div className="icons-holder">
            <div className="icons-wrapper"
            onClick={()=>{
                navigate('/Section/Furniture')
            }}>

          
            <div className="first-icon" >
                <img src={furnitu} alt="smfurni" />
                
            </div>
            <h6>Furniture & Organization</h6>
            </div>
            <div className="icons-wrapper"
            onClick={()=>{
                navigate('/Section/Engagement')
            }}>

          
<div className="first-icon"
>
    <img src={engagRing} alt="smfurni" />
    
</div>
<h6>Engagement & Wedding Gifts</h6>
</div>
<div className="icons-wrapper"
onClick={()=>{
    navigate('/Section/Hoodies')
}}>

          
<div className="first-icon">
    <img src={girl} alt="smfurni" />
    
</div>
<h6>Hoodies & Sweaters</h6>
</div>
<div className="icons-wrapper"
onClick={()=>{
    navigate('/Section/Jewelry')
}}>

          
<div className="first-icon">
    <img src={uniq} alt="smfurni" />
    
</div>
<div className="uniq">
<h6 >Unique Jewelry</h6>
</div>
</div>

<div className="icons-wrapper"
onClick={()=>{
    navigate('/Section/MakeUp')
}}>

          
<div className="first-icon">
    <img src={makeup} alt="smfurni" />
    
</div>
<div className="make">
<h6>Make Up </h6>
</div>

</div>
<div className="icons-wrapper"
onClick={()=>{
    navigate('/Section/Shoes')
}}>

          
<div className="first-icon">
    <img src={shoes} alt="smfurni" />
    
</div>
<div className="uniqs">
<h6>Unique Shoes</h6>
</div>

</div>


        </div>
    </div>
    </>
}
export default OneKind;