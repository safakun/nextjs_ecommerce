import { prisma } from "@/lib/db/prisma"
import { redirect } from 'next/navigation';

export const metadata = {
   title: "Add product - Amazone clone"
}

async function addProduct(formData: FormData) {
    "use server";

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price) {
        throw Error("Missing requried fields");
    }

    await prisma.product.create({
        data: {name, description, imageUrl, price},
    });

    redirect("/");
}

export default function AddProductPage() {
return (
    <div>
        <h1 className="text-lg mb-3 font-bold">Add Product</h1>
        <form action={addProduct}>
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