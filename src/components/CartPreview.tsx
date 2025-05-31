import Image from "next/image";
import React from "react";

const CartPreview = () => {
    // TODO: Tạo dữ liệu sản phẩm giả để test UI (2 sản phẩm)

    // TODO: Tạo hàm handleRemove(id) để xoá sản phẩm khỏi danh sách

    // TODO: Hiển thị modal ở góc phải trên màn hình
    return (
        <div className="absolute top-12 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-6 p-4 w-max right-0">
            {/* TODO: Hiển thị tiêu đề "Shopping Cart" */}
            <h2 className="text-xl font-semibold">Shopping Cart</h2>

            {/* TODO: Danh sách sản phẩm, dùng map() để render từng item */}
            <div className="flex  gap-8 w-max">
                <div className="flex  gap-4">
                    <Image
                        className="object-cover rounded-md"
                        src="https://images.pexels.com/photos/30922280/pexels-photo-30922280/free-photo-of-sugary-donuts-on-wooden-board-in-warm-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={72}
                        height={96} />
                </div>
                <div className="flex flex-col justify-between gap-2">
                    <div>
                    <div className="flex justify-between gap-8">
                        <p className="text-sm font-semibold">Product Name</p>
                        <p className="text-sm ">$12.99</p>
                    </div>
                    <p className="text-sm text-gray-500">In Stock</p>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                        <span className="text-sm text-gray-500">Qty:  1</span>
                        <span className="text-sm text-blue-500 cursor-pointe ">Remove</span>
                    </div>
                </div>
            </div>
            {/* TODO: Phần hiển thị tổng cộng + nút View Cart + Checkout */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-4">
                <span className="font-semibold">Subtotal</span>
                <span className="font-semibold">$ 12.99</span>
                </div>
                <p className="text-sm  text-gray-500">Shipping and texes calculated at checkout</p>
                <div className="flex justify-between ">
                    <button className="px-4 py-2 rounded-md ring-1 ring-gray-300">View Cart</button>
                    <button className="px-4 py-2 rounded-md bg-black text-white">Check out</button>
                </div>
                
            </div>
        </div>
    );
};

export default CartPreview;