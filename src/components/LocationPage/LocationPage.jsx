import { Link, useLocation } from 'react-router-dom';

const LocationsSection = () => {
  const { pathname } = useLocation();

  const locations = [
    { city: "Vashi",       slug: "vashi"       },
    { city: "Panvel",      slug: "panvel"      },
    { city: "Virar",       slug: "virar"       },
    { city: "Mulund",      slug: "mulund"      },
    { city: "Dadar",       slug: "dadar"       },
    { city: "Bandra",      slug: "bandra"      },
    { city: "Kalyan",      slug: "kalyan"      },
    { city: "Navi Mumbai", slug: "navi-mumbai" },
    { city: "Borivali",    slug: "borivali"    },
    { city: "Andheri",     slug: "andheri"     },
    { city: "Thane",       slug: "thane"       },
  ];

  const isActive = (slug) => pathname === `/digital-marketing-courses-in-${slug}`;

  return (
    <section className="bg-[#eeeeee] py-12 px-6 md:px-12 lg:px-24 border-t">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">
          Digital Marketing Courses <span className="text-orange-500">Across Mumbai</span>
        </h2>
        <div className="text-[14px] md:text-[15px] leading-[2.6] text-gray-600 font-medium">
          {locations.map((loc, index) => (
            <span key={loc.slug}>
              <Link
                to={`/digital-marketing-courses-in-${loc.slug}`}
                className={`transition-all duration-200 hover:text-orange-600 ${
                  isActive(loc.slug) ? 'text-orange-600 font-bold underline underline-offset-4 decoration-2' : ''
                }`}
              >
                Digital Marketing Courses in {loc.city}
              </Link>
              {index !== locations.length - 1 && <span className="mx-3 text-gray-300">|</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;