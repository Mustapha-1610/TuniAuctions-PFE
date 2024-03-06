import React from "react";

const CustomForm = () => {
  return (
    <div className="flex ml-2 overflow-hidden bg-white pt-16">
      <div
        id="main-content"
        className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Add New Product
        </h2>
        <div className="flex flex-col mb-6 sm:flex-row">
          <div className="w-full sm:w-1/2 sm:mr-2">
            <label
              htmlFor="category1"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Category 1
            </label>
            <select
              id="category1"
              name="category1"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            >
              <option value="">Category 1</option>
              <option value="">Category 2</option>
              <option value="">Category 3</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 sm:ml-2">
            <label
              htmlFor="category2"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Category 2
            </label>
            <select
              id="category2"
              name="category2"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            >
              <option value="">Category 1</option>
              <option value="">Category 2</option>
              <option value="">Category 3</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col mb-6 sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
            <div className="flex flex-col items-center justify-center h-52 border-dashed border-2 border-gray-300 rounded-md">
              <p>Drag & drop product image here</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Upload Image
              </button>
              <p className="text-xs text-gray-500 mt-1">Maximum 3</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex flex-col items-center justify-center h-52 border-dashed border-2 border-gray-300 rounded-md">
              <p>Drag & drop product image here</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Upload Image
              </button>
              <p className="text-xs text-gray-500 mt-1">Maximum 3</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          ></textarea>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
            <label
              htmlFor="stock1"
              className="block text-sm font-medium text-gray-700"
            >
              Stock
            </label>
            <input
              type="text"
              id="stock1"
              name="stock1"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="stock2"
              className="block text-sm font-medium text-gray-700"
            >
              Stock
            </label>
            <input
              type="text"
              id="stock2"
              name="stock2"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700"
          >
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="regularPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Regular Price
          </label>
          <input
            type="text"
            id="regularPrice"
            name="regularPrice"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="salePrice"
            className="block text-sm font-medium text-gray-700"
          >
            Sale Price
          </label>
          <input
            type="text"
            id="salePrice"
            name="salePrice"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Save product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
