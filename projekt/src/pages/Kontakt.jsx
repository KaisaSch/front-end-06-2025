import React from 'react'
import { useState } from 'react'

export default function Kontakt() {
    const [aadress, m22raAadress] = useState("Tallinn")
    const [telefon, m22raTelefon] = useState("5512345")
    const [email, m22raEmail] = useState("bla@baa.com")
    const [ingliseKeelne, m22raIngliseKeelne] = useState("ei");

    const ingliseks = () => {
        m22raAadress ("London")
        m22raEmail("london@london.com")
        m22raTelefon("12313444")
        m22raIngliseKeelne("jah")
    }

  return (
    <>
        <div>{aadress}</div>
        <div>{telefon}</div>
        <div>{email}</div>
        <button  onClick={ingliseks}>Muuda inglise keelseks</button>
        {ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
    </>
  )
}
