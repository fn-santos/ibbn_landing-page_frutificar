import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#F0F0F0]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F0F0F0]/80">
        <div className="max-w-7xl mx-auto px-6 py-2 md:py-3 flex items-center justify-between">
          {/* LOGO ESQUERDA */}
          <a href="#home" className="flex items-center">
            <Image
              src="/logo_ibbn_top.png"
              alt="Igreja Batista Boas Novas (IBBN)"
              width={160}
              height={160}
              className="h-10 w-auto md:h-12"
              priority
            />
            <span className="sr-only">IBBN</span>
          </a>

          {/* MENU DIREITA */}
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 md:gap-5 bg-white rounded-[20px] h-10 px-4 md:px-5">
              <li><a href="#home" className="text-black font-medium rounded-[14px] px-3 py-1.5 hover:bg-neutral-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">Home</a></li>
              <li><a href="#tour" className="text-black font-medium rounded-[14px] px-3 py-1.5 hover:bg-neutral-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">Tour</a></li>
              <li><a href="#about" className="text-black font-medium rounded-[14px] px-3 py-1.5 hover:bg-neutral-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">About</a></li>
              <li><a href="#contact" className="text-black font-medium rounded-[14px] px-3 py-1.5 hover:bg-neutral-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative bg-[#F0F0F0]">
          <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14 pb-10">
            {/* Topo: título à esquerda; subtítulo + CTA à direita */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* ESQUERDA: Título grande */}
              <div className="md:col-span-2">
                <h1 className="text-black font-normal tracking-[-5px] leading-[1.08799] text-[31px] sm:text-[50px] lg:text-[83px]">
                  Juntos, frutificamos para a glória de Deus.
                </h1>
              </div>

              {/* DIREITA: Subtítulo + CTA */}
              <div className="md:col-span-1 md:justify-end flex">
                <div className="max-w-sm">
                  <p className="text-base md:text-lg text-neutral-700">
                    Campanha para novos painéis de LED e som da IBBN, um passo para ampliar a mensagem e equipar nossa igreja.
                  </p>
                  <div className="mt-4">
                    <a
                      href="#doar"
                      className="inline-flex items-center rounded-[20px] px-5 py-2.5 bg-[#2d374b] text-white font-semibold transition hover:bg-[#3b475e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d374b]/30"
                    >
                      Doar Agora
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem principal + card de progresso sobreposto */}
            <div className="relative mt-10">
              <Image
                src="/frutificar_banner_top.png"
                alt="Campanha IBBN - Frutificar"
                width={1600}
                height={900}
                className="w-full rounded-3xl object-cover"
                priority
              />

              {/* Card de progresso sobreposto */}
              <div className="absolute inset-x-0 -bottom-8 md:-bottom-10 flex justify-center z-10">
                <div
                  className="bg-white rounded-[20px] border border-neutral-200 px-6 py-4 md:px-8 md:py-5 w-[min(920px,90%)]"
                  role="region"
                  aria-label="Progresso da campanha"
                >
                  {/* PROGRESS_CARD_START */}
                  {(() => {
                    const goal = 50000;      // meta (R$)
                    const raised = 18750;    // arrecadado (R$)
                    const pct = Math.min(100, Math.round((raised / goal) * 100));
                    return (
                      <>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm text-neutral-500">Progresso da Campanha</p>
                            <p className="text-base font-semibold text-neutral-900">
                              R$ {raised.toLocaleString('pt-BR')} de R$ {goal.toLocaleString('pt-BR')} ({pct}%)
                            </p>
                          </div>
                          <span className="hidden sm:inline text-sm font-medium text-neutral-700">Contribua você também</span>
                        </div>
                        <div className="mt-3 h-3 bg-neutral-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso da campanha">
                          <div className="h-full bg-[#E76F51]" style={{ width: `${pct}%` }}></div>
                        </div>
                      </>
                    );
                  })()}
                  {/* PROGRESS_CARD_END */}
                </div>
              </div>
            </div>

            {/* Spacer para compensar a sobreposição do card */}
            <div className="h-14 md:h-16" />
          </div>
        </section>

        {/* Tour Packages Section */}
        <section id="tours" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-2">Tour Packages</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Exclusive Tour Packages</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find your perfect getaway with our curated tour packages. Adventure, relaxation or culture—it's all here for you!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tour Package 1 - Jaya Wijaya Mountain */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative">
                  {/* Placeholder for mountain image - replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-blue-600"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Jaya Wijaya Mountain</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm font-medium text-gray-600">5.5</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-4">$456.80</div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Including Accommodation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Free Professional Guide Tour
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      3 Days 2 Nights Trip
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Booking
                  </button>
                </div>
              </div>

              {/* Tour Package 2 - Fuji Mountain */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-400 relative">
                  {/* Placeholder for Mount Fuji image - replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fuji Mountain</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm font-medium text-gray-600">5.5</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-4">$456.80</div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Including Accommodation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Free Professional Guide Tour
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      3 Days 2 Nights Trip
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Booking
                  </button>
                </div>
              </div>

              {/* Tour Package 3 - Kilimanjaro */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 relative">
                  {/* Placeholder for Kilimanjaro image - replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kilimanjaro</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm font-medium text-gray-600">5.5</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-4">$456.80</div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Including Accommodation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Free Professional Guide Tour
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      3 Days 2 Nights Trip
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Every Step of the Way */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Every Step of the Way</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Travel with ease and comfort. From private transfers to group tours, we ensure seamless transportation throughout your journey.
                  </p>
                  <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg"></div>
                  <div className="h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg"></div>
                </div>
              </div>
              
              {/* Right Side - Transport Options */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-2">Transport</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Effortless Travel</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-600 text-white p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <h3 className="text-lg font-semibold">Plane</h3>
                    </div>
                    <p className="text-blue-100">
                      We provide flights with schedules according to the Airport or can be customized.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <h3 className="text-lg font-semibold text-gray-900">Train</h3>
                    </div>
                    <p className="text-gray-600">
                      We provide train travel with a schedule according to the Station or can be customized.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      <h3 className="text-lg font-semibold text-gray-900">Bus</h3>
                    </div>
                    <p className="text-gray-600">
                      We provide bus trips with a schedule according to the Bus Stop or can be customized.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 00-1-1h-1a1 1 0 00-1 1v4z" />
                      </svg>
                      <h3 className="text-lg font-semibold text-gray-900">Local Transportation</h3>
                    </div>
                    <p className="text-gray-600">
                      We provide local vehicle trips with schedules according to the Application or can be customized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
              <p className="text-xl text-gray-600">Real experiences from our satisfied customers</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">JS</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">John Smith</h4>
                    <p className="text-sm text-gray-600">Adventure Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Amazing experience! The Jaya Wijaya Mountain tour was absolutely breathtaking. The guides were professional and the accommodation was perfect."
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-lg">MJ</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Maria Johnson</h4>
                    <p className="text-sm text-gray-600">Travel Blogger</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "WayFarer made our trip to Mount Fuji unforgettable. The transportation was seamless and the tour package exceeded our expectations."
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-lg">DW</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">David Wilson</h4>
                    <p className="text-sm text-gray-600">Photographer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The Kilimanjaro expedition was a dream come true. Professional guides, excellent service, and memories that will last a lifetime."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
              <p className="text-xl text-gray-600">Choose the perfect plan for your adventure</p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Package</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-8">Everything you need for the perfect adventure</p>
                  
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Unlimited tour bookings
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Priority customer support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Exclusive discounts
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Free cancellation
                    </li>
                  </ul>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our services</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I book a tour?</h3>
                <p className="text-gray-600">
                  Booking is simple! Just select your destination, choose your dates, and click the "Booking" button. You'll receive a confirmation email with all the details.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the tour packages?</h3>
                <p className="text-gray-600">
                  Our tour packages include accommodation, professional guide services, transportation, and most meals. Specific inclusions vary by package, so check the details for each tour.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel my booking?</h3>
                <p className="text-gray-600">
                  Yes! We offer free cancellation up to 48 hours before your tour start date. Some packages may have different cancellation policies, which will be clearly stated during booking.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide transportation?</h3>
                <p className="text-gray-600">
                  Absolutely! We provide various transportation options including flights, trains, buses, and local transportation. All transportation is included in our tour packages.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Way.Farer</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Your trusted partner for unforgettable travel experiences. Explore the world with confidence and comfort.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#tours" className="text-gray-400 hover:text-white transition-colors">Tours</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Way.Farer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
