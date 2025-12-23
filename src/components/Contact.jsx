import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const ServiceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(ServiceID, TemplateId, formRef.current, PublicKey)
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-white py-16 sm:py-24" id="contact">
      <div className="max-w-3xl mx-auto px-6">

        
        <div className="border-4 border-black h-[64px] sm:h-[74px] w-[280px] sm:w-[404px] flex items-center justify-center mx-auto mb-6 sm:mb-8">
          <h1 className="font-montserrat font-bold text-xl sm:text-2xl tracking-[0.3em]">
            CONTACT
          </h1>
        </div>

        
        <div className="flex items-center justify-center gap-4 mb-10 sm:mb-14">
          <span className="w-8 sm:w-10 h-px bg-black"></span>
          <span className="tracking-widest text-sm sm:text-base">↓↓↓</span>
          <span className="w-8 sm:w-10 h-px bg-black"></span>
        </div>

    
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-8 sm:gap-10"
        >

          
          <div className="border-b-4 border-l-4 border-black">
            <input
              type="text"
              name="from_name"
              required
              placeholder="ENTER YOUR NAME*"
              className="w-full bg-transparent py-3 pl-3 outline-none placeholder:text-gray-500 tracking-wide"
            />
          </div>

        
          <div className="border-b-4 border-l-4 border-black">
            <input
              type="email"
              name="from_email"
              required
              placeholder="ENTER YOUR EMAIL*"
              className="w-full bg-transparent py-3 pl-3 outline-none placeholder:text-gray-500 tracking-wide"
            />
          </div>

    
          <div className="border-b-4 border-l-4 border-black pb-2">
            <textarea
              rows="4"
              name="message"
              required
              placeholder="YOUR MESSAGE*"
              className="w-full bg-transparent py-3 pl-3 outline-none resize-none placeholder:text-gray-500 tracking-wide"
            />
          </div>

        
          <div className="flex justify-center mt-4 sm:mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`
                font-montserrat font-bold tracking-widest
                px-8 py-3 border-x-2 border-black
                transition-opacity
                ${loading ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
