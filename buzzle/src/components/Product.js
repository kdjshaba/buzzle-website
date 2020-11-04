import React, { Component }  from 'react'
import pencil from '../assets/images/pencil.png'


export default class Product extends Component {
    state={
        show:false
    }
    constructor(props){
        super(props);
       
    }
  
render (){
  return (
  <div>
    
   <div className="prod">
   
<span className="editing">Editing made more productive with the Apple Pencil</span>

<span className="desc">Buzzle is the perfect add-on to your editing workflow</span>

     <button className = "pencil" onClick={()=>{this.setState({show:!this.state.show})}}><img src={pencil}></img></button>
    <span className="pen">click the pen to see <br></br> it get to work!</span>

    <div className= {this.state.show?'fadeOut':'fadeIn'}>
<span className="drawing">
<svg width="602" height="371" viewBox="0 0 602 371" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="40.7254" width="565.83" height="295.508" rx="45" transform="rotate(7.92144 40.7254 0)" fill="#282727"/>
<rect x="54.7501" y="14" width="534.741" height="273.918" rx="45" transform="rotate(7.92144 54.7501 14)" fill="#623CEA"/>
</svg>

</span>
<span className="masking">Masking</span>
<span className="path">Real-time path creation</span>


    </div>
<div className={this.state.show?'fadeIn':'fadeOut'} style={{position:"absolute" , zindex:-1}}>



</div>


      </div>  </div>
//this is an example


  );
}
}

