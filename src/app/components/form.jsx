"use client";
import React, { useState } from "react";
import { useTranslations } from 'next-intl';

function FormJsx() {
    const t = useTranslations('form');
  const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
        <div className="py-4 lg:py-6 px-4 mx-auto max-w-screen-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                 {t('nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder={t('namePlaceholder')}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                {t('emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder={t('emailPlaceholder')}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                {t('phoneLabel')}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={t('phonePlaceholder')}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">
               {t('messageLabel')}
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500  resize-none"
                placeholder={t('messagePlaceholder')}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-900 w-full hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-[#184b72] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? t('sendingBtn') : t('submitBtn')}
            </button>

            {/* إشعارات النجاح أو الخطأ */}
          {successMessage && <p className="mb-4 text-center text-green-600 font-semibold">{t('success')}</p>}
          {errorMessage && <p className="mb-4 text-center text-red-600 font-semibold">{t('error')}</p>}
          </form>
        </div>
  );
}

export default FormJsx;
