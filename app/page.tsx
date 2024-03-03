"use client"

import { useState } from "react";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const handlePhoneSubmit = async () => {
    // const success = await sendVerificationCode(phoneNumber);
    // if (success) {
    //   // Show success message or redirect
    //   console.log('Verification code sent successfully');
    // } else {
    //   // Handle error
    //   console.error('Failed to send verification code');
    // }
  };

  const handleVerificationCodeSubmit = async () => {
    // const success = await verifyCode('+1234567890', code); // Replace with the user's phone number
    // if (success) {
    //   // Show success message or redirect
    //   console.log('Verification successful');
    // } else {
    //   // Handle error
    //   console.error('Verification failed');
    // }
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Phone Verification</h1>
      <form onSubmit={handlePhoneSubmit} className="mt-4">
      <label htmlFor="phone" className="block mb-2">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter your phone number"
        className="border border-gray-300 rounded px-3 py-2 mb-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Send Verification Code
      </button>
    </form>
    {/* verification */}
    <form onSubmit={handleVerificationCodeSubmit} className="mt-4">
      <div className="">
      <label htmlFor="verificationCode" className="block mb-2">Verification Code:</label>
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Verify
      </button>
    </form>
    </div>
  );
}
