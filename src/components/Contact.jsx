import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  FaAngleDoubleRight,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Raja Kali",
          from_name: formData.name,
          message: formData.description,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        toast("Message sent!", { className: "custom-toast" });
        setFormData({
          name: "",
          email: "",
          description: "",
        });
      })
      .catch((error) => {
        alert("Failed to send message.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="mx-auto p-6 bg-violet-600 shadow-md rounded-t-lg w-full flex flex-col md:flex-row gap-6">
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex flex-col items-center text-center">
        <img
          src="https://img.freepik.com/premium-psd/3d-cartoon-character-working-laptop-transparent-psd_1245214-18091.jpg"
          alt="Your Name"
          className="w-32 h-32 rounded-full shadow-lg"
        />

        <p className="mt-4 text-slate-50 text-sm px-4">
          Let's connect and build something amazing!
        </p>

        <div className="mt-4 text-slate-50 space-y-4">
          <p className="flex items-center justify-center gap-2">
            <FaPhone /> +91 9666593131
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope /> kalirajaylm@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> Yeleswaram, Kakinada, Andhra Pradesh
          </p>
        </div>

        <div className="mt-4 flex gap-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-slate-50 text-2xl hover:text-slate-200 transition" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-slate-50 text-2xl hover:text-slate-200 transition" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-slate-50 text-2xl hover:text-slate-200 transition" />
          </a>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-violet-900 font-display font-bold text-xl flex flex-col">
          <p className="flex items-center">
            <span className="pr-2">Contact Me</span>
            <FaAngleDoubleRight />
          </p>
          <span className="text-gray-500 text-sm">
            Job Opportunities, Freelancing, Help etc...
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-violet-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-violet-500"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Your Message"
            rows="3"
            className="w-full p-3 border rounded-lg focus:outline-violet-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-violet-600 text-white font-sans py-2 rounded-lg hover:bg-violet-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
