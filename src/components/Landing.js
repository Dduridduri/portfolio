import React from 'react'

function Landing() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20">
          <h1 className="text-2xl font-bold mb-6">Welcome to Our Landing Page!</h1>
          <p className="mb-6">This is a simple landing page template using React and Tailwind CSS. You can customize it according to your needs.</p>
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-light-blue-500 text-white rounded-lg">Get Started</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing