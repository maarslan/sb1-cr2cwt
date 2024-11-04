import React from 'react';
import { RFQFormData } from '../types';

interface RFQFormProps {
  productId?: string;
  onSubmit: (data: RFQFormData) => void;
  onClose: () => void;
}

export default function RFQForm({ productId, onSubmit, onClose }: RFQFormProps) {
  const [formData, setFormData] = React.useState<RFQFormData>({
    productId: productId || '',
    quantity: 1,
    projectType: '',
    timeline: '',
    requirements: '',
    contactInfo: {
      name: '',
      email: '',
      company: '',
      phone: ''
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Request for Quotation</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) => setFormData({
                  ...formData,
                  quantity: parseInt(e.target.value)
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({
                  ...formData,
                  projectType: e.target.value
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select type</option>
                <option value="building">Building Construction</option>
                <option value="civil">Civil Construction</option>
                <option value="marine">Marine Construction</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="energy">Energy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Timeline
              </label>
              <input
                type="text"
                value={formData.timeline}
                onChange={(e) => setFormData({
                  ...formData,
                  timeline: e.target.value
                })}
                placeholder="e.g., 3 months"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Special Requirements
              </label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({
                  ...formData,
                  requirements: e.target.value
                })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.contactInfo.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      contactInfo: {
                        ...formData.contactInfo,
                        name: e.target.value
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.contactInfo.email}
                    onChange={(e) => setFormData({
                      ...formData,
                      contactInfo: {
                        ...formData.contactInfo,
                        email: e.target.value
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.contactInfo.company}
                    onChange={(e) => setFormData({
                      ...formData,
                      contactInfo: {
                        ...formData.contactInfo,
                        company: e.target.value
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.contactInfo.phone}
                    onChange={(e) => setFormData({
                      ...formData,
                      contactInfo: {
                        ...formData.contactInfo,
                        phone: e.target.value
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            >
              Submit RFQ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}