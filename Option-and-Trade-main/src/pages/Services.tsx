import { Link } from "react-router"

function Services() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
            <div className="flex justify-center m-12 gap-4 cursor-pointer">
                <div className="shadow-lg hover:shadow-2xl border-gray-600 w-1/3 ">
                    <div className="font-semibold text-2xl pt-4 justify-center flex">Premium 37500/-</div>
                    <div className="text-md m-8">
                        <ul className="list-disc list-inside">
                            <li className="">
                                3month service
                            </li>
                            <li className="">
                                Get Two - Three research alert per day through Community. ( Depending on Market)
                            </li>
                            <li className="">
                                Get Two - Three research alert of Bank-nifty / nifty option per day.(Depending on Market)
                            </li>
                            <li className="">
                                Relationship Manager Support for Trade Alerts .
                            </li>
                            <li className="">
                                Get well researched target and stoploss in every research alert.
                            </li>
                            <li className="">
                                Get Two - Three research alerts of Fin-nifty / Sensex every Week.
                                ( Depending on Market)
                            </li>
                            <li className="">
                                Risk level :- High to very High
                            </li>
                            <li className="">
                                Package Exclusive GST Amount
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-gray-600 hover:shadow-2xl shadow-lg w-1/3 ">
                    <div className="font-semibold text-2xl justify-center pt-4 flex">Gold 67800/-</div>
                    <div className="text-md m-8">
                        <ul className="list-disc list-inside">
                            <li>
                                Half yearly package
                            </li>
                            <li>
                                Get Upto Four research alert per day through Community .(Depending on Market )
                            </li>
                            <li>
                                Get Two - Three research alert of Bank-nifty / nifty option per day.
                            </li>
                            <li>
                                Receive consultant support through a dedicated Relationship Manager, offering live assistance on trade alerts for three months.
                            </li>
                            <li>
                                Get Two - Three research alerts of Fin-nifty / Sensex/ MID-CAP/BANKEX every Week. ( Depending on Market)
                            </li>
                            <li>
                                Get well researched target and stoploss in every research alert.
                            </li>
                            <li>
                                Get Quality research alert.
                            </li>
                            <li>
                                Package Exclusive GST Amount
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-gray-600 hover:shadow-2xl shadow-lg w-1/3 ">
                    <div className="font-semibold text-2xl justify-center pt-4 flex">Platinum 105000/-</div>
                    <div className="m-8">
                        <ul className="list-disc list-inside">
                            <li>
                                Yearly Package
                            </li>
                            <li>
                                Customized Market Research & Trade Alerts – Personalized insights based on business needs.
                            </li>
                            <li>
                                Dedicated Relationship Manager – Priority support with expert guidance.
                            </li>
                            <li>
                                Institutional-Level Strategies – Exclusive trade setups for corporate clients and LLPs.
                            </li>
                            <li>
                                Flexible Subscription Plans – Daily, weekly, or monthly services tailored to business operations.
                            </li>
                            <li>
                                Advanced Risk Management – Custom stop-loss and hedging strategies for better capital protection.
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div>
                <div className="flex justify-center" >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        <a href="/Popupform">Contact us</a>
                    </button>
                </div>
                <div className="text-lg text-blue-950 hover:text-blue-400">
                    <Link to="/Termsconditions">Terms and Conditions</Link>
                </div>
            </div>
        </div>
    )
}

export default Services