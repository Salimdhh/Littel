import server from '../assets/img/1.jpg';
function Main(){
    return(
        <>
            <div className="reqtangle">
                <div className='cont'>
                    <h1 className='little'>Little Lemon</h1>
                    <h3 className='Chi'>Chicago</h3>
                    <p className='par'>
                        We are family owned<br/>
                        Moditerranean restaurant,<br/>
                        foucused on traditional<br/>
                        recipes served with a modern<br/>
                        twist.
                    </p>
                    <button className='btn-main btn'>Reserve a Table</button>
                </div>
                <div className='div-img'>
                    <img className='server' src={server} alt='server...'/>
                </div>
            </div>
        </>
    )
}

export default Main;