import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <p>
        <b>Welcome to your dashboard!</b>
        {' This is where site admins will log in to manage your website. Users will need to '}
        <a href={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/login`}>log in to the site instead</a>
        {' to access their user account.'}
      </p>
    </div>
  )
}

export default BeforeLogin
