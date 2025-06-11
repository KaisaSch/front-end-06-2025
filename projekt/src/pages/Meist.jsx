import React from 'react'
import { useState } from 'react'

export default function Meist() {
    const [message, m22raMessage] = useState("Vali mõni tegevus");

  return (
    <div>
        <div>{message}</div>
        <button onClick={() => m22raMessage("Selleks saada meile e-mail jobs@html-css.com")}>Kandideeri tööle</button>
        <button onClick={() => m22raMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal")}>Vaata meie töötajaid</button>
        <button onClick={() => m22raMessage("Ühenduse võtmiseks mine lehele Kontakt")}>Võta meiega ühendust</button>
    </div>
  )
}
