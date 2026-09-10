import { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 12:00)',
    reason: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus trap & initial focus
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    if (!formData.reason.trim()) {
      newErrors.reason = 'Please provide a brief reason for your visit';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#26332C]/60 backdrop-blur-xs transition-opacity duration-300"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#DDE4DB] overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#DDE4DB] bg-[#FFFFFF]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#506B5B] font-semibold">
              LUMA Clinic
            </span>
            <h2 id="modal-title" className="text-xl font-serif text-[#26332C]">
              Book an Appointment
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close dialog"
            className="p-2 rounded-lg text-[#6E756F] hover:text-[#26332C] hover:bg-[#DDE4DB]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[#506B5B]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#DDE4DB] text-[#506B5B] flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-serif text-[#26332C]">
                Thanks — your appointment request has been received.
              </h3>
              <p className="text-sm text-[#6E756F] max-w-md mx-auto leading-relaxed">
                This is a demo form, so no information has actually been submitted. In a live setting, our clinic coordinator would confirm your requested time slot within 2 hours.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      preferredDate: '',
                      preferredTime: 'Morning (09:00 - 12:00)',
                      reason: '',
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl border border-[#DDE4DB] text-sm font-medium text-[#26332C] hover:bg-[#F7F5F0] transition-colors"
                >
                  Book Another Demo Slot
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl bg-[#506B5B] text-white text-sm font-medium hover:bg-[#26332C] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label
                  htmlFor="appointment-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#26332C] mb-1.5"
                >
                  Full Name <span className="text-[#C98F65]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#6E756F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    ref={firstInputRef}
                    id="appointment-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Elena Vance"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#DDE4DB]'
                    } bg-[#FFFFFF] text-[#26332C] placeholder-[#6E756F]/60 focus:border-[#506B5B] focus:ring-1 focus:ring-[#506B5B] outline-hidden transition`}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="appointment-phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#26332C] mb-1.5"
                  >
                    Phone Number <span className="text-[#C98F65]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#6E756F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="appointment-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#DDE4DB]'
                      } bg-[#FFFFFF] text-[#26332C] placeholder-[#6E756F]/60 focus:border-[#506B5B] focus:ring-1 focus:ring-[#506B5B] outline-hidden transition`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label
                    htmlFor="appointment-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#26332C] mb-1.5"
                  >
                    Email Address <span className="text-[#C98F65]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#6E756F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="appointment-email"
                      name="email"
                      type="email"
                      placeholder="elena@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#DDE4DB]'
                      } bg-[#FFFFFF] text-[#26332C] placeholder-[#6E756F]/60 focus:border-[#506B5B] focus:ring-1 focus:ring-[#506B5B] outline-hidden transition`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="appointment-date"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#26332C] mb-1.5"
                  >
                    Preferred Date <span className="text-[#C98F65]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#6E756F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="appointment-date"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border ${
                        errors.preferredDate ? 'border-red-500 bg-red-50/20' : 'border-[#DDE4DB]'
                      } bg-[#FFFFFF] text-[#26332C] focus:border-[#506B5B] focus:ring-1 focus:ring-[#506B5B] outline-hidden transition`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="appointment-time"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#26332C] mb-1.5"
                  >
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#6E756F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="appointment-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-[#DDE4DB] bg-[#FFFFFF] text-[#26332C] focus:border-[#506B5B] focus:ring-1 focus:ring-[#506B5B] outline-hidden transition"
                    >
                      <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                      <option value="Early Afternoon (12:00 - 15:00)">Early Afternoon (12:00 - 15:00)</option>
                      <option value="Late Afternoon (15:00 - 18:00)">Late Afternoon (15:00 - 18:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="appointment-reason"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#26332C] mb-1.5"
                >
                  Reason for Visit <span className="text-[#C98F65]">*</span>
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-[#6E756F] absolute left-3.5 top-3 pointer-events-none" />
                  <textarea
                    id="appointment-reason"
                    name="reason"
                    rows={3}
                    placeholder="Briefly describe your pain, condition, or goals (e.g., lower back stiffness during work, knee recovery)..."
                    value={formData.reason}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border ${
                      errors.reason ? 'border-red-500 bg-red-50/20' : 'border-[#DDE4DB]'
                    } bg-[#FFFFFF] text-[#26332C] placeholder-[#6E756F]/60 focus:border-[#506B5B] focus:ring-1 focus:ring-[#506B5B] outline-hidden transition resize-none`}
                  />
                </div>
                {errors.reason && <p className="text-xs text-red-600 mt-1">{errors.reason}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#506B5B] text-white font-medium text-sm hover:bg-[#26332C] active:scale-[0.99] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request Appointment
                </button>
                <p className="text-[11px] text-[#6E756F] text-center mt-2.5">
                  No immediate payment required. We will confirm your preferred timing via phone/email.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
