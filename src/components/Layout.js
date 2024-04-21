import React from 'react'

export const Layout = ({children, className=''}) => {
  return (
    <div className={`${className} w-full h-full px-32`}>
        {children}
    </div>
  )
}
