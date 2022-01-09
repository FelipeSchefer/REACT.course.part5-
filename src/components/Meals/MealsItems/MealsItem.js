import React from 'react'
import MealItemForm from './MealItemForm'
import classes from './MealsItem.module.css'

const MealsItem=(props) => {
 const price = `$${props.price.toFixed(2)}`

 return (
  <li>
   <div>
    <h3> {props.name} </h3>
    <div className={classes.description}> {props.description} </div>
    <div className={classes.price}> {price} </div>
   </div>
   <div> <MealItemForm id={props.id}/> </div>
  </li>
 )
}

export default MealsItem
