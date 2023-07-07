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
          
         {/*  <div className={style.fotosNosotros}>
            <div className={style.row}>
              <Image src="/images/areaAbejas.jpg" alt="" width={100} height={100} />
              <Image src="/images/productosBonitos.png" alt="" width={100} height={100}  />
              <Image src="/images/OscarApicultura1.jpg" alt="" width={100} height={100} />
            </div>
          </div> */}
          
          {/* <div className={style.apiturismo}> */}
           <div>
        <div className={style.container_all}>
          <input type="radio" id={1} name="image-slide" hidden />
          <input type="radio" id={2} name="image-slide" hidden />
          <input type="radio" id={3} name="image-slide" hidden />
          <input type="radio" id={4} name="image-slide" hidden />
          <input type="radio" id={5} name="image-slide" hidden />
          <input type="radio" id={6} name="image-slide" hidden />
          <input type="radio" id={7} name="image-slide" hidden />
          <input type="radio" id={8} name="image-slide" hidden />
          <input type="radio" id={9} name="image-slide" hidden />
          <input type="radio" id={1} name="image-slide" hidden />
          <div className={style.slide}>
            <div className={style.item_slide}>
              <Image src="/images/img1.png" width={500} height={350} />
            </div>
            <div className={style.item_slide}>
              <Image src="/images/img2.png" width={500} height={350}  />
            </div>
            <div className={style.item_slide}>
              <Image src="/images/img3.png" width={500} height={350}  />
            </div>
            <div className={style.item_slide}>
              <Image src="/images/img4.png" width={500} height={350}  />
            </div>
            <div className={style.item_slide}>
              <Image src="/images/img5.png" width={500} height={350}  />
            </div>
            <div className={style.item_slide}>
              <Image src="/images/img6.png" width={500} height={350} />
            </div>
            <div className={style.item_slide}>
              <Image src="/images/img7.png" width={500} height={350} />
            </div>
            <div className={style.item_slide}>
              <Image src="/images/img8.png" width={500} height={350} />
            </div>
            <div className={style.item_slide}>
              <Image src="/images/img9.png" width={500} height={350} />
            </div>
            <div className={style.item_slide}>
              <Image src="/images/img10.png"width={500} height={350}  />
            </div>
          </div>
          <div className={style.pagination}>
            <label className={style.pagination_item} htmlFor={1}>
              <Image src="/images//img1.png" width={500} height={350}  />
            </label>
            <label className={style.pagination_item} htmlFor={2}>
              <Image src="/images/img2.png" width={500} height={350}  />
            </label>
            <label className={style.pagination_item} htmlFor={3}>
              <Image src="/images/img3.png" width={500} height={350}  />
            </label>
            <label className={style.pagination_item}htmlFor={4}>
              <Image src="/images/img4.png" width={500} height={350}  />
            </label>
            <label className={style.pagination_item} htmlFor={5}>
              <Image src="/images/img5.png" width={500} height={350} />
            </label>
            <label className={style.pagination_item} htmlFor={6}>
              <Image src="/images/img6.png" width={500} height={350}  />
            </label>
            <label className={style.pagination_item}htmlFor={7}>
              <Image src="/images/img7.png" width={500} height={350} />
            </label>
            <label className={style.pagination_item} htmlFor={8}>
              <Image src="/images/img8.png" width={500} height={350} />
            </label>
            <label className={style.pagination_item} htmlFor={9}>
              <Image src="/images/img9.png" width={500} height={350} />
            </label>
            <label className={style.pagination_item} htmlFor={10}>
              <Image src="/images/img10.png" width={500} height={350} />
            </label>
          </div>
        </div>
        <div className={style.Visitas}>
          <h3 className={style.custom_title}>Apiturismo</h3>
          <br /><br />
          <h2>Información sobre las visitas guiadas</h2>
          <p>En Esencias del llaima, ofrecemos emocionantes y educativas visitas guiadas a nuestro eco apiario. Estas visitas te brindarán la oportunidad de sumergirte en el fascinante mundo de la apicultura agroecológica y experimentar de primera mano cómo trabajamos en nuestro eco apiario.</p>
          <p>Durante la visita, tendrás la oportunidad de aprender y reconocer a los diferentes habitantes de la colmena, incluyendo las obreras, los zánganos y la reina. Nuestros guías expertos te enseñarán sobre la importancia de cada uno de ellos en el funcionamiento de la colmena y cómo trabajan en armonía para mantener el equilibrio y la productividad del apiario.</p>
          <p>Además, podrás maravillarte con la increíble labor de las abejas como bioindicadoras del medio ambiente. Nuestros guías te explicarán cómo las abejas son sensibles a los cambios en su entorno y cómo su presencia y comportamiento pueden proporcionar valiosa información sobre las condiciones ambientales y la calidad del ecosistema en el que se encuentran las colmenas.</p>
          <p>Durante la visita, también tendrás la oportunidad de disfrutar de hermosos paisajes naturales mientras te adentras en nuestro eco apiario. Podrás observar la exuberante vegetación que rodea las colmenas y apreciar la interacción armoniosa entre las abejas y su entorno natural.</p>
          <p>Las visitas guiadas son una experiencia única que combina aprendizaje, diversión y conexión con la naturaleza. Te invitamos a unirte a nosotros en esta emocionante aventura y descubrir el apasionante mundo de la apicultura agroecológica en Esencias del llaima.</p>
          <p>Si estás interesado en nuestros servicios, por favor contáctanos <Link href="mailto:info@ejemplo.com?subject=Visita guiada por eco apiario Esencias del Llaima&body=Estimado Oscar, Esperando se encuentre bien, quisiera solicitar información acerca de las visitas guiadas del eco apiario de Esencias del LLaima.">aquí</Link>.</p>
        </div>
      </div>

   

            {/* <h1> Apiturismo</h1>
            <p>Ofrecemos servicios de visitas guiadas a nuestro ecoapiario y refugio de polinizadores lo que permite mostrar y poner en valor el trabajo de los polinizadores en la regeneración de la biodiversidad. Si te interesa visitarnos</p>
           
        {/*   <div className={style.fotosApiturismo}>
            <Image src="/images/abejasniña.jpg" className={style.fotosApiturismo} alt="" width={100} height={100}  />
            <Image src="/images/oscarConNiños2.jpg" className={style.fotosApiturismo} alt="" width={100} height={100} />
            <Image src="/images/abejasJardin.jpg" className={style.fotosApiturismo} alt="" width={100} height={100} />
          </div> */} 
        
      </section>

      )
    }