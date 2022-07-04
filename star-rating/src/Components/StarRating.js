import React from 'react'
import Star from './Star'

function createArray(length) {
  return [...Array(length)]
}

export default function StarRating({
  style = {},
  totalStars = 5,
  selectedStar = 0,
  onRate = () => {},
}) {
  return (
    <div style={style}>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStars} stars
      </p>
    </div>
  )
}