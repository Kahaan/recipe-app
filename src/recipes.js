
import React from 'react'

const Recipes = (props) => {
  return (
    <div>
    {props.recipes.map((el) => {
      return(
        <div>
          <img key={el.title} src={el.image_url} alt={el.title} />
          <p>{el.title}</p>
        </div>
      )
    })}
    </div>
  )
}

export default Recipes
