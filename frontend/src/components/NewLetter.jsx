import React from 'react'

const Newsletter = () => {
  return (
    <div className="relative overflow-hidden my-16 mb-40 px-4 sm:px-6 lg:px-8">
      {/* Decorative background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto border border-slate-100 bg-gradient-to-b from-white to-slate-50/50 rounded-3xl p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col items-center text-center">
        
        {/* Decorative Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 mb-4">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Newsletter
        </span>

        {/* Heading & Copy */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 max-w-xl">
          Never Miss a Deal!
        </h2>
        <p className="mt-3 text-slate-500 text-sm md:text-base max-w-xl leading-relaxed">
          Subscribe to get the latest offers, new arrivals, and exclusive discounts delivered straight to your inbox.
        </p>

        {/* Subscription Form */}
        <form className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl">
          <div className="relative w-full group">
            <input
              className="w-full h-12 md:h-13 pl-4 pr-3 bg-white border border-slate-200 group-hover:border-slate-300 focus:border-primary rounded-xl outline-none text-slate-800 text-sm md:text-base transition-all duration-200 shadow-sm focus:shadow-[0_0_0_4px_rgba(var(--primary-rgb),0.1)] placeholder:text-slate-400"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full sm:w-auto shrink-0 h-12 md:h-13 px-8 text-white bg-primary hover:bg-primary-dull font-medium text-sm md:text-base transition-all duration-200 cursor-pointer rounded-xl shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
          >
            Subscribe
          </button>
        </form>

        {/* Trust Note */}
        <p className="mt-3 text-xs text-slate-400">
          Zero spam. Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}

export default Newsletter