import React from 'react'

import { Player } from 'video-react'

export default ({ data }) => {
  const { loading, patient } = data
  console.log(loading, patient, '@@@')
  return (
    <main>
      <h1>李昂医生教你控血糖</h1>
      <h2>北大李昂医生 2018-07-04</h2>
      <Player>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
    </main>
  )
}
