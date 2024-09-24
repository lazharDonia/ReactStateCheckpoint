import React , {Component} from 'react'

class Person extends Component {
    constructor(){
      super();
      this.state={
            FullName: "lazhar Donia",
            Bio: " ... ",
            ImgSrc : "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            Profession :"Web developper" ,
            show:true ,
            timeSinceMounted:0
               }}
        componentDidMount=()=>{
          this.mountTime = Date.now();
          setInterval(()=>{
            const timeElapsed = Math.floor((Date.now()-this.mountTime)/1000)
            this.setState({timeSinceMounted:timeElapsed})
          }) }
        
        showHandler=()=>{
            this.setState({show:!this.state.show})
           
        }
    
    render(){
      const {person, show , timeSinceMounted}= this.state
        return(
        <>
        {this.state.show && (
          <div>
          <div>
          <img src= {this.state.ImgSrc}></img>
          </div>
          <div>
            <h1 >{this.state.FullName}</h1>
            <h2> {this.state.Profession}</h2>
            <p>{this.state.Bio}</p>
            <p>{timeSinceMounted}</p>
           

          </div>
          </div>
        )}
          
          <button onClick={this.showHandler}>
            {this.state.show ? "hide" : "show"} 
          </button>
        </>
    )
}
}
export default Person