import { Link } from "react-router-dom"
import Escudo from '../img/escudoJRF.png'
import { UilBars, UilTimes } from '@iconscout/react-unicons'

const Header = ({setMenuResponsive, menuResponsive}) => {
  return (
    <header className="bg-color-principal w-full">
      <nav className="h-20 lg:h-24">
        <div className="flex justify-between items-center w-11/12 mx-auto lg:hidden"> 
          <Link to='/'>
            <img 
              src={Escudo}
              className='z-20 w-24 absolute top-3 lg:hidden'
            />
          </Link>

          <div
            onClick={() => setMenuResponsive(!menuResponsive)}
          >
            {menuResponsive ? (
              <UilTimes className="text-white block h-[4.5rem] w-[4.5rem] lg:hidden hover:fill-yellow-500" />
            ) 
            : (
              <UilBars className="text-white block h-[4.5rem] w-[4.5rem] lg:hidden hover:fill-yellow-500" />
            )}
          </div>
        </div>

        <div className={`${menuResponsive ? 'left-0 z-10' : 'left-[-100%] z-0'} absolute w-full bg-blue-900/80 h-screen mt-2 menu-animation lg:hidden`} >
          <Link
            to='/'
            className="block text-center text-white font-bold border-b-[0.5px] border-cyan-600 py-4 text-lg hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 hover:border-none"
          >INICIO</Link>

          <Link
            to='/nosotros'
            className="block text-center text-white font-bold border-b-[0.5px] border-cyan-600 py-4 text-lg hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 hover:border-none"
          >NOSOTROS</Link>

          <Link
            to='/servicios'
            className="block text-center text-white font-bold border-b-[0.5px] border-cyan-600 py-4 text-lg hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 hover:border-none"
          >NUESTROS SERVICIOS</Link>

          <Link
            to='/inscripciones'
            className="block text-center text-white font-bold border-b-[0.5px] border-cyan-600 py-4 text-lg hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 hover:border-none"
          >INSCRIPCIONES</Link>

          <Link
            to='/instalaciones'
            className="block text-center text-white font-bold border-b-[0.5px] border-cyan-600 py-4 text-lg hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 hover:border-none"
          >INSTALACIONES</Link>

          <Link
            to='/contacto'
            className="block text-center text-white font-bold border-b-[0.5px] border-cyan-600 py-4 text-lg hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 hover:border-none"
          >CONTACTO</Link>
        </div>

        <div className="hidden lg:visible lg:flex gap-2 justify-between items-center lg:w-[96.6%] 2xl:w-[60%] h-24 m-auto">
          <Link
            to='/'
            className="text-white font-normal lg:font-bold w-40 align-middle inline-block transition-all hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 text-center hover:py-9 2xl:text-lg lg:text-base"
          >INICIO</Link>

          <Link
            to='/nosotros'
            className="text-white font-normal lg:font-bold w-40 align-middle inline-block transition-all hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 text-center hover:py-9 2xl:text-lg lg:text-base"
          >NOSOTROS</Link>

          <Link
            to='/servicios'
            className="text-white font-normal lg:font-bold w-40 align-middle inline-block transition-all hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 text-center hover:py-9 2xl:text-lg lg:text-base"
          >NUESTROS SERVICIOS</Link>

          <Link to='/'>
            <img 
              src={Escudo}
              className='w-36 mt-14 h-full'
            />
          </Link>

          <Link
            to='/inscripciones'
            className="text-white font-normal lg:font-bold w-40 align-middle inline-block transition-all hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 text-center hover:py-9 2xl:text-lg lg:text-base"
          >INSCRIPCIONES</Link>

          <Link
            to='/instalaciones'
            className="text-white font-normal lg:font-bold w-40 align-middle inline-block transition-all hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 text-center hover:py-9 2xl:text-lg lg:text-base"
          >INSTALACIONES</Link>

          <Link
            to='/contacto'
            className="text-white font-normal lg:font-bold w-40 align-middle inline-block transition-all hover:text-blue-900 hover:bg-gradient-to-t to-yellow-300 from-yellow-500 text-center hover:py-9 2xl:text-lg lg:text-base"
          >CONTACTO</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header