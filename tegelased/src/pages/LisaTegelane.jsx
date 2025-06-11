import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

export default function LisaTegelane() {
    const [sonum, uuendaSonum] = useState("")
    const nimiRef = useRef();

    function lisaUusTegelane() {
        if (nimiRef.current.value === "") {
            uuendaSonum("Tühja nimetusega ei saa sisestada!")
        } else {
            uuendaSonum("Tegelane lisatud: " + nimiRef.current.value);
        }
    }

    return(
        <div>
            <div>{sonum}</div>
            <label>Tegelase nimi</label><br />
            <input ref={nimiRef} type="text" /> <br />
            <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
        </div> );
}
