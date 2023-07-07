import React from 'react';
import style from './blogPublicaciones.module.css';
import Image from 'next/image';

export default function page() {
  return (
    <main>
      <section id="publicaciones-container" className={style.contenedores}>
        <h2>Mi blog</h2>
        <br />
        <div className={style.publicacion}>
          <div className={style.post_date}>2 de julio 2023</div>
          <h3>Análisis de laboratorios que validan el efecto terapéutico de Apicolon, un nutracéutico apícola en cápsulas desarrollado por Esencias del Llaima</h3>
          <Image className={style.img} src="/images/imgblog1.jpg" alt="Imagen de la publicación" width={500} height={400} />
          <p>En 2017, junto a mi compañera Cata y a Joel, mi amigo y socio fundador de Esencias del Llaima, propusimos el término "nutracéutico apícola". Al escucharlo, muchos nos miraron con cara de duda y sin entender de qué les estábamos hablando. Sin embargo, la definición de nutracéutico implica que es un alimento beneficioso para la salud y que tiene un valor preventivo o terapéutico. Por lo tanto, prácticamente todos los productos derivados de la colmena cumplen con esta definición.</p>
          <p>En Esencias del Llaima, vimos la oportunidad de mezclar productos de la colmena con hierbas medicinales y frutos silvestres para potenciar las propiedades nutracéuticas de nuestros productos. Impulsados por la idea de crear productos con propiedades más allá de lo nutricional, formulamos nuestro nutracéutico Apicolon. Esta formulación se basó en estudios científicos previos que caracterizaron propóleos de nuestro país y evaluaron su efectividad contra la bacteria Helicobacter pylori, que es el principal agente causante de úlceras gástricas y promotor del cáncer gástrico.</p>
          <p>Los estudios demostraron que los propóleos de la Araucanía y los Ríos tienen una gran capacidad bactericida contra H. pylori, sin dañar la flora intestinal. En Esencias del Llaima, producimos propóleo utilizando mallas captadoras y lo mezclamos con hierbas y frutos silvestres en proporciones científicamente calculadas. De esta manera, el consumo de nuestro producto ayuda a aliviar las molestias derivadas de la presencia de esta bacteria en el sistema digestivo.</p>
        </div>
        <br /><br />
        <div className={style.publicacion}>
        <div className={style.post_date}>1 de julio 2023</div>
          <h3>Tratamiento de residuos de las colmenas a través del vermicompostaje y sus beneficios para prevenir el pillaje</h3>
          <Image className={style.img} src="/images/imgblog2.jpg" alt="Imagen de la publicación" width={550} height={550} />
          <p>La generación de residuos por parte de grupos y poblaciones de individuos no es en sí un problema. El problema radica en la forma en que manejamos dichos residuos. Todos los seres vivos producen metabolitos secundarios que, para ellos, pueden parecer residuos, pero que en realidad son un valioso regalo para otros organismos. Un ejemplo claro de esto es el oxígeno que respiramos y que es emitido por las plantas. La naturaleza está llena de ejemplos donde estos supuestos residuos se convierten en elementos vitales para otros seres vivos. Como apicultores, reconocemos uno de estos metabolitos en el néctar, el cual es un metabolito secundario que las plantas utilizan para atraer agentes polinizadores y preservar su especie, a la vez que promueven cambios genéticos que favorecen una mejor supervivencia de la especie.</p>
          <p>En el caso de las colmenas, que se comportan como grupos de individuos, los residuos que se generan a partir de la limpieza de las celdas, los restos de células vegetales (polen) y los desechos de la vida dentro de la colmena (abejas muertas, restos de insectos, etc.) son aprovechados por pequeños insectos y microorganismos. Estos organismos encuentran en estos residuos un alimento exquisito y nutritivo, rico en vitaminas y minerales. Sin embargo, para los apicultores, estos residuos son considerados un problema debido a la importancia de mantener la higiene y la inocuidad en la producción de alimentos para consumo humano. Además, estos "manjares" atraen a otros insectos y microorganismos, lo que puede resultar en la propagación de contaminación y enfermedades dentro de la colmena. La humedad y los residuos generados por estos microorganismos pueden afectar la salud de las abejas Apis mellifera, y sabemos que cuanto menos compañía tengan las abejas, mejor será su vida y, por ende, su trabajo será más productivo.</p>
          <p>Teniendo en cuenta estos antecedentes, proponemos utilizar otros microorganismos beneficiosos para el medio ambiente en el manejo de estos residuos. Estos microorganismos generan un residuo que nos permite mejorar las condiciones del suelo. En Esencias del Llaima, en nuestros apiarios, utilizamos pisos sanitarios que nos permiten retirar los residuos producidos por las colmenas. Estos residuos se recolectan en baldes y se llevan a un proceso de compostaje llamado vermicompostaje, el cual es mediado por lombrices californianas. De esta manera, hemos mejorado la salud de las abejas y, por ende, la calidad de las materias primas que utilizamos en nuestros productos. Además, producimos un valioso vermicompost nutritivo que se utiliza en nuestros huertos y trasplantes.</p>
        </div>
      </section>
      <div className={style.container}>
        <button className={style.boton_ver_todas}>Ver todas las publicaciones</button>
        <button className={style.boton_ordenar_fecha}>Ordenar por fecha</button>
      </div>
    </main>

  )
}

