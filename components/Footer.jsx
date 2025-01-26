import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="pt-16 pb-10 bg-primary text-white text-center">
            <p className="text-sm flex justify-center items-center gap-3">
                Made with{" "}
                <FaHeart className="text-accent" />{" "}
                by <span className="font-bold">Raj Venkat Reddy Mavuram</span>
            </p>
        </footer>
    );
};

export default Footer;
