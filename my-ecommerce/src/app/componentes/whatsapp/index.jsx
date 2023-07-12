import React from 'react'
import Link from 'next/link'
import {whatsapp} from 'react-icons-kit/fa/whatsapp'

export default function index() {
  return (
    <Link href="https://wa.me/5211234567890?text=Hola!%20me%20gustaría%20realizar%20una%20compra" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></Link>
  )
}
