
function Contact() {
  return (
    <div>
      <div className="text-2xl justify-center text-center p-10">Contact us</div>
      <div>
        <form action="" className="flex justify-center">
          <div className=" flex flex-col items-center w-96 justify-center border-2">
            <div className="flex flex-col">
              <label>Name</label>
              <input type="text"  placeholder="Enter your name" className="border-2 p-1 rounded-md w-full border-blue-950"/>
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input type="email" className="border-2 p-1 rounded-md border-blue-950 px-7" name="email" id="email" />
            </div>
            <div className="flex flex-col">
              <label>Message</label>
              <textarea name="message" id="message" cols={30} className="border-2 border-blue-950" rows={10}></textarea>
            </div>
            <button type="submit" className="m-5 px-3 py-1 rounded-md border-2 border-blue-950">Submit</button>
          </div>    
        </form>
      </div>
    </div>
  )
}

export default Contact