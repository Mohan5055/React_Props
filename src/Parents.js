

import React from 'react'
import Name from './Child'
function Parents({data}) {
  return (
    <div>
      <Name name={data}/>
    </div>
  )
}

export default Parents
