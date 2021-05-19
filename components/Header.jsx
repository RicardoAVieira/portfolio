import React from 'react'

export default function Header() {
    return (
        <div className="flex h-12 justify-between bg-gray-900 shadow-2xl">
            <div className="flex justify-Start "  >
                <a className=" text-base p-5 text-white" href="/">Home</a>
                <a className=" text-base p-5 text-white " href="/myApps">Apps</a>
                <a className=" text-base p-5 text-white " href="contact">Contato</a>
                <a className=" text-base p-5 text-white " href="about">Sobre</a>
             
            </div>
           

         
        </div>
    )
}

