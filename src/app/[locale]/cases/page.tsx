import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { ChevronRight, Home, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Case Center - Lasante Vietnam',
  description: 'Success stories and hotel case studies',
};

const cases = [
  { id: 1, title: 'The Parisian Suite - French Style', location: 'Da Nang Hotel Resort', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg' },
  { id: 2, title: 'Modern Minimalist Villa', location: 'Thao Dien, HCMC', image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Cozy Winter Lodge', location: 'Sapa Retreat', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Luxury Penthouse Suite', location: 'Hanoi Center', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81dd27b2-fe41-4c17-bfd2-6902d13b4f65_1600w.jpg' },
  { id: 5, title: 'Boutique Hotel Refresh', location: 'Hoi An Ancient Town', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Premium Homestay Collection', location: 'Ninh Binh', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b4d455d-352b-4cd7-b648-28ffea953ebf_1600w.jpg' }
];

export default function CasesPage() {
  return (
    <>
      <TopBar />
      <Header />
      
      {/* Banner */}
      <div className="relative h-[300px] bg-[#1a2b4a] overflow-hidden">
        <img 
          src="/images/cases-banner.png" 
          alt="Case Center" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white top-10">
          <h1 className="font-serif text-5xl font-medium mb-4 drop-shadow-md">Case Center</h1>
          <p className="text-xl tracking-widest uppercase font-light drop-shadow">Inspiration / Elegance / Comfort</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-[#f8f8f8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#C9A96E] transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#2d2d2d] font-medium">Cases</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif text-[#2d2d2d] mb-4">Elevate your living space</h2>
          <p className="text-gray-600">Explore our showcase of premium bedding setups in luxury hotels, resorts, and elegant homes worldwide.</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <Link href={`/cases/${item.id}`} key={item.id} className="group block relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-gray-100">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 blur-0 group-hover:blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#C9A96E] font-medium text-sm tracking-wider uppercase mb-2">{item.location}</span>
                <h3 className="text-white text-2xl font-serif mb-4 leading-tight">{item.title}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span>View Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
}
