import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from './sobreNosotros.module.css'

export default function page() {
  return (
    <section>
      <div className={style.sobreNosotrosContainer}> 
      <h1> Sobre Nosotros </h1>
          <div className={style.videoSobreNosotros}>
            <iframe width={560} height={315} controls autoPlay src="https://www.youtube.com/embed/5lz0wLdagYE?" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <p> Somos un emprendimiento familiar, que busca a través de la práctica de la apicultura lograr una soberanía económica y de autoabastecimiento para nuestra alimentación y el cuidado de la salud, practicando una apicultura Agroecológica que respeta
            y pone en valor a los polinizadores nativos, buscando la regeneración de la biodiversidad del territorio.
          Para ello ofrecemos productos que mezclan frutos silvestres y hierbas medicinales de la Araucanía Andina con materias primas extraídas desde nuestras colmenas de abejas (miel, polen, propoleos, jalea real, cera, etc.), ubicadas en Cunco región
            de la Araucanía a los pies del Volcán Llaima, creando productos que cuentan con una base científica sobre sus efectos terapéuticos. </p> </div>        
          
          <div className={style.fotosNosotros}>
            <div className={style.row}>
              <Image src="/images/areaAbejas.jpg" alt="" width={100} height={100} />
              <Image src="/images/productosBonitos.png" alt="" width={100} height={100}  />
              <Image src="/images/OscarApicultura1.jpg" alt="" width={100} height={100} />
            </div>
          </div>
          <div className={style.apiturismo}>
            <h1> Apiturismo</h1>
            <p>Ofrecemos servicios de visitas guiadas a nuestro ecoapiario y refugio de polinizadores lo que permite mostrar y poner en valor el trabajo de los polinizadores en la regeneración de la biodiversidad. Si te interesa visitarnos</p>
           
          <div className={style.fotosApiturismo}>
            <Image src="/images/abejasniña.jpg" className={style.fotosApiturismo} alt="" width={100} height={100}  />
            <Image src="/images/oscarConNiños2.jpg" className={style.fotosApiturismo} alt="" width={100} height={100} />
            <Image src="/images/abejasJardin.jpg" className={style.fotosApiturismo} alt="" width={100} height={100} />
          </div>
        </div>
      </section>
      )
    }