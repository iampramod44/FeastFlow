import React from "react";

const AddMenu = () => {
  return (
    <div className="w-full md:w-[870px]">
      <h2 className="text-2xl font-semibold my-4">
        Upload A New <span className="text-green"> Menu Item</span>
      </h2>
      {/* Form  */}
      <div>
        <form>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* 2 row   */}
          <div className="flex items-center gap-4">
            {/* category input */}
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drinks</option>
                <option value="popular">Popular</option>
              </select>
            </div>

            {/* prices */}
            <div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>

          {/* 3rd row */}
          <div className="form-control my-6">
            <label className="label">
              <span className="label-text">Recipie Details</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="What's so special about your recipe"
            ></textarea>
          </div>

          {/* 4 row  */}
          <div className="form-control w-full my-6">
            <input type="file" className="file-input w-full max-w-xs" />
          </div>
          <button className="btn bg-green text-white my-6">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
