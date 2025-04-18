import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="border rounded-xl m-10 shadow-xl border-slate-400">
            <div className="p-8 flex flex-col justify-between">
                <div className="text-2xl text-blue-900 font-bold">
                    <Link to='/'>Option and Trade Pvt Ltd</Link></div>
                    <div className="my-5 gap-2 text-base flex flex-col font-medium">
                <div className=""><Link to="/Aboutus">About us</Link></div>
                <div className=""><Link to="/Termsconditions">Terms and Conditions</Link></div>
                <div className=""><Link to="/Refundpolicy">Refund Policy</Link></div>
                </div>
            </div>
            <hr className="mx-20" />
            <div className="flex justify-center p-5">© 2025 Option and Trade Private Limited. All Rights Reserved</div>
        </div>
    )
}

export default Footer