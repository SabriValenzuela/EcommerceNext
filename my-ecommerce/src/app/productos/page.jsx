import React from "react";
import style from "./productos.module.css"
import Image from "next/image";



export default function page() {
    const productos = [{
        producto_nombre: "Inmunapis" ,
        producto_precio: 6990 ,
        producto_descripcion: "Formulado científicamente para fortalecer tus defensas de manera natural, evitando y aliviando las enfermedades provocados por virus estacionales como resfrío común, influenza, faringitis, bronquitis, entre otros"
        
    }, 
    {
        producto_nombre: "IApicolon" ,
        producto_precio: 6990 ,
        producto_descripcion: "Hecho científicamente para fortalecer tus defensas de manera natural, evitando y aliviando las enfermedades provocados por virus estacionales como resfrío común, influenza, faringitis, bronquitis, entre otros"
    },
    {
        producto_nombre: "Propoleo en espray" ,
        producto_precio: 4000 ,
        producto_descripcion: "Hecho científicamente para fortalecer tus defensas de manera natural, evitando y aliviando las enfermedades provocados por virus estacionales como resfrío común, influenza, faringitis, bronquitis, entre otros"
    }]

    return (<>
        {productos.map((producto,index) => (
            <div key ={index}> <Producto pers={producto}/>
            <Card pers={producto}/></div>))}
            </>)
       {/*  <div>
  <section id="Nutracéuticos">
    <h3>Nutracéuticos</h3>
    <div className={style.container_prod}>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Inmunapis </h5>
        <img src="img/NeutraceuticoInmunapis_3.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Inmunapis</h3>
          <p>
            Formulado científicamente para fortalecer tus defensas de manera natural, evitando y aliviando las enfermedades provocados por virus estacionales.
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$6.990</h5>
      </div>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Apicolon </h5>
        <img src="img/NeutraceuticoApicolon_3-ed.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Apicolon </h3>
          <p>
            Formulado cientificamente para tratar úlceras gástricas, protegiendo su sistema digestivo de malestares provocados por H. Pylori, aliviando los reflujos, ardor estomacal y gastritis.
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$6.990</h5>
      </div>
    </div>
  </section>
  <section id="Natural_apicola">
    <h3>Natural apícola</h3>
    <div className={style.container_prod}>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Propóleo en spray </h5>
        <img src="img/PropoleoSpray_1.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Propóleo en spray </h3>
          <p>
            Formulado para aliviar los dolores de garganta producidos por la tos o irritación
          </p>
          <a href="/paginaEcommerce/Productos/productos-1.html">
            <button>Agregar al carro</button>
          </a>
        </div>
        <h5 className={style.precio_item}>$4.000</h5>
      </div>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Propóleo en tintura </h5>
        <img src="img/PropoleoSpray_1.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Propóleo en tintura </h3>
          <p>
            Propoleo en estado puro disuelto en alcohol, sirve para hacer gárgaras ante infecciones bucales, faringeas, laringeas (amigdalitis)
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$3.500</h5>
      </div>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Polen granulado (100gr)</h5>
        <img src="img/PropoleoSpray_1.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Polen granulado </h3>
          <p>
            Polen granulado de flores del territorio Araucanía Andina recolectado por abejas
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$3.500</h5>
      </div>
    </div>
  </section>
  <section id="Natural_herbal">
    <h3>Natural herbal</h3>
    <div className={style.container_prod}>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Gotas de variedades de hierbas medicinales </h5>
        <img src="img/Gotasrelajantes_1.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Gotas de variedades de hierbas medicinales </h3>
          <p>
            Gotas de hierbas medicinales para coayudar al tratamiento de distintas afecciones (Salvia-Manzanilla, Melissa-Paz y Flora)
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$4.000</h5>
      </div>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Gotas relajantes e inductoras del sueño</h5>
        <img src="img/Gotastranquilizantes_2.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Gotas relajantes e inductoras del sueño</h3>
          <p>
            Gotas de hierbas medicinales, para tratar la ansiedad permitiendo inducir el sueño de manera gradual
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.titulo_item}>$4.000</h5>
      </div>
    </div>
  </section>
  <section id="Miel-agroecologica">
    <h3>Miel agroecológica</h3>
    <div className={style.container_prod}>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Miel pura (500gr)</h5>
        <img src="img/Mielabeja200gr_4.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Miel pura</h3>
          <p>
            Producida respetando los ciclos naturales de vida en las abejas y con cuidados ecológicos y amigables con el medio ambiente, favoreciendo así a los polinizadores locales y la flora 
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$4.500</h5>
      </div>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Miel pura (250gr)</h5>
        <img src="img/Mielabeja200gr_4.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Miel pura</h3>
          <p>
            Producida respetando los ciclos naturales de vida en las abejas y con cuidados ecológicos y amigables con el medio ambiente, favoreciendo así a los polinizadores locales y la flora 
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$2.500</h5>
      </div>
    </div>
  </section>
  <section id="Jabones">
    <h3>Jabones</h3>
    <div className={style.container_prod}>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Jabón miel, Maqui y lemon (Und)</h5>
        <img src="img/Jabones+lufa_2.jpg" className={style.img_item} /> 
        <div className={style.capa}>
          <h3>Jabón miel Maqui(gránulos) y lemon grass </h3>
          <p>
            Jabon de tocador natural con base de aceite de coco, especial para pieles secas o maltratadas por el día a día
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$1.500</h5>
      </div>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Jabón miel Maqui y canela (Und). </h5>
        <img src="img/Jabones+lufa_3.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Jabón miel Maqui(gránulos) y canela </h3>
          <p>
            Jabon de tocador natural con base de aceite de coco, especial para pieles secas o maltratadas por el día a día
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$1.500</h5>
      </div>
    </div>
  </section>
  <section id="Souvenirs">
    <h3>Souvenirs</h3>
    <div className={style.container_prod}>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Vela Cera de abeja Panal</h5>
        <img src="img/VelaNatural_3.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Propóleo en tintura </h3>
          <p>
            Vela de cera de abejas 100% natural sin aditivos, ayuda a limpiar los ambientes
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$4.500</h5>
      </div>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Llaveros de polinizadores nativos </h5>
        <img src="img/Llavero_3.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Llaveros de polinizadores nativos </h3>
          <p>
            Llaveros hechos por manos de mujeres de Cunco, representan la diversidad de polinizadores que existen en el territorio
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$1.500</h5>
      </div>
      <div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Vela Cera de abeja hexagonal </h5>
        <img src="img/VelaNatural_3.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Vela Cera de abeja hexagonal </h3>
          <p>
            Vela de cera de abejas 100% natural sin aditivos, ayuda a limpiar los ambientes
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$3.000</h5>
      </div>
    </div>
  </section>
</div> */}
        
    
}