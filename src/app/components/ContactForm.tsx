import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="grid grid-cols-2 gap-4 mb-4 font-open">
        <div>
          <label htmlFor="name" className="text-gray-700 font-bold font-open mb-2 block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-black w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-gray-700 font-bold mb-2 block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-black w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="text-gray-700 font-bold mb-2 block">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="text-black w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="text-gray-700 font-bold mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="text-black w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
          style={{ resize: 'none' }}
        />
      </div>

      <button
        type="submit"
        className="mx-auto block py-2 px-2 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-75"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
