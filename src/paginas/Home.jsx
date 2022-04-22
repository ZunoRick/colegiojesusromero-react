import { Link } from 'react-router-dom'
import { UilAngleRight } from '@iconscout/react-unicons'
import Masacota from '../img/img-mascota.webp'
import Kinder from '../img/img-kinder.webp'

const Home = () => {
  return (
    <>      
      <div className="w-auto bg-gray-300 bg-no-repeat bg-cover bg-center banner-container">
        <div className="m-0 p-0 w-auto h-full text-[#03224e] bg-[rgba(186,197,223,.65)] flex flex-col justify-center items-center banner-content">
          <h1 className='uppercase font-bold mb-10 text-center text-3xl md:text-6xl'>Colegio Jesús Romero Flores</h1>
          <p className='text-xl text-center font-bold md:text-3xl'>Forjando Triunfadores desde 1988</p>
        </div>
      </div>

      <main className='bienvenida mt-5 w-[90%] lg:w-[85%] 2xl:w-[60%] mx-auto md:grid grid-cols-4 justify-items-center items-center'>
        <div className='mensaje'>
          <h2 className='titulo_bienvenida text-[#03224e] my-4 text-4xl font-bold'>Bienvenid@s</h2>
          <p className='text-justify text-lg '>El colegio Jesús Romero Flores le da la más cordial bienvenida. Por mas de 30 años ofrecemos servicios educativos para el desarrollo de sus hijos e hijas mejorando cada ciclo escolar. Nuestro proceso educativo incluye tanto áreas académicas como en valores para que sus niños tengan un desarrollo sano y obtengan las habilidades que les permitirán ser exitosos y valiosos seres humanos.</p>
        </div>
        <div className='hidden md:block'>
          <img src={Masacota} alt="Imagen mascota" />
        </div>
      </main>

      <section className='oferta bg-gradient-to-t to-[#0a62ac] from-[#03224e] py-6 mt-6'>
        <div className='w-[90%] lg:w-[85%] 2xl:w-[60%] my-3 m-auto grid md:grid-cols-3 gap-10 items-center justify-items-center'>
          <p className='text-white text-2xl font-bold text-center md:col-span-2 md:text-left'>Conoce nuestra oferta educativa así como los diferentes servicios con los que contamos</p>
          <Link
              to='#'
              className="text-white text-center text-lg font-bold border-[1.5px] py-1 flex justify-center items-center border-white enlace w-full md:w-2/3 md:my-4"
            >Ver más <UilAngleRight className='inline'/>
          </Link>
        </div>
      </section>

      <section className='section-kinder grid grid-row-2 gap-10 md:grid-cols-2'>
        <img src={Kinder} alt="Imagen preesco" className=''/>
        <div className='section-kinder-texto w-[90%] lg:w-[85%] 2xl:w-[60%] m-auto '>
          <p className='text-[#03224e]'>Anexo al Colegio Jesús Romero Flores contamos con el <span>Jardín de Niños María Isabel</span>  que ofrece una educación de calidad a los pequeños de <span>nivel preescolar.</span></p>
          <Link
              to='#'
              className="text-white text-center text-lg font-bold border-[1.5px] py-1 flex justify-center items-center border-white enlace md:w-2/3 md:my-4"
            >Visítanos <UilAngleRight className='inline'/>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home