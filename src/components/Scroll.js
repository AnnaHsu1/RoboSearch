import React from "react";

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '5px solid #19adc7', height: '545px'}}>
            {props.children}
        </div>
    );
}

// class Scroll extends Component{
//     constructor(){
//         super();
//     }

//     render(){
//         return(
//         <div style={{overflowY: 'scroll', border: '5px solid #19adc7', height: '545px'}}>
//             {this.props.children}
//         </div>
//         );
//     }
// }

export default Scroll