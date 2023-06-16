import './MoneyTransfers.css'

const MoneyTransfers = (props) => {
    let betragNeu;

    function umformung () {
        betragNeu = props.transaktion.betrag.toString();
        betragNeu = betragNeu.replace(".", ",");
        // console.log(betragNeu);
        return betragNeu;
    }

    umformung();

    return (
        <article style={props.done ? {display: "block"} : {display: "none"}}>
            <div>
            <h4>{props.transaktion.empfaenger}</h4>
            <h4>- {betragNeu} €</h4>
            </div>
            <p>{props.transaktion.iban}</p>
            <p>{props.transaktion.bic}</p>
            <p>{props.transaktion.verwendungszweck}</p>
            <p>{props.datum} {props.time[props.index]}</p>
        </article>
      );
}

export default MoneyTransfers;