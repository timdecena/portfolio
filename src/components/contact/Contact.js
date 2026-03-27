import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "../common/SectionHeading";
import ContactLeft from "./ContactLeft";
import Reveal from "../motion/Reveal";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (event) => {
    event.preventDefault();

    if (username === "") {
      setErrMsg("Username is required!");
      return;
    }
    if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      return;
    }
    if (email === "") {
      setErrMsg("Please give your Email!");
      return;
    }
    if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
      return;
    }
    if (subject === "") {
      setErrMsg("Please give your Subject!");
      return;
    }
    if (message === "") {
      setErrMsg("Message is required!");
      return;
    }

    try {
      await emailjs.send(
        "service_spgzx8v",
        "template_2pki9ue",
        {
          name: username,
          phone: phoneNumber,
          email,
          title: subject,
          message,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: "2uUiCZVa803vwxzoD",
        }
      );

      setSuccessMsg(
        `Thank you dear ${username}, your message has been sent successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("FAILED...", error);
      setSuccessMsg("");
      setErrMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading title="Contact" des="Contact With Me" align="center" />
      <div className="flex flex-col gap-8 lgl:flex-row">
        <ContactLeft />
        <Reveal className="w-full lgl:w-[65%]" delay={0.08}>
          <Card className="h-full">
            <CardContent className="p-6 lgl:p-8">
              <form onSubmit={handleSend} className="flex flex-col gap-6">
                {errMsg && (
                  <p className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-center text-sm tracking-wide text-orange-300">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-sm tracking-wide text-green-300">
                    {successMsg}
                  </p>
                )}

                <div className="grid gap-6 lgl:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                      Your name
                    </label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={contactInputClass(errMsg === "Username is required!")}
                      type="text"
                      placeholder="Anthony Decena"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                      Phone Number
                    </label>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={contactInputClass(errMsg === "Phone number is required!")}
                      type="text"
                      placeholder="+63 900 000 0000"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={contactInputClass(errMsg === "Please give your Email!")}
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                    Subject
                  </label>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={contactInputClass(errMsg === "Please give your Subject!")}
                    type="text"
                    placeholder="Interview schedule"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                    Message
                  </label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={contactTextAreaClass(errMsg === "Message is required!")}
                    cols="30"
                    rows="8"
                    placeholder="Are you available for interview?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};

function contactInputClass(isError) {
  return `${isError ? "border-designColor/60 ring-2 ring-designColor/20" : ""} contactInput`;
}

function contactTextAreaClass(isError) {
  return `${isError ? "border-designColor/60 ring-2 ring-designColor/20" : ""} contactTextArea`;
}

export default Contact;
