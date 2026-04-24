// ─────────────────────────────────────────────────────────────────────────────
// SETUP REQUIRED IN YOUR PROJECT:
// index.html <head>:
// <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap" rel="stylesheet">
// ─────────────────────────────────────────────────────────────────────────────

import { Link, useLocation } from 'react-router-dom'

const satoshi = { fontFamily: "'Satoshi', sans-serif" }

const LocationsSection = () => {
  const { pathname } = useLocation()

  const locations = [
    { city: "Vashi", slug: "vashi" },
    { city: "Panvel", slug: "panvel" },
    { city: "Virar", slug: "virar" },
    { city: "Mulund", slug: "mulund" },
    { city: "Dadar", slug: "dadar" },
    { city: "Bandra", slug: "bandra" },
    { city: "Kalyan", slug: "kalyan" },
    { city: "Navi Mumbai", slug: "navi-mumbai" },
    { city: "Borivali", slug: "borivali" },
    { city: "Andheri", slug: "andheri" },
    { city: "Thane", slug: "thane" },
  ]

  const isActive = (slug) =>
    pathname === `/digital-marketing-courses-in-${slug}`

  return (
    <section
      className="bg-[#eeeeee] py-8 px-6 md:px-12 lg:px-24"
      style={satoshi}
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="text-3xl md:text-4xl text-[#1a1a1a] mb-6 tracking-tight leading-tight"
          style={{ ...satoshi, fontWeight: 600 }}
        >
          Digital Marketing Courses Across The World
        </h2>

        <div
          className="text-[15px] md:text-[16px] leading-[1.8] text-[#444444]"
          style={{ ...satoshi, fontWeight: 500 }}
        >
          {locations.map((loc, i) => (
            <span key={loc.slug}>
              <Link
                to={`/digital-marketing-courses-in-${loc.slug}`}
                className={`transition-colors duration-200 ${isActive(loc.slug)
                    ? 'text-orange-500'
                    : 'hover:text-black'
                  }`}
                style={{
                  ...satoshi,
                  fontWeight: isActive(loc.slug) ? 600 : 500,
                }}
              >
                Digital Marketing Courses in {loc.city}
              </Link>
              {/* No trailing separator after last item */}
              {i < locations.length - 1 && (
                <span className="mx-2 text-gray-400">|</span>
              )}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LocationsSection