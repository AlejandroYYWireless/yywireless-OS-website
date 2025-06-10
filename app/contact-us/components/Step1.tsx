"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const contactItems = [
    {
      title: "WHOLESALE",
      description:
        "Looking to place a bulk order, request a quote, or start a partnership? Our wholesale team is ready to support you with pricing, logistics, and ongoing account care.",
    },
    {
      title: "CUSTOMER SERVICE",
      description:
        "Need help with an order? The fastest way to get support is through the platform where you made your purchase. But if you need help navigating that, we'll gladly assist.",
    },
    {
      title: "RETAIL",
      description:
        "Have questions about our storefronts or products on Amazon, eBay, Walmart, or any of our other retail sites? Reach out to our Customer Service team - we're here to help.",
    },
    {
      title: "CAREER",
      description:
        "Interested in joining the YYWireless team? Reach out here with hiring, HR, or recruiting-related questions. To see all our current openings for work, you can check out our Indeed page HERE.",
    },
    {
      title: "MARKETING",
      description:
        "For collaborations, press, media inquiries or co-branding opportunities, drop us a note. We're always open to strategic partnerships.",
    },
    {
      title: "GENERAL",
      description:
        "Not sure where to start? Send your question here and we'll route it to the right team.",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Form submission logic would go here
    toast.success("Successfully submitted! We'll be in touch shortly!", {
      position: "top-center",
    });

    // Reset form after submission
    setEmail("");
    setReason("");
  };

  const FormDialog = ({
    contactItem,
  }: {
    contactItem: { title: string; description: string };
  }) => (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col items-center space-y-3 cursor-pointer group rounded-none">
          <button className="w-full cursor-pointer max-w-[240px] h-12 bg-stone-500 rounded-none text-white font-bold text-base uppercase tracking-tight transition-colors duration-200">
            {contactItem.title}
          </button>
          <p className="text-lime-600 text-xs text-center max-w-[240px] leading-relaxed group-hover:text-lime-500 transition-colors duration-200">
            {contactItem.description}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-semibold">
            Contact {contactItem.title}
          </DialogTitle>
          <DialogDescription className="bg-muted/50 p-2 rounded-lg text-sm sm:text-base">
            Enter the form below with your email and reason for contacting and
            we will reach out to you very soon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <input
              className="p-3 w-full text-lg sm:text-xl border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent"
              type="email"
              placeholder="Enter email here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="bg-lime-500 h-[2px] rounded-full" />
          <div>
            <textarea
              className="text-lg sm:text-xl p-3 min-h-[120px] w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent resize-vertical"
              placeholder="Enter reason for contact..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-lime-500 w-full text-white cursor-pointer text-lg sm:text-xl font-semibold p-3 rounded-md
                     disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
                     transition-colors hover:bg-lime-600 focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
            disabled={!email || !reason}
          >
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen py-6 bg-[#1c1c1c] relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/contact/contactbg.png')",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1
            className="green-outline font-bold uppercase font-poppins 
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                         drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                         sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                         lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                         text-[#8aeb6a] mb-3"
          >
            Contact Us
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl mb-3
                       drop-shadow-[0px_0px_8px_rgba(138,253,106,0.7)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                       text-[#b7eb6a] font-poppins tracking-wider font-semibold"
          >
            Get in Touch With the Right Team
          </p>
          <p className="italic text-white text-sm sm:text-base max-w-xl mx-auto">
            Skip the inbox shuffle. Choose the right department so your message
            goes straight to the team who can help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl w-full mb-8">
          {contactItems.map((item, index) => (
            <FormDialog key={index} contactItem={item} />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <span className="text-xs font-normal uppercase text-white">
            © 2025 yywireless all rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
