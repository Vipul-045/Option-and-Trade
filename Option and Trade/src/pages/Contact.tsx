const PopupForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl font-sans font-semibold pt-8">Contact us</p>
      <div className=" p-8 rounded-lg shadow-2xl w-96 relative">

        <form action="" className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border-2 p-2 rounded-md w-full border-blue-950 focus:outline-none focus:border-blue-700"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 p-2 rounded-md w-full border-blue-950 focus:outline-none focus:border-blue-700"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              className="border-2 p-2 rounded-md w-full border-blue-950 focus:outline-none focus:border-blue-700"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Enter your message"
              rows={4}
              className="border-2 p-2 rounded-md w-full border-blue-950 focus:outline-none focus:border-blue-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;