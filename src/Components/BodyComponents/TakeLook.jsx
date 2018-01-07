import React from 'react';
class TakeLook extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
         freeCredit: "Free credit scores are just the beginning",
         content:"As a member, you can see your accounts, your last reported balances and what’s affecting your credit scores." ,   
       
      }
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
      this.setState({freeCredit: 'Data updated...',content: 'Data updated...'})
      
   }
    render()
    {
    return (
     <div className="row clearfix margin-top10">
                    <div className="col-lg-5 col-lg-offset-1">
                        <h1 className="freeCreditHeading">{this.state.freeCredit}</h1>
                        <p className="infoTxt">{this.state.content}</p>
                        
                        <button className="btn btn-primary btn-xl js-scroll-trigger customBtn" onClick = {this.updateState}>Take a look</button>
                         
                    </div>
                    <div className="col-lg-5 ">
                        <img src="src/images/GetKnowingCards.png" className="img-fluid" />
                    </div>
                </div>
    );
 
}

}
export default TakeLook;