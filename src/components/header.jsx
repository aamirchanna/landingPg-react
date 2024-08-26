
import Button from "./Button"

function Header({header}){
    return (
        <header className="text-gray-900 body-font bg-orange-400">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={header.logo} alt=""
              className="w-10 h-10 0  rounded-full" />
            <span className="ml-3 text-xl">{header.title}</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">Contant</a>
            <a className="mr-5 hover:text-gray-900">About</a>
          </nav>

          <Button Button label="Login" />
        </div>
      </header>
    )
}
export default Header