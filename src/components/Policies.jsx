import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import "./Policies/Policy.css";

function Policies() {
    const triggerConfetti = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#1b2d61', '#ffd748', '#ffffff']
        });
    };
  return (
    <div className="policies-container">
      <motion.div 
        className="policies-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="policies-title">Our KISS Policies</h1>
        <p className="policies-subtitle"></p>
      </motion.div>

      <motion.img
        src="policybanner.jpg"
        alt="Policy Banner"
        className="policy-banner"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      <motion.div 
        className="policies-pending"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="pending-icon">🔒</div>
        <h2>Policies Coming Soon!</h2>
        <p>
          Our detailed policies will be released after we win the election.
          We tend to implement policies depending on the situation.
        </p>
        <p>
          What we can promise now is that all our policies will follow our K I S S philosophy:
          <span className="policy-highlight">Kinetic, Integrity, Service, Solidarity</span>
        </p>
        <div className="policy-principles">
          <div className="policy-principle">
            <div className="principle-icon">🚀</div>
            <h3>Kinetic</h3>
            <p>Always moving forward!</p>
          </div>
          <div className="policy-principle">
            <div className="principle-icon">⚖️</div>
            <h3>Integrity</h3>
            <p>Working with honesty!</p>
          </div>
          <div className="policy-principle">
            <div className="principle-icon">🛎️</div>
            <h3>Service</h3>
            <p>Always at your service!</p>
          </div>
            <div className="policy-principle">
                <div className="principle-icon">🤝</div>
                <h3>Solidarity</h3>
                <p>Working together!</p>
            </div>
        </div>
      </motion.div>

      <motion.div 
        className="policies-cta"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2>Our Commitment</h2>
        <p>
          Our KISS team is committed to implementing effective policies with transparency and responsibility.
          We will keep our promises and achieve meaningful success!.
        </p>
        <button className="policies-cta-button" onClick={triggerConfetti} >Vote for KISS</button>
      </motion.div>
    </div>
  );
}

export default Policies;