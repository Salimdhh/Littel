import Greek from "../assets/img/Greek salad.jpg";
import Bruch from '../assets/img/Bruschetta.jpg';
import Lemon from '../assets/img/Lemon dessert.jpg';
function Section(){
    return(
        <>
        <div className="div-sec0">
            <h1 className="h1-sec0">This weeks specials!</h1>
            <button className="btn-sec0 btn">Online Menu</button>
        </div>

        <section className="sec-rem">
            <article className="art-rem">
                <img className="img-rem" src={Greek} alt=""/>
                <div className="div-rem-sec">
                    <h2 className="h2-rem">Greek salad</h2>
                    <h6 className="hh-rem">$12.99</h6>
                </div>
                <p className="par-rem">
                    The famous greek salad of<br/>
                    crispy lettuce. peppers. Olives<br/>
                    and our Chicago style fota<br/>
                    cheese. garnished with<br/>
                    crunchy garlic and rosemary<br/>
                    croutons.
                </p>
                <h2 className="hp-rem">Order a deliery</h2>
            </article>

            <article className="art-rem">
                <img className="img-rem" src={Bruch} alt=""/>
                <div className="div-rem-sec">
                    <h2 className="h2-rem">Bruschetta</h2>
                    <h6 className="hh-rem">$5.99</h6>
                </div>
                <p className="par-rem">
                    Our Bruschetta is made from<br/>
                    grilled bread that has been<br/>
                    smeared with garlic and<br/>
                    seasaned with salt and olives<br/>
                    oil.
                </p>
                <h2 className="hp-rem">Order a deliery</h2>
            </article>

            <article className="art-rem">
                <img className="img-rem" src={Lemon} alt=""/>
                <div className="div-rem-sec">
                    <h2 className="h2-rem">Lemon Dessert</h2>
                    <h6 className="hh-rem">$5.00</h6>
                </div>
                <p className="par-rem">
                    This comes straight from<br/>
                    grandma's recipe book. every<br/>
                    last ingredient has been<br/>
                    sourced and is as authentic<br/>
                    as can be imagined.
                </p>
                <h2 className="hp-rem">Order a deliery</h2>
            </article>
        </section>
        </>
    )
}
export default Section;