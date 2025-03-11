import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Candidates.css";

function Candidates() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const handleCardHover = (id) => {
    setExpandedCard(id);
  };

  const handleCardLeave = () => {
    setExpandedCard(null);
  };

  return (
      <div className="candidates-container">
        <motion.div
            className="candidates-header"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <h1 className="candidates-title">Meet Our KISS Team</h1>
          <p className="candidates-subtitle">Kinetic, Integrity, Service, Solidarity</p>
        </motion.div>

        <motion.div
            className="candidates-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          {/* Vice Presidential Candidate */}
          <motion.div
              className="candidate-card"
              variants={cardVariants}
              onMouseEnter={() => handleCardHover("vice")}
              onMouseLeave={handleCardLeave}
          >
            <div className="candidate-image-container">
              <img src="vicepresident.jpg" alt="Vice President" />
              <div className="candidate-role">Vice President</div>
            </div>
            <h2 className="candidate-name">Eaint Hay Thar Kyaw (Heather)</h2>
            <div className="candidate-details">
              <h3>Accomplished Leader in STEM and Debate</h3>
              <ul className={isVisible ? "visible" : ""}>
                <li>Founder of STEMind, a platform promoting STEM education</li>
                <li>Established a Medium Blog with over 1,000 followers</li>
                <li>Youth leader overseeing 300+ students</li>
                <li>Debate team leader, securing First Runner-Up</li>
                <li>Rising Star in a cybersecurity competition</li>
              </ul>
              <div className={`achievements ${expandedCard === "vice" ? "expanded" : ""}`}>
                <h4>Key Achievements</h4>
                <ul>
                  <li>Over 30 certifications from Google, arcX, Accenture, and more</li>
                  <li>Successfully organized three events for 300+ students</li>
                  <li>Competed in a Cybersecurity competition with 40 participants and got an award</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Presidential Candidate */}
          <motion.div
              className="candidate-card featured"
              variants={cardVariants}
              onMouseEnter={() => handleCardHover("president")}
              onMouseLeave={handleCardLeave}
          >
            <div className="candidate-image-container">
              <img src="president.png" alt="President" />
              <div className="candidate-role">President</div>
            </div>
            <h2 className="candidate-name">Aye Su Yee Aung</h2>
            <div className="candidate-details">
              <h3>Experienced Policy Researcher, Leader, and Innovator</h3>
              <ul className={isVisible ? "visible" : ""}>
                <li>The only adolescent that have Interned at House of Nationalities (Myanmar's Upper House of Parliament)</li>
                <li>Worked under the Speaker of Parliament for State Policy Research</li>
                <li>Policy Research Intern at FAME Pharmaceuticals</li>
                <li>Co-founder of Heaven&Co Accessories</li>
                <li>Founded the JSF self-defense training club at school taught by Myanmar Swat Divison</li>
              </ul>
              <div className={`achievements ${expandedCard === "president" ? "expanded" : ""}`}>
                <h4>Key Achievements</h4>
                <ul>
                  <li>Co-founded Heaven & Co Accessories, overseeing budgeting and product development</li>
                  <li>Founded a school self-defense program with Myanmar Special Forces instructors</li>
                  <li>Initiated summer training for 200+ students and 50+ teachers and staff</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Secretary Candidate */}
          <motion.div
              className="candidate-card"
              variants={cardVariants}
              onMouseEnter={() => handleCardHover("secretary")}
              onMouseLeave={handleCardLeave}
          >
            <div className="candidate-image-container">
              <img src="secretary.png" alt="Secretary" />
              <div className="candidate-role">Secretary</div>
            </div>
            <h2 className="candidate-name">Pyae Sone Nyunt</h2>
            <div className="candidate-details">
              <h3>Science Prodigy with a Passion for Maths</h3>
              <ul className={isVisible ? "visible" : ""}>
                <li>Top grades in IGCSE: Mathematics (98%), Additional Mathematics (98%), Physics (95%), Chemistry (99%)</li>
                <li>Proven leader and personality hire at school</li>
                <li>Deep interest in engineering and a natural talent for problem-solving</li>
                <li>Known for providing comedic relief and being a trustworthy, loyal friend</li>
              </ul>
              <div className={`achievements ${expandedCard === "secretary" ? "expanded" : ""}`}>
                <h4>Key Achievements</h4>
                <ul>
                  <li>Outstanding performance in IGCSE exams, especially in mathematics and Science</li>
                  <li>Current male model of Ascend (Approved by Sayar Thawzin)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
            className="team-philosophy"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
        >
          <h2>Our Team Philosophy</h2>
          <p>
            With Kindness, Inclusion, Synergy, and Strength, we empower every student to be heard and take action.
          </p>
          <p>
            Together, we rise. Together, we Ascend.
          </p>
        </motion.div>
      </div>
  );
}

export default Candidates;
