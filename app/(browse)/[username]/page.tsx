import React from 'react'

interface UserpageProps{
    params: {
        username: string
    }
}

const UserPage = ({ params }: UserpageProps) => {
  return (
    <div>
      User: {params.username}
    </div>
  )
}
export default UserPage
