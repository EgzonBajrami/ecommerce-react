
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PublicRoutes from './Lib/Routes/PublicRoutes';
import PrivateRoutes from './Lib/Routes/PrivateRoutes';
import {routeData} from './Lib/Routes/RouteData';
import Header from './Components/HeaderMain/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {store} from './Lib/store/store.js'
import './scss/style.scss'
import { motion,useSpring,useScroll } from "framer-motion"
import Footer from './Components/Footer/Footer';




function App() {

 

   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
     stiffness: 100,
     damping: 30,
     restDelta: 0.001
   });

 
   
return <>



<Provider store={store}>
   <Header />




   <Router> 
   <Routes>
    {routeData.public.map((elem,index)=>( 
      <Route key={index} path={elem.path} element={<PublicRoutes>{elem.element}</PublicRoutes>} />
  ))}
     {routeData.private.map((elem,index)=>( 
      <Route key={index} path={elem.path} element={<PrivateRoutes>{elem.element}</PrivateRoutes>} />
  ))}
   </Routes>
   </Router>
   <motion.div className="progress-bar" style={{ scaleX }}></motion.div>

   </Provider>
   <Footer />
</>
}

export default App;
