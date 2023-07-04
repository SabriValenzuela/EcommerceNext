import Image from 'next/image'
import style from './page.module.css'

export default function Home() {
  return (
    <main className={style.mainNosotros}>
    <section className={`${style.contenedor} ${style.sobre_nosotros}`}>
         <h2 className={style.titulo}> Sobre Nosotros </h2>
         <div className={style.contenedor_sobre_nosotros}>
           <Image src="/images/fotoFamiliar.jpg" alt="" className={style.imagen_about_us} width={100} height={300}/>
           <div className={style.contenido_textos}>
             <p>Somos un emprendimiento familiar, que busca a través de la práctica de la apicultura lograr una soberanía económica y de autoabastecimiento para nuestra alimentación y el cuidado de la salud, practicando una apicultura Agroecológica que respeta y pone en valor a los polinizadores nativos, buscando la regeneración de la biodiversidad del territorio.</p>
             <p> Para ello ofrecemos productos que mezclan frutos silvestres y hierbas medicinales de la Araucanía Andina con materias primas extraídas desde nuestras colmenas de abejas (miel, polen, propoleos, jalea real, cera, etc.), ubicadas en Cunco región de la Araucanía a los pies del Volcán Llaima.</p>
           </div>
         </div>
         </section>

         <div>
        <div className={style.tituloPropositos}>
          <h1>Nuestros propositos</h1>
        </div>
        <section className={style.propositos}>
          <div className={style.textoPropositos}>
            <Image src="/images/image 19.png" alt="" width={50} height={50}/>
            <p>Ofrecer una solución para el cuidado de su salud con productos naturales desde la Araucanía Andina, origen local. </p>
          </div>
          <div className={style.textoPropositos}>
            <Image src="/images/image 18.png" alt="" width={50} height={50}/>
            <p>Regenerar la biodiversidad del territorio de Araucanía Andina desde la mirada de los polinizadores. </p>
          </div>
          <div className={style.textoPropositos}>
            <Image src="/images/image 20.png" alt="" width={50} height={50}/>
            <p>Practicar una apicultura agroecológica (Apiarios pequeños con refugios para polinizadores) respetuosa e inclusiva con los Polinizadores Nativos.</p>
          </div>
        </section>
      </div>
     </main>
  )
}
