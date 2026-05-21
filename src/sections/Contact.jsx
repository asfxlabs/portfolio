import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBehance,
  FaWhatsapp,
  FaFacebook,
} from 'react-icons/fa'

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Contact
        </h2>

        <p className="text-gray-300 text-lg">
          Open for freelance, collaborations,
          and creative development projects.
        </p>

        <div className="mt-10 flex justify-center gap-6 text-3xl">

          <a
            href="https://github.com/asfxlabs/"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/asfxlabs/"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/asfx.labs/"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaInstagram />
          </a>
          <a
  href="https://www.behance.net/asfxlabs"
  target="_blank"
  className="hover:text-purple-400 transition"
>
  <FaBehance />
</a>
<a
  href="https://wa.me/+918156920047/"
  target="_blank"
  className="hover:text-green-400 transition"
>
  <FaWhatsapp />
</a>
<a
  href="https://facebook.com/YOUR_USERNAME"
  target="_blank"
  className="hover:text-blue-400 transition"
>
  <FaFacebook />
</a>

        </div>

        <div className="mt-12">
          <a
            href="mailto:asifkabeer.official@gmail.com"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition inline-block"
          >
            Email Me
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact