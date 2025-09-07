import React, { useState } from 'react';
import { itemsAPI } from '../../services/api';
import { useToast } from '../../context/ToastContext';

const ItemForm = ({ onItemAdded, editingItem, onCancel }) => {
  const [formData, setFormData] = useState({
    title: editingItem?.title || '',
    description: editingItem?.description || '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { showSuccess, showError } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length > 100) {
      newErrors.title = 'Title must be less than 100 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length > 500) {
      newErrors.description = 'Description must be less than 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (editingItem) {
        await itemsAPI.updateItem(editingItem._id, formData);
        showSuccess('Item updated successfully!');
      } else {
        await itemsAPI.createItem(formData);
        showSuccess('Item added successfully!');
      }
      
      onItemAdded();
      setFormData({ title: '', description: '' });
      if (onCancel) onCancel();
    } catch (error) {
      console.error('Error saving item:', error);
      showError(error.response?.data?.message || 'Failed to save item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({ title: '', description: '' });
    setErrors({});
    if (onCancel) onCancel();
  };

  return (
    <div className="card">
      <h3 className="text-lg font-medium text-white mb-4">
        {editingItem ? 'Edit Item' : 'Add New Item'}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            className="input-field"
            placeholder="Enter item title"
            value={formData.title}
            onChange={handleChange}
            maxLength={100}
          />
          {errors.title && (
            <p className="error-message">{errors.title}</p>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="input-field resize-none"
            placeholder="Enter item description"
            value={formData.description}
            onChange={handleChange}
            maxLength={500}
          />
          {errors.description && (
            <p className="error-message">{errors.description}</p>
          )}
        </div>
        
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary flex-1"
          >
            {loading ? 'Saving...' : (editingItem ? 'Update Item' : 'Add Item')}
          </button>
          
          {onCancel && (
            <button
              type="button"
              onClick={handleCancel}
              className="btn-secondary"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
