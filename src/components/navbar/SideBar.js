import { Link } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt } from "react-icons/fa"

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true)
    // const toggle = () => 
    const menuItems = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaThList />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "300px" : "55px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={() => { setIsOpen(!isOpen) }} />
                    </div>
                </div>
                {
                    menuItems.map((item, index) => {
                        return (
                            <Link to={item.path} key={index} className="link" activeClassName="active"  >
                                <div className="icon" >{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </Link>
                        )
                    })
                }
            </div>
            <main>{children}</main>
        </div >
    )
}

export default SideBar