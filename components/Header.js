
export default function Header() {
    return (
        <div className="flex justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-purple-900 shadow-2xl">
            <div className="flex justify-Start p-1"  >
                <a className="rounded-lg text-xl p-5 text-white bg-gradient-to-r from-gray-600 to-purple-900 hover:from-pink-800 hover:to-black-900" href="/">Home</a>
                <a className="rounded-lg text-xl p-5 text-white hover:text-red-500" href="/myApps">My Apps</a>
                <a className="rounded-lg text-xl p-5 text-white hover:text-red-500" href="contact">Contact</a>
            </div>
            <div>
                <h2 class="text-white flex justify-center animate-bounce p-4">
                    Site In Construction
                    </h2>
            </div>

            <div className="flex justify-end p-5 rounded-lg shadow-2x1 ">
                <a href="https://www.linkedin.com/in/ricardoav/" > <img src="/linkedin26.png" /> </a>
            </div>

        </div>
    )
}

