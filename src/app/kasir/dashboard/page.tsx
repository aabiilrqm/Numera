"use client";

import { useEffect, useState } from "react";

type Menu = {
  id: string;
  name: string;
  price: number;
};

export default function KasirDashboardPage() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  const [pay, setPay] = useState<number>(0);

  // ✅ Ambil menu dari backend
  useEffect(() => {
    fetch("/api/menu") // pakai route menu yang SUDAH ADA
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  // ✅ Tambah ke keranjang
  const addToCart = (menu: Menu) => {
    const exist = cart.find((item) => item.id === menu.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === menu.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...menu, qty: 1 }]);
    }
  };

  // ✅ Hitung total
  const total = cart.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  // ✅ Checkout ke backend kasir
  const checkout = async () => {
    const res = await fetch("/api/kasir", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart.map((item) => ({
          menu_id: item.id,
          qty: item.qty,
          price: item.price,
        })),
        pay,
      }),
    });

    const data = await res.json();

    alert(
      `✅ Transaksi berhasil!\nTotal: ${data.total}\nKembalian: ${data.change}`
    );

    setCart([]);
    setPay(0);
  };

  return (
    <div className="p-10 grid grid-cols-2 gap-10">
      {/* ✅ LIST MENU */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Menu</h1>

        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => addToCart(menu)}
            className="w-full border p-3 mb-2 text-left hover:bg-gray-100"
          >
            <div className="font-semibold">{menu.name}</div>
            <div className="text-sm text-gray-600">
              Rp {menu.price.toLocaleString()}
            </div>
          </button>
        ))}
      </div>

      {/* ✅ KERANJANG */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Keranjang</h1>

        {cart.length === 0 && (
          <p className="text-gray-500">Belum ada item</p>
        )}

        {cart.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>
              {item.name} x {item.qty}
            </span>
            <span>
              Rp {(item.qty * item.price).toLocaleString()}
            </span>
          </div>
        ))}

        <hr className="my-3" />

        <p className="font-bold">
          Total: Rp {total.toLocaleString()}
        </p>

        <input
          type="number"
          placeholder="Nominal Bayar"
          className="border p-2 w-full mt-3"
          value={pay}
          onChange={(e) => setPay(Number(e.target.value))}
        />

        <button
          onClick={checkout}
          disabled={cart.length === 0 || pay < total}
          className="bg-green-600 text-white w-full p-3 mt-4 disabled:bg-gray-400"
        >
          Bayar
        </button>
      </div>
    </div>
  );
}
