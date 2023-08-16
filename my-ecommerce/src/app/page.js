import Image from 'next/image';
import style from './page.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={style.inicio}>
			<section id={style.Natural_apicola} className={style.section_productos}>
				<h3 className={style.tituloproducto}>Nuestros productos</h3>
				<div className={style.container_prod}>
					<div className={style.carta_prod}>
						<h5 className={style.titulo_item}>Propóleo en spray </h5>
						<Image
							src="/images/PropoleoSpray_1.jpg"
							className={style.img_item}
							width={190}
							height={240}
						/>
						<div className={style.capa}>
							<h3>Propóleo en spray </h3>
							<p>
								Formulado para aliviar los dolores de garganta producidos por la
								tos o irritación
							</p>
							<Link href="/paginaEcommerce/Productos/productos-1.html">
								<button>Agregar al carro</button>
							</Link>
						</div>
						<h5 className={style.precio_item}>$4.000</h5>
					</div>
					<div className={style.carta_prod}>
						<h5 className={style.titulo_item}>Propóleo en tintura </h5>
						<Image
							src="/images/PropoleoSpray_1.jpg"
							className={style.img_item}
							width={190}
							height={240}
						/>

						<div className={style.capa}>
							<h3>Propóleo en tintura </h3>
							<p>
								Propoleo en estado puro disuelto en alcohol, sirve para hacer
								gárgaras ante infecciones bucales, faringeas, laringeas
								(amigdalitis)
							</p>
							<button>Agregar al carro</button>
						</div>
						<h5 className={style.precio_item}>$3.500</h5>
					</div>
					<div className={style.carta_prod}>
						<h5 className={style.titulo_item}>Polen granulado (100gr)</h5>
						<img
							src="/images/PropoleoSpray_1.jpg"
							className={style.img_item}
							width={190}
							height={240}
						/>
						<div className={style.capa}>
							<h3>Polen granulado </h3>
							<p>
								Polen granulado de flores del territorio Araucanía Andina
								recolectado por abejas
							</p>
							<button>Agregar al carro</button>
						</div>
						<h5 className={style.precio_item}>$3.500</h5>
					</div>
				</div>
			</section>

			<section className={`${style.contenedor} ${style.sobre_nosotros}`}>
				<h2 className={style.tituloNosotros}> Sobre Nosotros </h2>
				<div className={style.contenedor_sobre_nosotros}>
					<Image
						src="/images/fotoFamiliar.jpg"
						alt=""
						className={style.imagen_about_us}
						width={100}
						height={300}
					/>
					<div className={style.contenido_textos}>
						<p>
							Somos un emprendimiento familiar, que busca a través de la
							práctica de la apicultura lograr una soberanía económica y de
							autoabastecimiento para nuestra alimentación y el cuidado de la
							salud, practicando una apicultura Agroecológica que respeta y pone
							en valor a los polinizadores nativos, buscando la regeneración de
							la biodiversidad del territorio.
						</p>
						<p>
							{' '}
							Para ello ofrecemos productos que mezclan frutos silvestres y
							hierbas medicinales de la Araucanía Andina con materias primas
							extraídas desde nuestras colmenas de abejas (miel, polen,
							propoleos, jalea real, cera, etc.), ubicadas en Cunco región de la
							Araucanía a los pies del Volcán Llaima.
						</p>
					</div>
				</div>
			</section>

			<div className={style.contenedor_prposito}>
				<div className={style.tituloPropositos}>
					<h1>Nuestros propositos</h1>
				</div>
				<section className={style.propositos}>
					<div className={style.textoPropositos}>
						<Image src="/images/image 19.png" alt="" width={50} height={50} />
						<p>
							Ofrecer una solución para el cuidado de su salud con productos
							naturales desde la Araucanía Andina, origen local.{' '}
						</p>
					</div>
					<div className={style.textoPropositos}>
						<Image src="/images/image 18.png" alt="" width={50} height={50} />
						<p>
							Regenerar la biodiversidad del territorio de Araucanía Andina
							desde la mirada de los polinizadores.{' '}
						</p>
					</div>
					<div className={style.textoPropositos}>
						<Image src="/images/image 20.png" alt="" width={50} height={50} />
						<p>
							Practicar una apicultura agroecológica (Apiarios pequeños con
							refugios para polinizadores) respetuosa e inclusiva con los
							Polinizadores Nativos.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
