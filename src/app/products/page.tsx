import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export const metadata = {
  title: 'Products - Lasante Vietnam',
  description: 'Premium French Bedding Collections',
};

const categories = [
  "Duvet Cover",
  "Bedsheets",
  "Pillow",
  "Mattress Protector",
  "Blanket",
  "Bedding Set"
];

const products = [
  { id: 1, title: 'Lasante Diamond Gold Duvet', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81dd27b2-fe41-4c17-bfd2-6902d13b4f65_1600w.jpg' },
  { id: 2, title: 'Lasante Diamond Wool Blanket', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f45ba8d1-d14f-4d6d-abd4-cd61427bcbd5_1600w.jpg' },
  { id: 3, title: 'Lasante Tencel Standard Pillow', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82332be2-dc18-4a18-97f2-1d59648a9b2d_1600w.jpg' },
  { id: 4, title: 'Lasante Modal Luxury Sets', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b4d455d-352b-4cd7-b648-28ffea953ebf_1600w.jpg' },
  { id: 5, title: 'Lasante Pure Cotton Sheets', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb863261-7299-4c17-8e1d-c361c4793ff0_1600w.jpg' },
  { id: 6, title: 'Lasante Elite Mattress Protector', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c7b3db1-c112-4217-ba5d-e06aa7c24f68_1600w.jpg' }
];

export default function ProductsPage() {
  return (
    <>
      <TopBar />
      <Header />
      
      {/* Banner */}
      <div className="relative h-[300px] bg-[#1a2b4a] overflow-hidden">
        <img 
          src="/images/products-banner.png" 
          alt="Products" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white top-10">
          <h1 className="font-serif text-5xl font-medium mb-4 drop-shadow-md">Products</h1>
          <p className="text-xl tracking-widest uppercase font-light drop-shadow">Best Products / Best Service / Best Styles</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-[#f8f8f8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#C9A96E] transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#2d2d2d] font-medium">Products</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-32">
            <h3 className="bg-[#1a2b4a] text-white text-lg font-medium py-4 px-6">Product Categories</h3>
            <ul className="divide-y divide-gray-100">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <Link href={`/products?category=${encodeURIComponent(cat.toLowerCase())}`} className="block py-4 px-6 text-gray-600 hover:text-[#C9A96E] hover:bg-[#C9A96E]/5 transition-colors group flex items-center justify-between">
                    {cat}
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#C9A96E] transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <Link href={`/products/${product.id}`} className="bg-white/90 backdrop-blur-sm text-[#2d2d2d] px-6 py-2 rounded-full font-medium hover:bg-[#C9A96E] hover:text-white transition-colors shadow-lg">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-medium text-[#2d2d2d] text-lg mb-2 group-hover:text-[#C9A96E] transition-colors line-clamp-1">{product.title}</h3>
                  <div className="w-12 h-0.5 bg-[#C9A96E] mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
