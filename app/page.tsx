"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Image from "next/image";

const mentors = [
  { name: "Abhi", expertise: "WebDeveloper", image: "/assets/AJ.png" },
  { name: "Karthik", expertise: "Subheading", image: "/mentor2.png" },
  { name: "Sai", expertise: "Subheading", image: "/mentor3.png" },
  { name: "Unknown", expertise: "Subheading", image: "/mentor4.png" },
];

const ratings = [
  { text: "A terrific piece of praise", author: "- User 1" },
  { text: "A fantastic set of feedback", author: "- User 2" },
  { text: "A genuinely glowing review", author: "- User 3" },
];

export default function Home() {
  const { width, height } = useWindowSize();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const [thankYouPopup, setThankYouPopup] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleFeedbackSubmit = () => {
    setFeedbackPopup(false);
    setConfetti(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setThankYouPopup(true);
    }, 2000);
    setTimeout(() => {
      setConfetti(false);
      setThankYouPopup(false);
    }, 5000);
  };

  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {confetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.8}
        />
      )}
      <header className="sticky top-0 bg-white shadow-md z-50 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Get My Mentor</h1>
        <div className="flex items-center gap-4">
          <input className="border p-2 rounded-lg" placeholder="Search mentor or skill" />
          <div className="relative dropdown">
            <motion.button
              className="border p-2 rounded-lg bg-blue-500 text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 shadow-md transition duration-500"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            {dropdownOpen && (
              <motion.div
                className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="/login/mentorLogin"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                >
                  As a Mentor
                </a>
                <a
                  href="/login/studentLogin"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                >
                  As a Student
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </header>
      <motion.section
        className="h-[50vh] flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold">Find your perfect mentor</h2>
      </motion.section>
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-4">Top Mentors</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              className="p-4 shadow-lg rounded-lg bg-white flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={96}
                height={96}
                className="rounded-full mb-4 object-cover"
              />
              <h4 className="text-lg font-bold">{mentor.name}</h4>
              <p className="text-gray-600">{mentor.expertise}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 p-8">
        <h3 className="text-2xl font-semibold mb-4">Ratings</h3>
        <div className="flex flex-wrap gap-4">
          {ratings.map((rating, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-gray-800">{rating.text}</p>
              <span className="block text-sm text-gray-500 mt-2">{rating.author}</span>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="bg-blue-500 text-white p-8">
        <h4 className="text-xl font-semibold mb-2">We value your opinion.</h4>
        <p>Kindly leave a review to share your thoughts with us.</p>
        <button
          className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-200 transition duration-300"
          onClick={() => setFeedbackPopup(true)}
        >
          Share my Feedback
        </button>
      </footer>

      {feedbackPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold mb-4">Leave your Feedback</h3>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <AiFillStar
                  key={star}
                  className={`text-3xl cursor-pointer ${star <= stars ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => setStars(star)}
                />
              ))}
            </div>
            <textarea
              className="w-full border p-2 rounded-lg mb-4"
              rows={3}
              placeholder="Your comments..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={handleFeedbackSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {thankYouPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div className="text-3xl mb-4">😊</div>
            <h3 className="text-xl font-semibold mb-4">Thanks for your Feedback!</h3>
          </motion.div>
        </div>
      )}
    </div>
  );
}