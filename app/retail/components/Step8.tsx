import React from "react";

const Step8 = () => {
  return (
    <div className="relative min-h-screen py-8 bg-[#1c1c1c]">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/images/retail_page/faq.png')",
          }}
        />
      </div>

      <div className="relative items-center pt-8 flex flex-col text-center">
        <h1
          className="green-outline italic uppercase font-poppins 
                          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                          drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                          sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                          lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                          text-[#8aeb6a] text-center lg:text-left"
        >
          Frequently Asked Questions
        </h1>
        <p
          className="text-lg capitalize italic sm:text-xl px-4 md:text-2xl lg:text-3xl mt-4 mb-4 sm:mt-6
                       drop-shadow-[0px_0px_8px_rgba(138,253,106,0.7)] sm:drop-shadow-[0px_0px_14px_rgba(138,253,106,0.8)]
                       text-[#b7eb6a] font-poppins tracking-wider font-semibold"
        >
          Help us help you
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Question 1 */}
            <div className="flex flex-col gap-2">
              <p className="text-lime-500 font-medium">
                1. I have an issue with my order—how should I get help?
              </p>
              <p className="text-white text-sm leading-relaxed">
                Please contact us through the platform where you placed your
                order (Amazon, eBay, Walmart, etc.). Each platform requires
                sellers to respond within a specific timeframe, and messaging us
                directly there ensures your issue is tracked and resolved as
                fast as possible.
              </p>
            </div>

            {/* Question 2 */}
            <div className="flex flex-col gap-2">
              <p className="text-lime-500 font-medium">
                2. How fast do you respond to customer messages?
              </p>
              <p className="text-white text-sm leading-relaxed">
                We respond to all customer inquiries within the timeframes
                required by each platform—often much faster. Most messages are
                answered within 24 hours or less, 7 days a week.
              </p>
            </div>

            {/* Question 3 */}
            <div className="flex flex-col gap-2">
              <p className="text-lime-500 font-medium">
                3. What's the difference between Fulfilled by Amazon and
                Fulfilled by Store?
              </p>
              <p className="text-white text-sm leading-relaxed">
                • Fulfilled by Amazon (FBA): Amazon handles the packing,
                shipping, and returns.
                <br />
                • Fulfilled by Store (FBM): We ship directly from our warehouse.
                <br />• In both cases, your device is tested, certified, and
                backed by our quality standards.
              </p>
            </div>

            {/* Question 4 */}
            <div className="flex flex-col gap-2">
              <p className="text-lime-500 font-medium">
                4. What condition are your devices in?
              </p>
              <p className="text-white text-sm leading-relaxed">
                We sell certified pre-owned devices, clearly labeled by
                condition (Like New, Very Good, Good). Every phone is
                professionally tested, cleaned, and packaged for resale—no
                "flipping" or unverified returns.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Question 5 */}
            <div className="flex flex-col gap-2">
              <p className="text-lime-500 font-medium">
                5. How quickly will my order ship?
              </p>
              <p className="text-white text-sm leading-relaxed">
                Most orders ship same or next business day:
                <br />
                • FBA orders are shipped by Amazon from their warehouse.
                <br />• FBM and other marketplace orders are shipped directly by
                us.
              </p>
            </div>

            {/* Question 6 */}
            <div className="flex flex-col gap-2">
              <p className="text-lime-500 font-medium">
                6. What's your return policy?
              </p>
              <p className="text-white text-sm leading-relaxed">
                Return windows are set by each platform:
                <br />
                • Amazon/eBay: Typically 30 days
                <br />
                • Walmart: Platform-specific policies apply
                <br />• Returns must include the device and accessories in
                original condition. Please start your return through the
                platform where you ordered.
              </p>
            </div>

            {/* Question 7 */}
            <div className="flex flex-col gap-2">
              <p className="text-lime-500 font-medium">
                7. Do your devices come with a warranty?
              </p>
              <p className="text-white text-sm leading-relaxed">
                Yes—each platform has its own warranty structure, and we honor
                those terms. Please check your listing for details or message us
                through the platform if you need clarification.
              </p>
            </div>

            {/* Question 8 */}
            <div className="flex flex-col gap-2">
              <p className="text-lime-500 font-medium">
                8. Do you offer wholesale or bulk discounts?
              </p>
              <p className="text-white text-sm leading-relaxed">
                Yes! If you're buying for resale or bulk use, visit our
                [Wholesale page] or contact our sales team directly. Retail
                marketplace orders are not eligible for wholesale pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Contact */}
        <div className="text-center mt-12 pt-6">
          <p className="text-white text-sm">
            Don't see your question?
            <br />
            Reach out to us at:{" "}
            <span className="text-lime-500">cs@xywireless.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step8;
