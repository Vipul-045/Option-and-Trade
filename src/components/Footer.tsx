import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="border rounded-xl m-10 shadow-xl border-slate-400">
            <div className="p-5 flex justify-between">
                <div className="text-2xl font-semibold">
                    <Link to='/'>Option and Trade Pvt Ltd</Link></div>
                <div className="pr-10"><Link to="/Aboutus">About us</Link></div>
            </div>
            <hr className="mx-20" />
            <div className="flex justify-center p-5">C 2025 Option and Trade Private Limited. All Rights Reserved</div>
        </div>
    )
}

export default Footer