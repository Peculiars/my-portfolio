import React from 'react'

export const Layout = ({children, className=''}) => {
  return (
    <div className={`${className} w-full h-full dark:bg-dark xs:px-4 sm:px-8 md:px-32`}>
        {children}
    </div>
  )
}
