import { Link, useLocation } from 'react-router-dom'

const LocationsSection = () => {
  const { pathname } = useLocation()

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
    { city: "Thane",        slug: "thane"      },
  ]

  const lastLocation = { city: "Thane", slug: "thane" }

  const isActive = (slug) =>
    pathname === `/digital-marketing-courses-in-${slug}`

  return (
    <section className="bg-[#eeeeee] py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-6 tracking-tight leading-tight font-inter">
          Digital Marketing Courses Across The World
        </h2>

        <div className="text-[15px] md:text-[16px] leading-[1.8] text-[#444444] font-medium font-inter">
          {locations.map((loc) => (
            <span key={loc.slug}>
              <Link
                to={`/digital-marketing-courses-in-${loc.slug}`}
                className={`transition-colors ${
                  isActive(loc.slug)
                    ? 'text-orange-500 font-semibold'
                    : 'hover:text-black'
                }`}
              >
                Digital Marketing Courses in {loc.city}
              </Link>
              <span className="mx-2 text-gray-400">|</span>
            </span>
          ))}

        
        </div>

      </div>
    </section>
  )
}

export default LocationsSection