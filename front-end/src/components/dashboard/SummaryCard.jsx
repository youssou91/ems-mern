// import React from 'react'

const SummaryCard = ({icon, text, number, color}) => {
  return (
    <div className="rounded flex bg-gray-400 shadow-2xl text-white">
        <div className={`${color} mrounded text-7xl flex justify-center items-center px-5`}>
            {icon}
        </div>
        <div className="pl-4 py-1">
            <p className="text-lg font-pacific my-3">{text}</p>
            <p className="text-xl font-pacific my-3">{number}</p>
        </div>
    </div>
  )
}

export default SummaryCard
