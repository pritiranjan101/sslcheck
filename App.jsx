import React from 'react';
import Header from "./container/header";
import Footer from "./container/footer";
import Contents from "./container/container";


class App extends React.Component {

   render() {
      return (
         <div className="banner">
            <Header/>         
            <Center/>    
            <Footer/>
            <Contents/>
         </div>
      );
   }
}



class Center extends React.Component {
  
   render() {
      return (
         <div className="container">
       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             <div className="box">      
              <div className="inbox">
              <h4>click the button !! :</h4>  
              <div className="but">
              <button type='button' className='btn button-custom btn-custom-one' data-toggle='modal' data-target='#myModal'>check it
              </button>
               </div>
              </div>
             </div>
         </div>
          </div>
      );
   }
}






export default App;



