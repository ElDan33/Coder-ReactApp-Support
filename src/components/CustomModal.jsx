import React, { useState } from 'react'

const CustomModal = ({totalQuantity, count, item}) => {

    const [showModal, setShowModal] = useState(true);

    return (
        showModal 
        ? (
            <div className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-gray-800 opacity-90 lg:absolute lg:w-screen lg:h-screen lg:overscroll-auto">
                <div className="animate__animated animate__fadeInDown block relative my-12 ml-24 w-2/3 h-68 p-2 bg-green-300 opacity-90 rounded-2xl font-mono lg:mx-auto lg:my-36 lg:w-1/3 ">
                    <p className="px-6 py-2 text-md w-fit rounded-xl cursor-pointer text-gray-500 hover:text-white hover:bg-green-600 text-shadow" onClick={()=> setShowModal(false)}>x</p>
                    <h3 className="text-3xl mb-2 text-center text-white text-shadow-h1 ">🎉<span className=""> Congratz!! </span>🎉</h3>
                    <hr />
                    <p className="mt-12 px-4 text-2xl text-center text-gray-300 text-shadow-h1">You just added <span className="font-bold">{item.product}</span> <br/> to the cart 🛒!!</p>
                    <div className="flex justify-end">
                        <button className=" mx-4 mt-12 mb-4 w-20 py-2 text-gray-500 text-xl  border-2 border-solid hover:bg-green-600 hover:text-white rounded-xl" onClick={()=> setShowModal(false)}>OK</button>                        
                    </div>
                </div>
                
            </div>
        )
        :null
        
    )
}

export default CustomModal
