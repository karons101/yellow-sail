import React, { useState } from "react";
import './About.css'; // Import the CSS file for styling

function About() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here (e.g., send email to server)
    alert(`Subscribed with email: ${email}`);
    setEmail(""); // Clear the input field
  };

  return (
    <div className="about-container">
      <h1>About Yellow Sail</h1>
      <p>
        Welcome to Yellow Sail, your premier destination for music and videos! 
        At Yellow Sail, we believe in the power of music and visual storytelling to 
        inspire, entertain, and connect people from all walks of life. Our platform 
        offers a diverse range of music genres and video content, catering to 
        every taste and preference.
      </p>
      <p>
        Whether you're looking for the latest hits, classic tunes, or emerging 
        artists, Yellow Sail has something for everyone. Our user-friendly interface 
        makes it easy to explore, discover, and enjoy your favorite tracks and videos. 
        Join our community of music lovers and experience the joy of music like never before!
      </p>
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or inquiries, feel free to reach out to us:</p>
      <form className="contact-form">
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <h2>Subscribe to Our Newsletter</h2>
      <form className="subscribe-form" onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default About;