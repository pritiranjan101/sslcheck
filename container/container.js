import React from 'react';
import ReactDOM from 'react-dom';

export default class Contents extends React.Component {

   render() {
   
      return (

<div>   
    
    <div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
       
      </div>
      <div className="modal-body">
       
       <div className="container-fluid">
                 
                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <a className='btn btn-danger disabled'>
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a className='btn btn-danger' href="/auth/google">Sign in with Google</a>
                  </div>
                </div>
                <div className="row">&nbsp;</div>
                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <a className='btn btn-primary disabled'>
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a className='btn btn-primary' href="/auth/facebook">Sign in with Facebook</a>
                  </div>
                </div>
                 <div className="row">&nbsp;</div>
                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <a className='btn btn-primary disabled'>
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className='btn btn-primary' href="/auth/twitter">Sign in with twitter</a>
                  </div>
                </div>

      </div>
          
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
</div>    
      );
   }
}


export default Contents;

                                   