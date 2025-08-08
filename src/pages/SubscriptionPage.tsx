
import React, { useState } from "react";
import PlanCard from "../components/PlanCard";
import Summary from "../components/Summary";
import { TypeAnimation } from 'react-type-animation';

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState("4 Month");

  const plans = [
    { title: "1 Month", total: 500, discount: "Save 5%" },
    { title: "3 Month", total: 2000, discount: "Save 10%" },
    { title: "4 Month", total: 1700, oldPrice: 2000, discount: "Save 15%" },
    { title: "12 Month", total: 1700, discount: "Save 10%" },
  ];

  return (
   
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-pink-400 via-yellow-100 to-purple-100">
  <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10">

    {/* LEFT: Image + Text */}
    <div className="order-1 flex flex-col items-center lg:items-start">
      {/* Large screen image */}
      <div className="hidden lg:flex justify-center mb-6">
        <img
          src="/early-childhood-education-Photoroom-removebg-preview.png"
          alt="Girl"
          className="w-[350px] xl:w-[400px] h-auto object-contain -mt-10"
        />
      </div>

      {/* Small screen image */}
      <div className="lg:hidden flex justify-center mb-4">
        <img
          src="/down-removebg-preview.png"
          alt="Girl"
          className="w-[280px] sm:w-[340px] md:w-[400px] h-auto object-contain"
        />
      </div>

      {/* Text */}

 <div className="text-white text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
        <TypeAnimation
          sequence={[
            'Give Your Kids', 2000,
            'A Perfect Start', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="text-md sm:text-lg md:text-xl text-white/90 mb-6">
        Explore TutStar's Early Education Programs Designed Just For Your Child’s Future
      </p>
      <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition">
        Get Started
      </button>
    </div>
     </div>



    {/* RIGHT: Subscription Card */}
    <div className="order-2 w-full max-w-md mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8 w-full">
        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-6 bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-100">
          Subscription
        </h2>

        <div className="space-y-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan.title}
              {...plan}
              selected={selectedPlan === plan.title}
              onClick={() => setSelectedPlan(plan.title)}
            />
          ))}
        </div>

        <Summary fees={2000} discount={300} practiceSets={0} />

        <button className="w-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 hover:brightness-110 text-white font-semibold py-2 mt-6 rounded-full transition-all duration-300">
          Get Subscription
        </button>
      </div>
    </div>
  </div>
</div>

  );
}






