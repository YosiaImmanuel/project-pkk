import Image from "next/image";

export default function Home() {
  const links = [
    { name: "Instagram", url: "https://www.instagram.com/urbanvoid88?igsh=YnBkNGg5MTJwOWI0", icon: "/icons/instagram.png" },
    { name: "Shopee", url: "https://shopee.co.id", icon: "/icons/shopee.png" },
    { name: "Tiktok", url: "https://tiktok.com", icon: "/icons/tiktok.png" },
    { name: "Tokopedia", url: "https://tokopedia.com", icon: "/icons/tokopedia.png" },
    { name: "Lazada", url: "https://lazada.com", icon: "/icons/lazada.png" },
    { name: "Whatsapp Admin", url: "https://wa.me/62895340992045", icon: "/icons/whatsapp.png" },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#faf6e8] px-4">
      {/* Logo di atas */}
      <div className="mt-12 flex flex-col items-center">
        <div className="w-32 h-32 border-4 border-blue-700 rounded-full overflow-hidden flex items-center justify-center bg-white">
          {/* Ganti ini dengan logo utama kamu */}
          <Image src="/logo.png" alt="Logo" width={128} height={128} />
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-blue-700">UrbanVoid</h1>
        <p className="text-gray-600 text-sm">Look Cool With Our Products!</p>
      </div>

      {/* Tombol Links */}
      <div className="mt-10 w-full max-w-sm flex flex-col gap-4">
        {links.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-blue-700 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-800 transition"
          >
            <span>{item.name}</span>
            {/* Icon pakai Next.js Image */}
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
