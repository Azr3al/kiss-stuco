import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import "./Values.css";

function Values() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1b2d61', '#ffd748', '#ffffff']
    });
  };

  return (
      <div className="values-container">
        <motion.div
            className="values-header"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <h1 className="values-title">Our Values & Mission</h1>
          <div className="team-name">
            <span className="letter">K</span>
            <span className="letter">I</span>
            <span className="letter">S</span>
            <span className="letter">S</span>
          </div>
          <p className="values-subtitle">Kinetic, Integrity, Service, Solidarity</p>
        </motion.div>

        <motion.div
            className="mission-statement"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2>Leadership with Purpose</h2>
          <p>We lead with honesty, responsibility, and a dedication to achieving substantial improvements in our school community.</p>
        </motion.div>

        <motion.div
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <motion.div className="value-card" variants={itemVariants}>
            <div className="value-icon">🛡️</div>
            <h3>Transparency & Trust</h3>
            <p>The basis of every action we do is honesty. We develop trust through open communication and ethical decision-making.</p>
          </motion.div>

          <motion.div className="value-card" variants={itemVariants}>
            <div className="value-icon">🌍</div>
            <h3>Respect & Inclusiveness</h3>
            <p>Every student's viewpoint is appreciated. We promote an environment where diversity is celebrated and all voices matter.</p>
          </motion.div>

          <motion.div className="value-card" variants={itemVariants}>
            <div className="value-icon">🚀</div>
            <h3>Innovation & Creativity</h3>
            <p>We support innovative ideas and progressive ways to improve student life and change our educational process.</p>
          </motion.div>

          <motion.div className="value-card" variants={itemVariants}>
            <div className="value-icon">😊</div>
            <h3>Cooperation & Unity</h3>
            <p>We believe in teamwork—working together with students, educators, and staff to build a culture of shared success.</p>
          </motion.div>

          <motion.div className="value-card" variants={itemVariants}>
            <div className="value-icon">📢</div>
            <h3>Empowerment & Advocacy</h3>
            <p>We stand for the student body, ensuring their voices are heard, their problems addressed, and their dreams realized.</p>
          </motion.div>

          <motion.div className="value-card" variants={itemVariants}>
            <div className="value-icon">🎯</div>
            <h3>Commitment & Accountability</h3>
            <p>We take our jobs seriously and hold ourselves accountable to the pledges we make to our fellow students.</p>
          </motion.div>
        </motion.div>

        <motion.div
            className="principles-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2>Our Guiding Principles</h2>
          <ul className="principles-list">
            <li>
              <span className="principle-number">01</span>
              <div className="principle-content">
                <h3>Service & Community Impact</h3>
                <p>Beyond leadership, we dedicate ourselves to make a lasting effect in our school and the larger community.</p>
              </div>
            </li>
            <li>
              <span className="principle-number">02</span>
              <div className="principle-content">
                <h3>Transparent Communication</h3>
                <p>We believe in clear, honest, and open communication with every stakeholder in our school community.</p>
              </div>
            </li>
            <li>
              <span className="principle-number">03</span>
              <div className="principle-content">
                <h3>Growth & Excellence</h3>
                <p>We consistently challenge ourselves to improve, embrace learning opportunities, and achieve excellence in whatever we do.</p>
              </div>
            </li>
            <li>
              <span className="principle-number">04</span>
              <div className="principle-content">
                <h3>School Spirit & Engagement</h3>
                <p>We foster an enthusiastic school atmosphere, encouraging engagement and pride in our shared experiences.</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
            className="values-cta"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h2>Join Our Movement</h2>
          <p>Together, we can develop a student council that really represents and uplifts every student.</p>
          <button className="values-cta-button" onClick={triggerConfetti}>Vote for KISS</button>
        </motion.div>
      </div>
  );
}

export default Values;