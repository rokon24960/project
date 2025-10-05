import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Our Menu
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Enjoy a wide selection of drinks and snacks while you play
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          
          {/* Beers & Ciders Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              BEERS & CIDERS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-lg p-6 hover:border-orange-500/60 transition-all duration-300">
                <div className="space-y-4">
                  <MenuItem name="STELLA ARTOIS" price="£5" />
                  <MenuItem name="FOSTERS" price="£5" />
                  <MenuItem name="BUDWEISER" price="£5" />
                  <MenuItem name="MAGNERS" price="£5" />
                  <MenuItem name="BECKS" price="£5" />
                  <MenuItem name="KRONENBOURG 1664" price="£5" />
                  <MenuItem name="STRONGBOW" price="£5" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-lg p-6 hover:border-orange-500/60 transition-all duration-300">
                <div className="space-y-4">
                  <MenuItem name="GUINNESS" price="£6" />
                  <MenuItem name="PERONI" price="£6" />
                  <MenuItem name="CIDER: ETTE" price="£7" />
                  <MenuItem name="REKORDERLIG" price="£7" />
                  <MenuItem name="KOPPARBERG" price="£7" />
                </div>
              </div>
            </div>
          </div>

          {/* Spirits Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              SPIRITS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 transition-all duration-300">
                <div className="space-y-4">
                  <MenuItem name="JACK DANIELS (S)" price="£6" />
                  <MenuItem name="JACK DANIELS (D)" price="£9" />
                  <MenuItem name="JONNIE WALKER SL (S)" price="£6" />
                  <MenuItem name="JONNIE WALKER SL (D)" price="£9" />
                  <MenuItem name="DISARONNO (S)" price="£6" />
                  <MenuItem name="DISARONNO (D)" price="£9" />
                  <MenuItem name="GLENS VODKA (S)" price="£6" />
                  <MenuItem name="GLENS VODKA (D)" price="£9" />
                  <MenuItem name="SMIRNOFF VODKA (S)" price="£7" />
                  <MenuItem name="SMIRNOFF VODKA (D)" price="£10" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 transition-all duration-300">
                <div className="space-y-4">
                  <MenuItem name="BACARDI (S)" price="£7" />
                  <MenuItem name="BACARDI (D)" price="£10" />
                  <MenuItem name="JAMESONS (S)" price="£7" />
                  <MenuItem name="JAMESONS (D)" price="£10" />
                  <MenuItem name="CAPTAINS MORGAN (S)" price="£7" />
                  <MenuItem name="CAPTAINS MORGAN (D)" price="£10" />
                  <MenuItem name="SOUTHERN COMFORT (S)" price="£7" />
                  <MenuItem name="SOUTHERN COMFORT (D)" price="£10" />
                </div>
              </div>
            </div>
          </div>

          {/* Other Drinks Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              OTHER DRINKS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-all duration-300">
                <div className="space-y-4">
                  <MenuItem name="APEROL SPRITZ" price="£9" />
                  <MenuItem name="SOURZ" price="£3" />
                  <MenuItem name="AFTERSHOCK" price="£3.5" />
                  <MenuItem name="BAILEYS" price="£3.5" />
                  <MenuItem name="JAGER" price="£3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Soft & Hot Drinks Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              SOFT & HOT DRINKS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-lg p-6 hover:border-blue-500/60 transition-all duration-300">
                <div className="space-y-4">
                  <MenuItem name="WATER" price="£2" />
                  <MenuItem name="COKE" price="£2.5" />
                  <MenuItem name="FANTA" price="£2.5" />
                  <MenuItem name="SPRITE" price="£2.5" />
                  <MenuItem name="PEPSI" price="£2.5" />
                  <MenuItem name="JUICE" price="£2.5" />
                  <MenuItem name="LUCOZADE" price="£2.5" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-lg p-6 hover:border-blue-500/60 transition-all duration-300">
                <div className="space-y-4">
                  <MenuItem name="PERRIER" price="£2.5" />
                  <MenuItem name="APPETIZER" price="£3" />
                  <MenuItem name="SALGAM" price="£3" />
                  <MenuItem name="RED BULL" price="£3.5" />
                  <MenuItem name="SUPER MALT" price="£3.5" />
                  <MenuItem name="COFFEE" price="£3.5" />
                  <MenuItem name="TEA" price="£1.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Games & Snacks Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              GAMES & SNACKS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-lg p-6 hover:border-green-500/60 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Games</h3>
                <div className="space-y-4">
                  <MenuItem name="AMERICAN POOL" price="£8/HR" />
                  <MenuItem name="SNOOKER" price="£12/HR" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-lg p-6 hover:border-green-500/60 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Snacks</h3>
                <div className="space-y-4">
                  <MenuItem name="CRISPS" price="£2" />
                  <MenuItem name="SNICKERS" price="£2" />
                  <MenuItem name="TOAST" price="£4" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-800 hover:border-gray-600 transition-colors duration-300">
      <span className="text-gray-200 font-medium">{name}</span>
      <span className="text-orange-400 font-bold text-lg">{price}</span>
    </div>
  )
}
