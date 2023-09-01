import React from 'react'
import './Recomended.css'
import { useDispatch, useSelector } from 'react-redux'
function Recomended() {

  return (
    <section className="recomended">
        <h1>Recomended</h1>
        <div className="buttons">
            <Button ele="All Products"></Button>
            <Button ele="Nike"></Button>
            <Button ele="Adidas"></Button>
            <Button ele="Puma"></Button>
            <Button ele="Vans"></Button>
        </div>
    </section>
  )
}




 function Button(props) {
  let value=false;
    let dis=useDispatch();
    let state=useSelector(state=>state.filterreducer)
    if(state.recomended===props.ele){
      value=true;
    }
  return (
    <button onClick={()=>dis({type:'recomended',payload:props.ele})} style={value?{backgroundColor:'black',color:'white'}:{}}>{props.ele}</button>
  )
}




export default Recomended