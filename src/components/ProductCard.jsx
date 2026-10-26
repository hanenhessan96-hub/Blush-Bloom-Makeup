import { useState } from 'react';
import { Heart, Plus, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, onAdd }) {
  const [liked, setLiked] = useState(false);
  const [addedAnim, setAddedAnim] = useState(false);

  function handleImageError(event) {
    event.currentTarget.onerror = null;
    event.currentTarget.src =
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80';
  }

  function handleAddToWishlist() {
    setLiked((previousLiked) => !previousLiked);
  }

  function handleAddToCart() {
    if (onAdd) {
      onAdd(product);
      setAddedAnim(true);
      setTimeout(() => setAddedAnim(false), 600);
    }
  }

  return (
    <article className="product-card group transition-all duration-300 hover:-translate-y-1">
      <div className="product-image-wrap relative overflow-hidden rounded-sm bg-[#f7eaee]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={handleImageError}
        />

        {product.tag && (
          <span className="product-tag shadow-sm">
            {product.tag}
          </span>
        )}

        <button
          type="button"
          className={`wishlist-btn transition-transform duration-200 hover:scale-110 active:scale-90 ${liked ? 'is-liked' : ''}`}
          onClick={handleAddToWishlist}
          aria-label={
            liked ? 'Remove from wishlist' : 'Add to wishlist'
          }
          aria-pressed={liked}
        >
          <Heart
            size={18}
            fill={liked ? 'currentColor' : 'none'}
          />
        </button>

        <button
          type="button"
          className={`quick-add transition-all duration-200 active:scale-95 ${addedAnim ? 'bg-[#b96580] text-white' : ''}`}
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          {addedAnim ? (
            <>
              <ShoppingBag size={16} />
              Added!
            </>
          ) : (
            <>
              <Plus size={16} />
              Add to Cart
            </>
          )}
        </button>
      </div>

      <div className="product-info">
        <div>
          <p className="product-category">
            {product.category}
            {product.subcategory && product.subcategory !== product.category
              ? ` · ${product.subcategory}`
              : ''}
            {product.shade ? ` · ${product.shade}` : ''}
          </p>

          <h3 className="transition-colors duration-200 group-hover:text-[#b96580]">
            {product.name}
          </h3>
        </div>

        <span className="product-price text-[#b96580] font-semibold">
          {Number(product.price).toLocaleString()} EGP
        </span>
      </div>

      <p className="product-description line-clamp-2">
        {product.description}
      </p>
    </article>
  );
}
