import React from 'react'
import { useState } from 'react'

export default function Meist() {
  const [kontakt, n2itaKontakt] = useState ("");

  return (
    <div>
      <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
      <div>Meie töötajad:</div>
      <br />

      <div>Arvo Pärt</div>
      <div>Uudisklippide taustamuusika</div>
      <button onClick={() => n2itaKontakt('+313123121')}>Võta ühendust</button>
      <br /><br />

      <div>Kelly Sildaru</div>
      <div>Püstolreporter</div>
      <button onClick={() => n2itaKontakt('+313123124')}>Võta ühendust</button>
      <br /><br />

      <div>Edward von Lõngus</div>
      <div>Uudiste kujundamine</div>
      <button onClick={() => n2itaKontakt('+3131231231')}>Võta ühendust</button>
      <br /><br />

      <div>Kerli Köiv</div>
      <div>Välisturgude spetsialist</div>
      <button onClick={() => n2itaKontakt('+3132132132')}>Võta ühendust</button>
      <br /><br />
      { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  )
}
