import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function ContactSection() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_et3cql8',
'template_5143zsg',    
 formRef.current,
'Jh02LGpJD6nHmyrhA'     
    )
    .then(() => {
      setStatus('sent');
      formRef.current.reset();
    })
    .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <div className="container text-center">
        <h2 className="text-primary mb-4">Get In Touch</h2>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <input type="text" name="name" required className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <input type="email" name="email" required className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <textarea name="message" rows="5" required className="form-control" placeholder="Your Message" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="text-success mt-3">Message sent successfully!</p>}
          {status === 'error' && <p className="text-danger mt-3">Failed to send. Please try again.</p>}
        </form>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-4 mt-5 mb-3">
          <a href="https://github.com/Karunakar-reddy-04" target="_blank" rel="noreferrer" className="contact-icon" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/karunakar45/" target="_blank" rel="noreferrer" className="contact-icon" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:karunakar.reddy@example.com" className="contact-icon" aria-label="Email">
            <FaEnvelope size={28} />
          </a>
          <a href="tel:5714364229" className="contact-icon" aria-label="Phone">
            <FaPhoneAlt size={26} />
          </a>
        </div>

        {/* Plain Text Details */}
        <div className="text-muted small">
          <p className="mb-1">karunakar.reddy@example.com</p>
          <p className="mb-0">(571) 436-4229</p>
        </div>
      </div>

      <style>{`
        .contact-icon {
          color: #ccc;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .contact-icon:hover {
          color: #0d6efd;
          transform: scale(1.15);
        }

        .btn-primary:hover {
          background-color: #0b5ed7;
        }

        .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }

        #contact p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}

export default ContactSection;
