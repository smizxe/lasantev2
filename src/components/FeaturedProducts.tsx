import { ArrowRight, Heart, Star, StarHalf } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedProducts() {
  const products = [
    {
      name: "Chăn lông cừu Lasante Diamond Thảo",
      price: "1,250,000đ",
      image: "https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405585165267_a7a888084d3e236746798a03ea582f14-247x296.jpg",
      tag: "Best Seller"
    },
    {
      name: "Chăn lông cừu Lasante Diamond Kim",
      price: "1,450,000đ",
      oldPrice: "1,850,000đ",
      image: "https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405581111937_5e70f69d688dbdfd0a9068dd11b6b633-247x296.jpg",
      tag: "-20%"
    },
    {
      name: "Chăn lông cừu Lasante Diamond Tuyết",
      price: "1,350,000đ",
      image: "https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405578036303_128672caf32438d267bd8489cda60305-247x296.jpg",
      tag: "New"
    },
    {
      name: "Chăn Lông Gấu Lasante Sương Lâm",
      price: "1,600,000đ",
      image: "https://lasantevietnam.vn/wp-content/uploads/2025/12/z7288035982539_6c09f3c8aa6de7ef42b22b427f8ffdb3-247x296.jpg",
      tag: "Limited"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight mb-4 hover:text-[#f37435] transition-colors">Sản Phẩm Nổi Bật</h2>
            <div className="flex flex-wrap gap-6 text-lg font-medium">
              <button className="text-[#f37435] border-b-2 border-[#f37435] pb-1 transition-all">Tất Cả</button>
              <button className="text-gray-400 hover:text-gray-800 hover:border-b-2 hover:border-gray-800 transition-all pb-1">Chăn Xanh</button>
              <button className="text-gray-400 hover:text-gray-800 hover:border-b-2 hover:border-gray-800 transition-all pb-1">Ga Giường</button>
              <button className="text-gray-400 hover:text-gray-800 hover:border-b-2 hover:border-gray-800 transition-all pb-1">Đệm Tốt</button>
            </div>
          </div>
          <Link href="#" className="hidden md:inline-flex items-center gap-2 text-gray-600 hover:text-[#f37435] font-medium text-lg transition-colors group">
            Xem Tất Cả <ArrowRight strokeWidth={1.5} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group relative">
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-[4/5] mb-5 shadow-sm hover:shadow-xl transition-all duration-300">
                <span className={`absolute top-4 left-4 ${product.tag === '-20%' ? 'bg-[#f37435] text-white' : 'bg-white text-[#2d2d2d]'} px-3 py-1 text-sm font-medium rounded-full z-10 shadow-sm`}>
                  {product.tag}
                </span>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Hover Actions */}
                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 flex gap-2">
                  <button className="flex-1 bg-[#2d2d2d] text-white py-3 rounded-xl font-medium text-base hover:bg-black transition-colors shadow-lg active:scale-95">
                    Thêm vào giỏ
                  </button>
                  <button className="w-12 h-12 bg-white flex items-center justify-center rounded-xl text-gray-600 hover:text-[#f37435] transition-colors shadow-lg active:scale-95">
                    <Heart strokeWidth={1.5} className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#f8c131] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} strokeWidth={2} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-sm text-gray-400 ml-1">(42)</span>
                </div>
                <h3 className="font-medium text-xl text-[#2d2d2d] mb-1 group-hover:text-[#f37435] transition-colors cursor-pointer line-clamp-2 min-h-[56px]">{product.name}</h3>
                <div className="flex items-center gap-3">
                  <span className={`font-medium text-lg ${product.oldPrice ? 'text-[#f37435]' : 'text-[#2d2d2d]'}`}>{product.price}</span>
                  {product.oldPrice && <span className="text-base text-gray-400 line-through">{product.oldPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="#" className="inline-flex px-8 py-3 rounded-full border-2 border-gray-200 text-[#2d2d2d] font-medium text-lg hover:border-[#f37435] hover:text-[#f37435] transition-colors">
            Xem Tất Cả Sản Phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}
