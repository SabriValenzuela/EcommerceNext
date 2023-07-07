import React from 'react'
import style from './inicioSesion.module.css'

export default function InicioBlog() {
  return (
    <div className={style.caja}>
      <h1>Iniciar Sesión</h1>
      <form>
        <div className={style.form_group}>
          <label htmlFor="username" className={style.label}>Usuario:</label>
          <input type="text" id="username" name="username" placeholder="Ingresa tu usuario" className={style.input} />
        </div>
        <div className={style.form_group}>
          <label htmlFor="password" className={style.label}>Contraseña:</label>
          <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" className={style.input} />
        </div>
        <div className={style.form_group}>
          <button type="submit" className={style.button}>Iniciar Sesión</button>
        </div>
      </form>
    </div>
  )
}