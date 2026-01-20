import React from 'react'

const Copyright = ({currentTheme}) => {
  return (
    <div className={`w-full flex flex-row justify-center text-lg ${currentTheme.main} max-xl:pb-12 max-xl:text-3xl`}>
      Copyright © 2026 Ashish Gupta - All Rights are Reserved
    </div>
  )
}

export default Copyright
