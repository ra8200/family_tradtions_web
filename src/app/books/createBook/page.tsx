"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const CreateBookPage = () => {
  const [bookName, setBookName] = useState('');
  const [bookDescription, setBookDescription] = useState('');

  const handleCreateBook = () => {
    // Handle book creation logic
    console.log('Book Created:', { bookName, bookDescription });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a New Recipe Book</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Book Name</label>
        <input
          id='bookName'
          type="text"
          className="mt-1 p-2 border rounded w-full"
          placeholder='Enter a name for the book...'
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          id='bookDescription'
          className="mt-1 p-2 border rounded w-full"
          placeholder='Enter a description for the book...'
          value={bookDescription}
          onChange={(e) => setBookDescription(e.target.value)}
        />
      </div>
      <Button onClick={handleCreateBook}>Create Book</Button>
    </div>
  );
};

export default CreateBookPage;
