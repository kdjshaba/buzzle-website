import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import TextField from '@material-ui/core/TextField';

const logo = document.querySelectorAll("#logo path")

for(let i=0; i<logo.length; i++){
   console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}



export default class Waitlist extends Component {
  state={
        show:false,
        email:"",
        emailError:""
    }
    constructor(props){
        super(props);
       
    }
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };

      validate = () => {
     
        let emailError = "";
        // let passwordError = "";
    
       
    
        if (!this.state.email.includes("@")) {
          emailError = "invalid email";
        }
    
        if (emailError) {
          this.setState({ emailError});
          return false;
        }
    
        return true;
      };
    sendEmail =  e =>{
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) 
        {

            emailjs.sendForm('service_dchnj0a', 'waitlist', e.target, 'user_O1He4ao0wurevJ55Hgpx8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
            this.setState({show:!this.state.show})
            this.setState({emailError:""})
            e.target.reset()
        }
        else{
        
            e.target.reset()
     
        }
        e.target.reset()
    }
    
render(){


    

  return (
<div>
    <div className="text">
<div className="btn">
<button  className="logo" data-wipe="Join our waitlist!"   style={{border:'none', outline: 0}} onClick={()=>{this.setState({show:!this.state.show})}} visible={this.state.show} >Wanna be the first to try?</button>
                </div>
                </div>
    <div className= {this.state.show?'fadeIn':'fadeOut'}>  
    <div class="bg-contact3" >
		<div class="container-contact3">
			<div class="form__group field">   
    <form className="contact-form" onSubmit={this.sendEmail}>
   
    <label className="form__label">Email</label>
 
      <input  type="email" name="email" className="form__field" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
      <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
    <input type="submit" className="send btn-grad" value="Send" />
    <button className="cancel"  onClick={()=>{this.setState({show:!this.state.show})}} visible={this.state.show}>Cancel</button>
  </form>
  </div>
  </div>   
  </div>
  </div>
  </div>
//this is an example


  )
}
}

