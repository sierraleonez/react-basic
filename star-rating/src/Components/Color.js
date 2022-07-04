import React from 'react'
import StarRating from './StarRating'
import { FaTrash } from 'react-icons/fa'

export default function Color({
  id,
  color,
  title,
  rating,
  onRate = () => {},
  onRemove = () => {},
}) {
  return (
    <section>
      <h1>{title}</h1>
      <button  onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStar={rating} onRate={rating => onRate(id, rating)}/>
    </section>
  )
}