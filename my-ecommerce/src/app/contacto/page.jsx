import React from 'react';
import style from './contacto.module.css';
import Image from 'next/image';

export default function page() {
	return (
		<div className={style.flexcontainer}>
			<div className={style.c_formulario}>
				<h2>Contáctanos</h2>
				<h3>Escríbenos y tomaremos contacto contigo</h3>
				<form action="submeter-formulario.php" method="post">
					<label htmlFor="c_nombre" className={style.c_nombre}>
						Nombre<span className={style.obligatorio}>*</span>
					</label>
					<input
						type="text"
						name="introducir_nombre"
						id="c_nombre"
						required
						placeholder="Escribe tu nombre"
						className={style.nombre}
					/>

					<label htmlFor="c_email" className={style.c_email}>
						Email<span className={style.obligatorio}>*</span>
					</label>
					<input
						type="email"
						name="introducir_email"
						id="c_email"
						required="obligatorio"
						placeholder="Escribe tu Email"
						className={style.email}
					/>

					<label htmlFor="c_telefono" className={style.c_telefono}>
						Teléfono
					</label>
					<input
						type="tel"
						name="introducir_telefono"
						id="c_telefono"
						placeholder="Escribe tu teléfono"
						className={style.telefono}
					/>

					<label htmlFor="mensaje" className={style.c_mensaje}>
						Mensaje<span className={style.obligatorio}>*</span>
					</label>
					<textarea
						name="introducir_mensaje"
						id="mensaje"
						required="obligatorio"
						placeholder="Deja aquí tu comentario"
						defaultValue={''}
						className={style.mensaje}
					/>

					<button
						className={style.boton}
						type="submit"
						name="enviar_formulario"
						id="enviar"
					>
						<h4>Enviar</h4>
					</button>
				</form>
			</div>

			<section className={style.section_derecha}>
				<div className={style.imagen}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d99328.47236106246!2d-72.1224526!3d-38.9236401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96149f4d6d615275%3A0xff07cae9e0a474fe!2sEsencias%20del%20Llaima!5e0!3m2!1ses-419!2scl!4v1691112599131!5m2!1ses-419!2scl"
						className={style.mapa}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<span className={style.overlay}></span>
				</div>

				<div className={style.informacion}>
					<h4>Esencias del Llaima</h4>
					<h5>Faja 2000, Cunco, Araucanía, Chile</h5>
					<br />
					<h5>Hablemos</h5>
					<h5>Correo oscarcunco@gmail.com</h5>
					<h5>WhatsApp +569 93364492</h5>
				</div>
			</section>
		</div>
	);
}
