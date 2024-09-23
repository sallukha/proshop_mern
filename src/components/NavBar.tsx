import { Link } from "react-router-dom"

const NavBar = () => {

    const routingItems = [
        {
            link: "/",
            title: "Home"
        },
        {
            link: "/about",
            title: "About"
        }, {
            link: "/contact",
            title: "Contact"
        }, {
            link: "/sign_up",
            title: "Sign in"
        }, {
            link: "/login",
            title: "Log in"
        }

    ]

    return (
        <div className="flex border justify-center items-center ">
            <ul className="flex gap-4 justify-center items-center">
                {
                    routingItems.map((item, index) => {
                        return (
                            <Link to={item.link} key={index}>
                                <li>{item.title}</li>
                            </Link>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default NavBar
