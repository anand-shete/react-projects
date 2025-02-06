import React from 'react'
import PropTypes from 'prop-types';

// In React, destructuring props in the function parameters works slightly differently from typical JavaScript object destructuring because props object is always passed as a single argument to the functional component.
export default function Card(name = "Bruce Wayne", cutomObject = {}) {
  // Props are taken from function parameters itself where default values can be set 

  // React provides a way to validate the types of props using PropTypes. This is helpful for ensuring the correct data is being passed to the component.
  Card.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired      // Error in console
  }

  return (
    <div className='card border-2 border-solid border-red-700 p-80 h-10 w-10'>
      <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-waterfall-free-image.jpeg?w=600&quality=80" alt="card image" />
      <h3>{name}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nulla omnis tenetur quam, consequatur delectus ea dolores in doloribus nam, est hic, illo sed. Vero non iste et magni ipsum possimus eos mollitia ea!</p>
    </div>
  )

}