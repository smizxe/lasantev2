import ProductsSidebar from '@/components/ProductsSidebar';
import ProductCard from '@/components/ProductCard';
import FadeIn from '@/components/animations/FadeIn';
import { useTranslations } from 'next-intl';

const productsData = [
  {
    "name": "Lasante Diamond Thao Wool Blanket",
    "image": "/images/products/diamond.png",
    "tag": "Sale"
  },
  {
    "name": "Lasante Suong Lam Bear Fleece Blanket",
    "image": "/images/products/suonglam.png",
    "tag": "New"
  },
  {
    "name": "Lasante Celine Smoky Gray Fox Blanket",
    "image": "/images/products/celine.png",
    "tag": "Hot"
  },
  {
    "name": "Lasante Diamond Tuyet Wool Blanket",
    "image": "/images/products/tuyet.png",
    "tag": "Sale"
  },
  {
    "name": "Lasante Hong Da Vu Bear Fleece Blanket",
    "image": "/images/products/suonglam.png",
    "tag": "New"
  },
  {
    "name": "Lasante King 25 Wool Blanket",
    "image": "/images/products/celine.png",
    "tag": "Sale"
  },
  {
    "name": "Lasante King 24 Wool Blanket",
    "image": "/images/products/diamond.png",
    "tag": "Sale"
  },
  {
    "name": "Lasante King 07 Wool Blanket",
    "image": "/images/products/tuyet.png",
    "tag": "Sale"
  }
];

export default function ProductsPage() {
  const t = useTranslations('Categories');

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Banner / Header */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#1A1614] text-center border-b border-[#2E2924]">
         {/* Dot grid bg */}
         <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />

         <FadeIn className="relative z-10 max-w-3xl mx-auto">
            <h1 className="font-serif font-light text-white leading-[0.92] mb-6" style={{fontSize:'clamp(2.8rem,5vw,4.5rem)'}}>
              {t('productCategories')}
            </h1>
            <p className="font-sans font-light text-[#C8B8A8] text-lg max-w-2xl mx-auto">
              {t('allProducts')}
            </p>
         </FadeIn>
      </section>

      {/* Main Layout: Sidebar + Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sidebar Area */}
          <ProductsSidebar />

          {/* Product Grid Area */}
          <div className="flex-1 w-full">
            
            {/* Toolbar/Filters */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E8DFD4]">
              <p className="font-sans text-[#7A6E65] text-sm">Showing 1-8 of 182 results</p>
              <div className="flex items-center gap-2">
                 <span className="font-sans text-[#7A6E65] text-sm">Sort by:</span>
                 <select className="bg-transparent border-0 text-[#1A1614] font-medium text-sm focus:ring-0 cursor-pointer">
                   <option>Default Sorting</option>
                   <option>Price: Low to High</option>
                   <option>Price: High to Low</option>
                   <option>Latest</option>
                 </select>
              </div>
            </div>

            {/* Grid */}
            <FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {productsData.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>
            </FadeIn>

            {/* Pagination / Load More */}
            <div className="mt-16 flex justify-center">
              <button className="btn-outline font-sans text-xs tracking-widest px-10 py-4">
                LOAD MORE
              </button>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
