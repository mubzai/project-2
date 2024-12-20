"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
const ShippingPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    shippingCharges: 10,
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!shippingInfo.firstName) newErrors.firstName = "First Name is required";
    if (!shippingInfo.lastName) newErrors.lastName = "Last Name is required";
    if (!shippingInfo.email) newErrors.email = "Email is required";
    if (!shippingInfo.address) newErrors.address = "Address is required";
    if (!shippingInfo.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{11}$/.test(shippingInfo.phone)) newErrors.phone = "Phone number must be 11 digits";
    
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(shippingInfo.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Prevent form submission

    if (!validateForm()) return; // If there are validation errors, don't proceed

    alert("Order placed successfully!");
    router.push("/orderdone"); // Navigate to the orderdone page
  };

  return (
    <div> <Heading/>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping Information</h1>
        <form className="space-y-4" onSubmit={handlePlaceOrder}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={shippingInfo.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300"
          />
          {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
          
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={shippingInfo.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300"
          />
          {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={shippingInfo.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300"
          />
          {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={shippingInfo.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300"
          />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
          
          <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
            <p>Shipping Charges:</p>
            <p className="text-gray-700">${shippingInfo.shippingCharges.toFixed(2)}</p>
          </div>
          
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 w-full"
          >
            Place Order
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingPage;
