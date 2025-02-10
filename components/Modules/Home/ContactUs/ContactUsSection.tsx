"use client"

import React from "react";
import { Container } from "@/components/Container/Container";
import { useState } from "react";

interface FormData {
    name: string;
    service: string;
    budget: string;
    email: string;
    details: string;
  }
  

const ContactUsSection = () => {
  
    const [formData, setFormData] = useState<FormData>({
        name: '',
        service: '',
        budget: '',
        email: '',
        details: ''
      });
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      
      };
    
      return (
        <Container className="md:mt-24 ">
        <div className=" mx-auto p-6 md:p-12 min-h-screen h-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-calm mb-2 md:mb-6">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-normal mb-8">
              Let's <span className="text-calm">Collaborate</span>
            </h1>
          </div>
    
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline space-y-2 md:space-y-0 ">
              <label className="text-xl md:text-3xl text-foreground">My name is</label>
              <input
                type="text"
                placeholder="First and last name"
                className="mx-2 px-2 py-1 flex-grow border-b text-foreground md:text-2xl border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <label className="text-xl md:text-3xl text-foreground">and I'm interested in</label>
              <input
                type="text"
                placeholder="service name"
                className="mx-2 px-2 py-1 flex-grow border-b text-foreground md:text-2xl border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              />
            </div>
    
            <div className="space-y-2 md:flex items-center gap-6">
              <p className="text-xl md:text-3xl text-gray-800">My project budget is</p>
              <div className="flex flex-wrap gap-4 md:text-2xl">
                {['$200', '$250', '$350', '$500'].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      formData.budget === amount
                        ? 'border-foreground bg-foreground text-white'
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    onClick={() => setFormData({ ...formData, budget: amount })}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>
    
            <div className="flex flex-col md:flex-row md:items-baseline space-y-2 md:space-y-0">
              <label className="text-xl md:text-3xl text-gray-800">Please, contact me at</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="mx-2 px-2 py-1 flex-grow border-b md:text-2xl border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
    
            <div className="flex flex-col md:flex-row md:items-baseline space-y-2 md:space-y-0">
              <label className="text-xl md:text-3xl text-gray-800">Optionally, I'm sharing more:</label>
              <input
                type="text"
                placeholder="your project details"
                className="mx-2 px-2 py-1 flex-grow border-b md:text-2xl border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />
            </div>
    
            <div className="space-y-4">
              <button
                type="submit"
                className="bg-foreground text-white px-6 py-3 rounded flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              >
                <span>Send Request</span>
                <span className="ml-2">→</span>
              </button>
              
              <p className="text-sm text-gray-600">
                Or Email us here - <a href="mailto:www.growthlobbyagency@gmail.com" >www.growthlobbyagency@gmail.com</a>
              </p>
            </div>
          </form>
              </div>
              </Container>
  );
};

export default ContactUsSection;
