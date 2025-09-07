import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { itemsAPI } from '../services/api';
import Layout from '../components/Layout/Layout';
import ItemForm from '../components/Items/ItemForm';
import ItemCard from '../components/Items/ItemCard';
import SearchFilter from '../components/Items/SearchFilter';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import Alert from '../components/Common/Alert';

const Dashboard = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = {};
      if (searchTerm) params.search = searchTerm;
      
      const response = await itemsAPI.getItems(params);
      setItems(response.data.data);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError('Failed to fetch items');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [searchTerm]);

  const handleItemAdded = () => {
    fetchItems();
    setShowAddForm(false);
  };

  const handleItemUpdated = () => {
    fetchItems();
  };

  const handleItemDeleted = () => {
    fetchItems();
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };


  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <Layout itemCount={items.length}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-400">
            Manage your items and stay organized.
          </p>
        </div>

        {error && (
          <Alert type="error" message={error} onClose={() => setError(null)} />
        )}

        <div className="mb-6">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </div>

        <div className="mb-6">
          <button
            onClick={toggleAddForm}
            className="btn-primary"
          >
            {showAddForm ? 'Cancel' : 'Add New Item'}
          </button>
        </div>

        {showAddForm && (
          <div className="mb-8">
            <ItemForm
              onItemAdded={handleItemAdded}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Your Items ({items.length})
          </h2>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <LoadingSpinner size="lg" />
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                No items found
              </h3>
              <p className="text-gray-400 mb-4">
                {searchTerm
                  ? 'Try adjusting your search terms.'
                  : 'Get started by adding your first item.'}
              </p>
              {!searchTerm && (
                <button
                  onClick={toggleAddForm}
                  className="btn-primary"
                >
                  Add Your First Item
                </button>
              )}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onItemUpdated={handleItemUpdated}
                  onItemDeleted={handleItemDeleted}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
