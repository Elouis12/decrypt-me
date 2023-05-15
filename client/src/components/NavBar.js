import lockIcon from "../lock_icon.png"
let NavBar = ()=>{

    return(

        /* NAV BAR */
        <nav className={"container mx-auto p-6 max-w-4/5"}>

            {/* FLEX CONTAINER */}
            <div className={"flex items-center justify-between"}  >

                {/* LOGO */}
                <div className="pt-2">
                    <img width={40} src={lockIcon} alt={"logo"}/>
                </div>

                {/* MENU ITEMS */}
                <div className="hidden space-x-6 md:flex ">
                    <a href="#" className={"p-2 rounded-md shadow-md hover:text-veryDarkBlue"}>Pricing</a>
                    <a href="#" className={"p-2 rounded-md shadow-md hover:text-darkGrayishBlue"}>Product</a>
                    <a href="#" className={"p-2 rounded-md shadow-md hover:text-darkGrayishBlue"}>About</a>
                    <a href="#" className={"p-2 rounded-md shadow-md hover:text-darkGrayishBlue"}>Careers</a>
                    <a href="#" className={"p-2 rounded-md shadow-md hover:text-darkGrayishBlue"}>Community</a>

                </div>


                {/* BUTTON */}
                <a href="" className={"hidden md:block p-3 px-6 pt-2 text-white bg-black rounded-full baseline hover:bg-darkGrayishBlue"}>Get Started</a>

            </div>

        </nav>
    );
}

export default NavBar;

