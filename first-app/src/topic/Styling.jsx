// import "../myStyle.css";
import styled from 'styled-components';
// import sty from "./my-style.module.css";
function Styling() {

const MyHeader = styled.h1`
  padding: 10px 20px;
  background-color: #ea00ffff;
  color: white;
`;

const MyPara = styled.p`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;

    return (
        <>
            {/* <h1 style={{color:"red"}}>Inline Styling Example</h1> */}
            {/* <h1 style={style}>Inline Styling Example</h1> */}
            <MyHeader>line Styling Example</MyHeader>
            <MyPara>Lorem ipsum dolor sit amet.</MyPara>

        </>
    )
}
export default Styling;