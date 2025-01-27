const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content rounded mt-10 p-10">
            <div className="flex justify-center flex-col items-center mb-10 gap-y-4">
            <h1 className="text-4xl font-bold">Gadget Heaven</h1>
            <p className="text-xl"> Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className="mb-5" />
            {/* First Footer Section */}
            <div className="footer flex justify-between flex-wrap  gap-10">
                <nav>
                    {/* <h1>    </h1> */}
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery </a>
                    <a className="link link-hover"> Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us </a>
                    <a className="link link-hover">Careers </a>
                    <a className="link link-hover">Contact</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
