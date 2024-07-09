import logo from '../assets/img/logo.jpg';

function Navs(){
    return(
        <>  
            
            <nav className="nav">
                <ul>
                    <li><a href="#"><img className='logo' src={logo} alt="logo..."/>
                    </a></li>
                    <li className='l1'><a href="#">Home</a></li>
                    <li className='l1'><a href="#">About</a></li>
                    <li className='l1'><a href="#">Menu</a></li>
                    <li className='l1'><a href="#">Reservation</a></li>
                    <li className='l1'><a href="#">Order Online</a></li>
                    <li className='l1'><a href="#">Login</a></li>
                </ul>
            </nav>
        </>
        )
}
export default Navs;