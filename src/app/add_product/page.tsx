export default function AddProductPage() {
return (
    <div>
        <h1 className="text-lg mb-3 font-bold">Add Product</h1>
        <form>
            <input
            required
            name="name"
            placeholder="Name"
            className="mb-3 w-full input input-bordered"
            type="text" />

            <textarea
            required
            name="description" 
            placeholder="Description"
            className="textarea textarea-bordered mb-3 w-full"
            />

            <input
            required
            name="imageUrl"
            placeholder="image URL"
            className="mb-3 w-full input input-bordered"
            type="url" />

            <input
            required
            name="price"
            placeholder="Price"
            className="mb-3 w-full input input-bordered"
            type="text" />

            <button
            type="submit"
            className="btn btn-primary btn-block"
            >
                Add Product
            </button>

          
        </form>
    </div>
)
}