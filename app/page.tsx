"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSend, setIsCodeSend] = useState(false);
  const handlePhoneSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCodeSend(true);
    const res = await fetch("http://localhost:5000/twilio-sms/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleVerificationCodeSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/twilio-sms/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, otp: verificationCode }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Phone Verification</h1>
      <form onSubmit={handlePhoneSubmit} className="mt-4">
        <label htmlFor="phone" className="block mb-2">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="border border-gray-300 rounded px-3 py-2 mb-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Verification Code
        </button>
      </form>
      {/* verification */}
      {isCodeSend && (
        <form onSubmit={handleVerificationCodeSubmit} className="mt-4">
          <div className="">
            <label htmlFor="verificationCode" className="block mb-2">
              Verification Code:
            </label>
            <input
              type="text"
              id="verificationCode"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter the verification code"
              className="border border-gray-300 rounded px-3 py-2 mb-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Verify
          </button>
        </form>
      )}
    </div>
  );
}
