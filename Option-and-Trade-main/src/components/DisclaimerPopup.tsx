// src/components/DisclaimerPopup.tsx
import { useState } from "react";

const DisclaimerPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAccept = () => {
    setIsVisible(true);
    localStorage.setItem("disclaimerAccepted", "true");
  };

  if (!isVisible) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-lg text-center font-bold mb-2">Disclaimer</h2>
          <p className="mb-4">

            • Option and Trade Financial - Do not provide any Guaranteed Return or Profit Sharing. <br />
            • Option and Trade Financial - Do not Provide Any Service which is not mentioned in our company websites. <br />
            • In case of any person sell such kind of service which you didn't find on our websites so you can call us on -@ +91 <br />
            • Investment is Stock market in Equity, Commodity Markets are subject to Market Risk. <br />
            • We want to suggest to take your own risk as market is risky so do not trade without any stop loss. <br />
            Our research and recommendations rely on publicly available information and proprietary methodologies. These services are intended for personal use only and should not be shared or redistributed. <br />
            Please note that all investments carry market risks. The past performance of research or recommendations does not guarantee future results. Clients should assess their risk tolerance and use their judgment before acting on any recommendations. We are not liable for any losses that investors may incur. <br />
            The Research Analyst shall not be responsible for any loss to the investors. <br />
            <a href="/privacy-policy" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </p>
          <button
            onClick={handleAccept}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            I Accept
          </button>
        </div>
      </div>
    );
  };
}

export default DisclaimerPopup;