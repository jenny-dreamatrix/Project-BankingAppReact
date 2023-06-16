import { useState } from "react";
import MoneyTransfers from "./MoneyTransfers";
import './AddRemoveMoney.css'

const AddRemoveMoney = (props) => {

    const [empfaenger, setEmpfaenger] = useState([''])
    const [iban, setIban] = useState([])
    const [bic, setBic] = useState([])
    const [betrag, setBetrag] = useState([])
    const [verwendungszweck, setVerwendungszweck] = useState([''])
    const [done, setDone] = useState(false)
    const [transaktionen, setTransaktionen] = useState([])
    const [time, setTime] = useState(['13:34'])
    const [datum, setDatum] = useState()
    let date = new Date();

    function getTime () {
        let hours = date.getHours();
        let minutes = date.getMinutes()
        minutes = minutes < 10 ? "0" + minutes : minutes;
        hours = hours < 10 ? "0" + hours : hours;
        return `${hours}:${minutes}`;
    }

    function getDate () {
        let day = date.getDate();
        let month = date.getMonth();
        month = month +1;
        let year = date.getFullYear(); 
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        return `${day}-${month}-${year}`
    }

    function ueberweisung () {
        event.preventDefault();
        props.setKontostand(prev => (Number(prev) - betrag).toFixed(2));
        setDone(true);
        setTransaktionen(prev => [{empfaenger, iban, bic, betrag, verwendungszweck}, ...prev])
        setTime(prev => [getTime(), ...prev])
        setDatum(getDate())
    }

    function showUeberweisung () {
        setDone(false);
    }

    return ( 
        <>
        <form style={done ? {display: "none"} : {}}>
        <label htmlFor="empfaenger">Empfänger*in</label>
        <input onChange={(e) => setEmpfaenger(e.target.value)} type="text" id="empfaenger" required/>

        <label htmlFor="iban">IBAN</label>
        <input onChange={(e) => setIban(e.target.value)} type="text" id="iban" required/>

        <label htmlFor="bic">BIC</label>
        <input onChange={(e) => setBic(Number(e.target.value))} type="number" id="bic"/>

        <label htmlFor="betrag">Betrag</label>
        <input onChange={(e) => setBetrag(Number(e.target.value))} type="number" id="betrag" required min={0} step={0.01}/>

        <label htmlFor="verwendungszweck">Verwendungszweck</label>
        <input onChange={(e) => setVerwendungszweck(e.target.value)} type="text" id="verwendungszweck" required/>

        <button onClick={ueberweisung} >Überweisen</button>
        </form>

        <p className="durchgefuehrt" style={done ? {display: "block"} : {display: "none"}}>Die Überweisung wurde heute um {time[0]} durchgeführt.</p>

        <button onClick={showUeberweisung} style={done ? {display: "block"} : {display: "none"}}>Neue Überweisung</button>

        <section className="transfers-sec" style={done ? {display: "block"} : {display: "none"}}>
        {transaktionen.map((transaktion, index) => <MoneyTransfers transaktion={transaktion} done={done} time={time} datum={datum} key={index} index={index} />)}
        </section>
        </>
     );
}
 
export default AddRemoveMoney;