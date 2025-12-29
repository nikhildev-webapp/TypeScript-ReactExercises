import  { useState } from 'react'
type Status='loading'|'success'|'error'
const UnionType = () => {
    const[prog,setProg]=useState<Status>('loading')

  return (
      <>
          <h1>Union-Type</h1>
          <p>Progress in work:{prog}</p>
          <button onClick={()=>setProg('loading')}>SetLoading</button><br />
          <button onClick={()=>setProg('success')}>SetSuccess</button><br />
          <button onClick={()=>setProg('error')}>SetError</button><br />
          <p>Click the button to change the progrss </p>
      </>
  )
}

export default UnionType