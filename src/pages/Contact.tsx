
function Contact() {
  return (
    <div>
      <div className="text-2xl justify-center text-center p-10">Contact us</div>
      <div>
        <form action="">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col p-5">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" className="border-2 border-blue-950"/>
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="flex flex-col">
              <label>Message</label>
              <textarea name="message" id="message" cols={30} rows={10}></textarea>
            </div>
            <button type="submit">Submit</button>
          </div>    
        </form>
      </div>
    </div>
  )
}

export default Contact