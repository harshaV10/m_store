import {RiDashboardFill} from "react-icons/ri";
import {FaStore, FaBook} from "react-icons/fa";
import {SiMarketo, SiCoinmarketcap} from "react-icons/si";
import {MdDashboardCustomize, MdOutlineContentPaste, MdReportProblem, MdComputer} from "react-icons/md"


const Menu = [
        {
            menu: "Dashboard",
            links: [
                {
                    title: "Profile",
                    sublinks: [
                        "Edit"
                    ]
                },
                {
                    title: "Info",
                }
            ], 
            icon: <RiDashboardFill />
        },
        {
            menu: "Sales", 
            links: null, 
            icon: <SiMarketo />
        },
        {
            menu: "Catalog", 
            links: null, 
            icon: <FaBook />
        },
        {
            menu: "Custom", 
            links: null, 
            icon: <MdDashboardCustomize />
        },
        {
            menu: "Marketing", 
            links: null, 
            icon: <SiCoinmarketcap />
        },
        {
            menu: "Content", 
            links: null, 
            icon: <MdOutlineContentPaste />
        },
        {
            menu: "Stores", 
            links: [
                {
                    title: "Settings",
                    sublinks: [
                        "All Stores",
                        "Configuration",
                        "Terms and Conditions",
                        "Order Status",
                    ]
                },
                {
                    title: "Inventory",
                    sublinks: ["Sources","Stocks"]
                },
                {
                    title: "Taxes",
                    sublinks: ["Paid"]
                },
                {
                    title: "Currency",
                    sublinks: ["Currency Rates", "Currency Symbols"]
                },
                {
                    title: "Attributes",
                    sublinks: ["Product", "Attribute Set", "Rating","Rating"]
                }
            ], 
            icon: <FaStore />
        },
        {
            menu: "Reports", 
            links: null, 
            icon: <MdReportProblem />
        },
        {
            menu: "System", 
            links: null, 
            icon: <MdComputer />
        },
];




export { Menu }