
export default function Header() {
    return (
        <div className="flex justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-purple-900 shadow-2xl">
            <div className="flex justify-Start p-1"  >
                <a className="rounded-lg text-xl p-5 text-white bg-gradient-to-r from-gray-600 to-purple-900 hover:from-pink-800 hover:to-black-900" href="/">Home</a>
                <a className="rounded-lg text-xl p-5 text-white hover:text-red-500" href="/myApps">Apps</a>
                <a className="rounded-lg text-xl p-5 text-white hover:text-red-500" href="contact">Contato</a>
                <a className="rounded-lg text-xl p-5 text-white hover:text-red-500" href="about">Sobre</a>
            </div>
            <div>
                <h2 class="text-gray-500 flex justify-center animate-pulse p-4">
                    Site In Construction
                    </h2>
            </div>

            <div className="flex justify-end p-5 rounded-lg shadow-2x1 flex space-x-4">
                <a className="p-1" href="https://www.linkedin.com/in/ricardoav/" > <img src="/linkedin26.png" /> </a>
                <a className="p-1" href="https://github.com/RicardoAVieira"><img src="/github50.png" /></a>
            </div>

        </div>
    )
}

