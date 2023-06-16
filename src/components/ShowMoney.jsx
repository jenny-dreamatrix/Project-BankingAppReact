const ShowMoney = (props) => {
    let kontostandNeu;

    function umformung () {
        kontostandNeu = props.kontostand.toString();
        kontostandNeu = kontostandNeu.replace(".", ",");
        // console.log(kontostandNeu);
        return kontostandNeu;
    }

    umformung();

    return (  
        <>
        <h3>{kontostandNeu} €</h3>
        </>
    );
}
 
export default ShowMoney;