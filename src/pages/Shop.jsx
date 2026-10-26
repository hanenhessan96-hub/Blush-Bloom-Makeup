import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
  ArrowUpDown,
} from 'lucide-react';

import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = [
  'All',
  'Blush',
  'Highlighter',
  'Foundation',
];

export default function Shop({ onAdd }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const requestedCategory = searchParams.get('category');

  const category = requestedCategory === 'Makeup'
    ? 'All'
    : categories.includes(requestedCategory)
    ? requestedCategory
    : 'All';

  const [subcategory, setSubcategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Reset the subcategory when the main category changes.
  useEffect(() => {
    setSubcategory('All');
  }, [category]);

  // Get products belonging to the selected main category.
  const categoryProducts = useMemo(() => {
    return products.filter((product) => {
      return category === 'All' || product.category === category;
    });
  }, [category]);

  // Build the available subcategories dynamically.
  const subcategories = useMemo(() => {
    const values = categoryProducts
      .map((product) => product.subcategory)
      .filter(Boolean);

    return ['All', ...new Set(values)];
  }, [categoryProducts]);

  // Filter and sort products.
  const filteredProducts = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    const result = categoryProducts.filter((product) => {
      const matchesSubcategory =
        subcategory === 'All' ||
        product.subcategory === subcategory;

      const searchableText = [
        product.name,
        product.category,
        product.subcategory,
        product.shade,
        product.description,
        product.tag,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const matchesSearch = !searchText || searchableText.includes(searchText);

      return matchesSubcategory && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      return [...result].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return [...result].sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'name-asc') {
      return [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [categoryProducts, subcategory, search, sortBy]);

  function handleCategoryChange(nextCategory) {
    if (nextCategory === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: nextCategory });
    }

    setSubcategory('All');
  }

  function clearFilters() {
    setSearchParams({});
    setSubcategory('All');
    setSearch('');
    setSortBy('featured');
  }

  const hasActiveFilters =
    category !== 'All' ||
    subcategory !== 'All' ||
    search.trim() !== '' ||
    sortBy !== 'featured';

  return (
    <main className="shop-page">
      {/* Shop hero */}
      <section className="shop-hero">
        <div className="container">
          <div className="shop-hero-content">
            <span className="eyebrow">
              <Sparkles size={15} />
              YOUR BEAUTY BAG STARTS HERE
            </span>

            <h1>
              Meet your new <em>favorites.</em>
            </h1>

            <p>
              Explore our complete collection of blushes, highlighters, and foundations
              crafted for your everyday effortless radiance.
            </p>
          </div>
        </div>
      </section>

      {/* Shop content */}
      <section className="shop-content section-padding">
        <div className="container">
          {/* Main category filters & search */}
          <div className="shop-toolbar">
            <div className="category-filters">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`category-filter ${
                    category === item ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryChange(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Search and Sort Controls */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="shop-search">
                <Search size={18} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products, shades..."
                  aria-label="Search products"
                />

                {search && (
                  <button
                    type="button"
                    className="clear-search"
                    onClick={() => setSearch('')}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs text-[#805968] bg-white border border-[#ead4dc] rounded-full px-3 py-2">
                <ArrowUpDown size={14} className="text-[#a77789]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-0 outline-none cursor-pointer text-xs text-[#6b555d]"
                  aria-label="Sort products"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Subcategory filters */}
          {subcategories.length > 1 && (
            <div className="subcategory-section rounded-md shadow-sm">
              <div className="subcategory-heading">
                <SlidersHorizontal size={16} />
                <span>Explore by formula</span>
              </div>

              <div className="subcategory-filters">
                {subcategories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`subcategory-filter ${
                      subcategory === item ? 'active' : ''
                    }`}
                    onClick={() => setSubcategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results heading */}
          <div className="shop-results-heading">
            <div>
              <span className="eyebrow">MADE FOR YOUR RITUAL</span>

              <h2>
                {category === 'All'
                  ? 'All Makeup Products'
                  : `${category} Collection`}
              </h2>
            </div>

            <p className="results-count">
              Showing {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="row g-4 product-grid">
              {filteredProducts.map((product) => (
                <div
                  className="col-6 col-md-6 col-lg-4 col-xl-3"
                  key={product.id}
                >
                  <ProductCard
                    product={product}
                    onAdd={onAdd}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="shop-empty-state rounded-md">
              <div className="empty-state-icon">
                <Search size={26} />
              </div>

              <h3>No products found</h3>

              <p>
                Try another search term or clear your filters
                to discover your perfect glow.
              </p>

              <button
                type="button"
                className="btn-blush"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Clear filters wrap */}
          {hasActiveFilters && filteredProducts.length > 0 && (
            <div className="clear-filters-wrap">
              <button
                type="button"
                className="clear-filters-button rounded-full"
                onClick={clearFilters}
              >
                <X size={15} />
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}