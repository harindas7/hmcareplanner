/* HMCarePlanner - Shared Components */

function getBasePath() {
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  if (window.location.pathname.endsWith('.html') && depth > 0) {
    return '../'.repeat(depth - 1) || './';
  }
  if (depth === 0 || window.location.pathname === '/') return './';
  return '../'.repeat(depth) || './';
}

const BASE = getBasePath();

function renderHeader() {
  const currentPath = window.location.pathname;
  const isActive = (path) => {
    if (path === '/' && (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/app/') || currentPath.endsWith('/app/index.html'))) return true;
    if (path !== '/' && currentPath.includes(path.replace(/\//g, ''))) return true;
    return false;
  };
  const activeClass = (path) => isActive(path) ? 'text-blue-700 font-semibold' : 'text-slate-700';
  const isFeaturePage = currentPath.includes('features') || currentPath.includes('emar') || currentPath.includes('check-in') || currentPath.includes('mobile-app');

  return `
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header id="site-header" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="${BASE}" class="flex items-center gap-2 group" aria-label="HMCarePlanner Home">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-teal-500 flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"/>
            </svg>
          </div>
          <div>
            <span class="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">HMCare<span class="text-blue-600">Planner</span></span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          <a href="${BASE}" class="nav-link px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all ${activeClass('/')}">Home</a>
          
          <div class="dropdown relative">
            <button class="nav-link px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-1 ${isFeaturePage ? 'text-blue-700 font-semibold' : 'text-slate-700'}" aria-haspopup="true" aria-expanded="false">
              Features
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="dropdown-menu absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
              <a href="${BASE}hmcareplanner-features/" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-all group">
                <div class="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </div>
                <div><div class="text-sm font-semibold text-slate-800">All Features</div><div class="text-xs text-slate-500">Complete overview</div></div>
              </a>
              <a href="${BASE}hmcareplanner-features-service-client-record-keeping/" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-all group">
                <div class="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                  <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                </div>
                <div><div class="text-sm font-semibold text-slate-800">Client Record Keeping</div><div class="text-xs text-slate-500">Secure client management</div></div>
              </a>
              <a href="${BASE}hmcareplanner-features-care-visit-scheduling-and-rostering/" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-all group">
                <div class="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
                <div><div class="text-sm font-semibold text-slate-800">Scheduling & Rostering</div><div class="text-xs text-slate-500">Smart visit planning</div></div>
              </a>
              <a href="${BASE}check-in-check-out-with-geo-location/" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-all group">
                <div class="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div><div class="text-sm font-semibold text-slate-800">Call Monitoring</div><div class="text-xs text-slate-500">Geo-location tracking</div></div>
              </a>
              <a href="${BASE}emar-electronic-medication-administration-records/" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-all group">
                <div class="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                  <svg class="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                </div>
                <div><div class="text-sm font-semibold text-slate-800">eMAR</div><div class="text-xs text-slate-500">Medication management</div></div>
              </a>
            </div>
          </div>

          <a href="${BASE}hmcareplanner-mobile-app/" class="nav-link px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all ${activeClass('mobile-app')}">Mobile App</a>
          <a href="${BASE}pricing/" class="nav-link px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all ${activeClass('pricing')}">Pricing</a>
          <a href="${BASE}blog/" class="nav-link px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all ${activeClass('blog')}">Blog</a>
          <a href="${BASE}contact-us/" class="nav-link px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all ${activeClass('contact')}">Contact</a>
        </nav>

        <!-- CTA Buttons -->
        <div class="hidden lg:flex items-center gap-3">
          <a href="https://app.hmcareplanner.co.uk" class="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors px-3 py-2" target="_blank" rel="noopener">Customer Login</a>
          <a href="${BASE}book-a-demo/" class="text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 transition-colors px-4 py-2.5 rounded-lg">Book a Demo</a>
          <a href="${BASE}free-trial/" class="btn-primary text-sm !py-2.5 !px-5">Start Free Trial</a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Toggle menu" aria-expanded="false">
          <svg id="menu-open-icon" class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg id="menu-close-icon" class="w-6 h-6 text-slate-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>

  </header>

    <!-- Mobile Menu (outside header to avoid backdrop-filter stacking context) -->
    <div id="mobile-menu" class="mobile-menu fixed top-20 right-0 bottom-0 w-80 max-w-full bg-white shadow-2xl z-50 overflow-y-auto lg:hidden">
      <div class="p-6 space-y-2">
        <a href="${BASE}" class="block px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-all">Home</a>
        <div class="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Features</div>
        <a href="${BASE}hmcareplanner-features/" class="block px-4 py-2.5 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all pl-8">All Features</a>
        <a href="${BASE}hmcareplanner-features-service-client-record-keeping/" class="block px-4 py-2.5 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all pl-8">Client Record Keeping</a>
        <a href="${BASE}hmcareplanner-features-care-visit-scheduling-and-rostering/" class="block px-4 py-2.5 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all pl-8">Scheduling & Rostering</a>
        <a href="${BASE}check-in-check-out-with-geo-location/" class="block px-4 py-2.5 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all pl-8">Call Monitoring</a>
        <a href="${BASE}emar-electronic-medication-administration-records/" class="block px-4 py-2.5 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all pl-8">eMAR</a>
        <div class="border-t border-slate-100 my-2"></div>
        <a href="${BASE}hmcareplanner-mobile-app/" class="block px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-all">Mobile App</a>
        <a href="${BASE}pricing/" class="block px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-all">Pricing</a>
        <a href="${BASE}blog/" class="block px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-all">Blog</a>
        <a href="${BASE}contact-us/" class="block px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-all">Contact</a>
        <div class="border-t border-slate-100 my-3"></div>
        <a href="https://app.hmcareplanner.co.uk" class="block px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 font-medium transition-all" target="_blank" rel="noopener">Customer Login</a>
        <a href="${BASE}book-a-demo/" class="block px-4 py-3 rounded-lg text-center text-blue-600 border border-blue-200 font-medium transition-all mt-2">Book a Demo</a>
        <a href="${BASE}free-trial/" class="block btn-primary text-center mt-2">Start Free Trial</a>
      </div>
    </div>
    <!-- Mobile menu overlay -->
    <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/30 z-40 hidden lg:hidden"></div>
  <div class="h-20"></div>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="bg-slate-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <a href="${BASE}" class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"/>
              </svg>
            </div>
            <span class="text-xl font-bold">HMCare<span class="text-blue-400">Planner</span></span>
          </a>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">Simple-to-use, cloud-based care management software designed for UK domiciliary care agencies. CQC-ready from day one.</p>
          <div class="flex gap-3">
            <a href="#" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="Twitter">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="Instagram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul class="space-y-3">
            <li><a href="${BASE}hmcareplanner-features/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Client & Staff Management</a></li>
            <li><a href="${BASE}hmcareplanner-features-care-visit-scheduling-and-rostering/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Scheduling & Rostering</a></li>
            <li><a href="${BASE}emar-electronic-medication-administration-records/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">eMAR</a></li>
            <li><a href="${BASE}check-in-check-out-with-geo-location/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Call Monitoring</a></li>
            <li><a href="${BASE}hmcareplanner-mobile-app/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Mobile App</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul class="space-y-3">
            <li><a href="${BASE}why-choose-hmcareplanner/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Why Choose Us</a></li>
            <li><a href="${BASE}hmcareplanner-features/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Features</a></li>
            <li><a href="${BASE}pricing/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Pricing</a></li>
            <li><a href="${BASE}free-trial/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Free Trial</a></li>
            <li><a href="${BASE}book-a-demo/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Book a Demo</a></li>
            <li><a href="${BASE}blog/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Blog</a></li>
            <li><a href="${BASE}contact-us/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Contact Us</a></li>
            <li><a href="${BASE}privacy-policy/" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <a href="tel:02080580920" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">0208 058 0920</a>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <a href="mailto:info@hmcareplanner.co.uk" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">info@hmcareplanner.co.uk</a>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <span class="text-slate-400 text-sm">24/7 Support Available</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm">&copy; ${year} HMCarePlanner. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="${BASE}privacy-policy/" class="text-slate-500 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
          <a href="${BASE}contact-us/" class="text-slate-500 hover:text-blue-400 text-sm transition-colors">Contact</a>
          <a href="https://app.hmcareplanner.co.uk" class="text-slate-500 hover:text-blue-400 text-sm transition-colors" target="_blank" rel="noopener">Customer Login</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function renderCTA() {
  return `
  <section class="py-20 hero-gradient relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Care Agency?</h2>
      <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Start your 14-day free trial today. No credit card required. Full access to all features.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="${BASE}free-trial/" class="btn-accent text-lg">Start Free Trial</a>
        <a href="${BASE}contact-us/" class="btn-secondary text-lg">Book a Demo</a>
      </div>
      <div class="flex flex-wrap gap-6 justify-center mt-8">
        <div class="trust-badge"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Free 14-day trial</div>
        <div class="trust-badge"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> No credit card needed</div>
        <div class="trust-badge"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 24/7 Support</div>
      </div>
    </div>
  </section>`;
}

/* Initialize page components */
document.addEventListener('DOMContentLoaded', function() {
  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  const ctaEl = document.getElementById('cta-placeholder');

  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) footerEl.innerHTML = renderFooter();
  if (ctaEl) ctaEl.innerHTML = renderCTA();

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');
  const menuOverlay = document.getElementById('mobile-menu-overlay');

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
    openIcon.classList.toggle('hidden', isOpen);
    closeIcon.classList.toggle('hidden', !isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
    if (menuOverlay) {
      menuOverlay.classList.toggle('hidden', !isOpen);
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', toggleMobileMenu);
    if (menuOverlay) {
      menuOverlay.addEventListener('click', toggleMobileMenu);
    }
  }

  // Sticky header shadow on scroll
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  // Scroll reveal animation
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function(el) { observer.observe(el); });
  }
});
