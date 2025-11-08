import { FC, useState } from 'react';
import { CONTACT_INFO } from '../../constants';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { firstName, lastName, email, phone, message } = formData;
    const subject = 'Contact Form Submission';
    const body = `Contact Form Submission%0D%0A%0D%0AName: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.open(`mailto:${CONTACT_INFO.adminEmail}?subject=${subject}&body=${body}`);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="John"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          placeholder="+234 90 6493 7783"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your inquiry..."
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};
