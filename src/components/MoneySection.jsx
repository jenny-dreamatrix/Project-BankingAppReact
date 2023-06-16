import { useState } from "react";
import AddRemoveMoney from "./AddRemoveMoney";
import ShowMoney from "./ShowMoney";
import './MoneySection.css';

const MoneySection = () => {
    const [kontostand, setKontostand] = useState([20335.21])

    return ( 
        <main>
            <h2>Kontostand</h2>

            <ShowMoney kontostand={kontostand} />
            <AddRemoveMoney setKontostand={setKontostand} />
        </main>
     );
}
 
export default MoneySection;