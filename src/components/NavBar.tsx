import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="flex border justify-center items-center ">
            <ul className="flex gap-4 justify-center items-center">


                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/about'}>
                    <li>About</li>
                </Link >
                <Link to={'/contact'}>
                    <li>Contact</li>
                </Link>
                <Link to={'/login'}>
                    <li>Login</li>
                </Link>
                <Link to={'/sign_up'}>
                    <li>SignUp</li>
                </Link>

            </ul>
        </div>
    )
}

export default NavBar
