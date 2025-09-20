import React from "react";

function Support() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">💬 Support & Help</h2>
      
      <div className="grid md:grid-cols-12 gap-6">
        {/* Left Column - Contact Form */}
        <div className="md:col-span-8">
          <form className="bg-white shadow-lg rounded-2xl p-6">
            <h5 className="text-blue-600 font-semibold mb-4">Contact Us</h5>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="font-bold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <label className="font-bold">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <label className="font-bold">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full border rounded-lg p-2 mt-1"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Right Column - Quick Support Info */}
        <div className="md:col-span-4">
          <div className="bg-gray-100 shadow rounded-2xl p-6">
            <h5 className="text-center text-gray-700 font-semibold mb-4">
              📌 Quick Support Info
            </h5>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>📞 Helpline: +91 98765 43210</li>
              <li>📧 Email: support@sportsapp.com</li>
              <li>💬 Chat: Available 9 AM - 8 PM</li>
              <li>📍 Address: Sports Talent Hub, Chennai, India</li>
              <li>⚡ Response Time: Within 24 hours</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-2xl mt-6 p-4">
            <h5 className="text-center text-gray-600 font-semibold mb-4">
              🔔 FAQs
            </h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>❓ How do I update my profile?</li>
              <li>❓ How can I join new training programs?</li>
              <li>❓ Where can I see my achievements?</li>
              <li>❓ How do I reset my password?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
