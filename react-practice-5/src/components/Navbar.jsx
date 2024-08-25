import React from 'react'

function Navbar() {
  return (
    <div className="bg-white h-[60px] rounded-[10px] flex items-center justify-center">
      <div className="flex items-center justify-center gap-1">
      <img src="/logo-firebase.svg" alt="firebase logo" />

      <h3 className=' text-[20px] font-bold'>Firebase Contact App</h3>
      </div>
    </div>
  )
}

export default Navbar