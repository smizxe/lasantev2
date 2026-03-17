import { Award, Shield, FileCheck2, Hotel, Globe } from 'lucide-react';

const CERTS = [
  { icon: Award,       label: 'European TÜV',     sub: 'Health Certification'    },
  { icon: Shield,      label: 'Quatest 1',         sub: 'Quality Inspection'      },
  { icon: FileCheck2,  label: 'Skin-Safe Tested',  sub: 'All Ages & Skin Types'   },
  { icon: Hotel,       label: 'Hospitality Grade', sub: '5-Star Hotel Supply'     },
  { icon: Globe,       label: 'Export Ready',      sub: 'Asia · Europe · Beyond'  },
];

export default function Certifications() {
  return (
    <section className="py-10 bg-[#FAF7F2] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="label text-center text-[#B8924A] mb-8">
          Certified for Global Markets
        </p>
        <div className="flex items-start justify-between gap-8 overflow-x-auto scrollbar-hide">
          {CERTS.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-2 min-w-[110px] text-center group cursor-default">
              <Icon
                strokeWidth={1}
                className="w-7 h-7 text-[#B8924A] group-hover:scale-110 transition-transform duration-300"
              />
              <p className="font-serif font-light text-[#2E2924] text-lg leading-tight">{label}</p>
              <p className="label text-[#7A6E65]" style={{fontSize:'0.6rem'}}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
