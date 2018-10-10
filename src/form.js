
import React from 'react'




const Form = (props) => {
  return (
    <form onSubmit={props.getRecipe}>
      <input type="text" name="recipeName"></input>
      <button>Search</button>
    </form>
  )
}

export default Form
