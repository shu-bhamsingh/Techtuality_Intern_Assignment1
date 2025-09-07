import React, { useState } from 'react';
import { itemsAPI } from '../../services/api';
import ItemForm from './ItemForm';

const ItemCard = ({ item, onItemUpdated, onItemDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }

    setLoading(true);
    try {
      await itemsAPI.deleteItem(item._id);
      onItemDeleted();
    } catch (error) {
      console.error('Error deleting item:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleItemUpdated = () => {
    setIsEditing(false);
    onItemUpdated();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isEditing) {
    return (
      <div className="card">
        <ItemForm
          editingItem={item}
          onItemAdded={handleItemUpdated}
          onCancel={handleCancel}
        />
      </div>
    );
  }

  return (
    <div className="card hover:bg-dark-700 transition-colors duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-white">{item.title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={handleEdit}
            className="text-blue-400 hover:text-blue-300 text-sm"
            disabled={loading}
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-400 hover:text-red-300 text-sm"
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{item.description}</p>
      
      <div className="text-xs text-gray-500">
        Created: {formatDate(item.createdAt)}
      </div>
    </div>
  );
};

export default ItemCard;