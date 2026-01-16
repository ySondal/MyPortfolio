import { useEffect, useState } from "react";

export default function ContactForm() {
  const [mailVisitor,setMailVisitor]=useState("ratovoniainatokindraibedalson@gmail.com")
  const [MessageVisitor,setMessageVisitor]=useState(" does not exist or is empty. Please check your content config file for errors.  does not exist or is empty. Please check your content config file for errors.")


//-------------------------------------


  useEffect(() => {
    const showFormBtn = document.getElementById("showFormBtn");
    const formWrapper = document.getElementById("formContainerWrapper");
    const formContainer = document.getElementById("formContainer");
    const form = document.getElementById("contactForm");
    const success = document.getElementById("successMessage");
    const error = document.getElementById("errorMessage");

    if (!showFormBtn) return;

    showFormBtn.addEventListener("click", () => {
      formWrapper?.classList.remove("hidden");
      success?.classList.add("hidden");
      error?.classList.add("hidden");
    });

    document.addEventListener("click", (e) => {
      const isClickInside =
        formContainer?.contains(e.target) || showFormBtn?.contains(e.target);
      if (!isClickInside) {
        formWrapper?.classList.add("hidden");
      }
    });

    form?.addEventListener("submit", async (e) => {
      e.preventDefault();
      success?.classList.add("hidden");
      error?.classList.add("hidden");
      formWrapper.classList.add('hidden')

        const formData = { pseudo: nameVisitor,
                            email: mailVisitor,
                            sms_content: MessageVisitor, }
      console.log(formData)
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        success?.classList.remove("hidden");
      } else {
        error?.classList.remove("hidden");
      }
    });
  }, []);

  return (
    <>
      <button
        id="showFormBtn"
        title="contacter moi"
        className=" bg-base-300 fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-2xl  shadow-black transition-all duration-300 text-white p-3 shadow-md "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#FF3F6DD8]"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <defs>
            <mask id="ipTMessage0">
              <g
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              >
                <path
                  fill="#555555"
                  d="M44 24c0 11.046-8.954 20-20 20H4V24C4 12.954 12.954 4 24 4s20 8.954 20 20"
                ></path>
                <path d="M14 18h18m-18 8h18m-18 8h10"></path>
              </g>
            </mask>
          </defs>
          <path
            fill="currentColor"
            d="M0 0h48v48H0z"
            mask="url(#ipTMessage0)"
          ></path>
        </svg>
      </button>

      <div id="formContainerWrapper" className="hidden fixed inset-0 z-[30]">
        <div
          id="formContainer"
          className="absolute bottom-24 right-8 p-2 bg-base-300 rounded-[4px] shadow-md  w-80 lg:w-[400px]"
        >
          <fieldset className="fieldset border  rounded-box w-xs border  bg-base-200 p-4 shadow-sm shadow-black">
            <legend className="fieldset-legend">Contacter moi</legend>
            <form action="https://formsubmit.co/0b31c1ddd40f84a8f03d31e78062d58d"
              method="POST" >
              <label className="input mb-3">
                <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                <input type="text" className="grow" placeholder="mail..."  name="email" required />
              </label>
            
              <label className="block mb-2">
              <textarea placeholder="Votre message...." className="textarea textarea-md" name="message"  required></textarea>
              </label>

              <button className="btn bg-white text-black border-[#e5e5e5]" type="submit">
                
                Send our Email
              </button>
            </form>
       </fieldset>
        </div>
      </div>
    </>
  );
}





/*

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [nameVisitor,setNameVisitor]=useState("Dalson")
  const [mailVisitor,setMailVisitor]=useState("ratovoniainatokindraibedalson@gmail.com")
  const [MessageVisitor,setMessageVisitor]=useState(" does not exist or is empty. Please check your content config file for errors.  does not exist or is empty. Please check your content config file for errors.")


//-------------------------------------
const HandelChange=(e)=>{

}

  useEffect(() => {
    const showFormBtn = document.getElementById("showFormBtn");
    const formWrapper = document.getElementById("formContainerWrapper");
    const formContainer = document.getElementById("formContainer");
    const form = document.getElementById("contactForm");
    const success = document.getElementById("successMessage");
    const error = document.getElementById("errorMessage");

    if (!showFormBtn) return;

    showFormBtn.addEventListener("click", () => {
      formWrapper?.classList.remove("hidden");
      success?.classList.add("hidden");
      error?.classList.add("hidden");
    });

    document.addEventListener("click", (e) => {
      const isClickInside =
        formContainer?.contains(e.target) || showFormBtn?.contains(e.target);
      if (!isClickInside) {
        formWrapper?.classList.add("hidden");
      }
    });

    form?.addEventListener("submit", async (e) => {
      e.preventDefault();
      success?.classList.add("hidden");
      error?.classList.add("hidden");
      formWrapper.classList.add('hidden')

        const formData = { pseudo: nameVisitor,
                            email: mailVisitor,
                            sms_content: MessageVisitor, }
      console.log(formData)
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        success?.classList.remove("hidden");
      } else {
        error?.classList.remove("hidden");
      }
    });
  }, []);

  return (
    <>
      <button
        id="showFormBtn"
        title="contacter moi"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-2xl hover:bg-primary/20 transition-all duration-300 text-white p-3 shadow-xl bg-primary/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#FF3F6DD8]"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <defs>
            <mask id="ipTMessage0">
              <g
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              >
                <path
                  fill="#555555"
                  d="M44 24c0 11.046-8.954 20-20 20H4V24C4 12.954 12.954 4 24 4s20 8.954 20 20"
                ></path>
                <path d="M14 18h18m-18 8h18m-18 8h10"></path>
              </g>
            </mask>
          </defs>
          <path
            fill="currentColor"
            d="M0 0h48v48H0z"
            mask="url(#ipTMessage0)"
          ></path>
        </svg>
      </button>

      <div id="formContainerWrapper" className="hidden fixed inset-0 z-[30]">
        <div
          id="formContainer"
          className="absolute bottom-24 right-8 bg-base-300 p-4 rounded-[4px] shadow-md shadow-[#FF3F6DD8] w-80 lg:w-[400px]"
        >
          

          <p id="successMessage" className="hidden text-green-600 mt-2">
           Message envoyé avec succès !
          </p>
          <p id="errorMessage" className="hidden text-red-600 mt-2">
             Une erreur est survenue.
          </p>
        </div>
      </div>
    </>
  );
}
*/