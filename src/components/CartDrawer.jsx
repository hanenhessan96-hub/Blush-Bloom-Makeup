import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const freeShippingThreshold = 500;
  const progressToFreeShipping = Math.min(
    100,
    (total / freeShippingThreshold) * 100
  );
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);

  return (
    <div
      className="fixed inset-0 z-[1300] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#fffdfd] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 border-b border-[#f3e8eb] flex items-center justify-between bg-[#fff8fa]">
          <div className="flex items-center gap-2 text-[#34252b]">
            <ShoppingBag size={20} className="text-[#bd7188]" />
            <h2 className="text-lg font-serif font-semibold m-0">Your Beauty Bag</h2>
            <span className="text-xs bg-[#f4d9e1] text-[#714455] px-2 py-0.5 rounded-full font-medium">
              {items.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#805968] hover:bg-[#f7e3e9] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="px-4 py-3 bg-[#fff0f4] border-b border-[#f3e8eb] text-xs text-[#714455]">
          {remainingForFreeShipping > 0 ? (
            <p className="m-0 mb-1.5">
              Add <span className="font-semibold">{remainingForFreeShipping.toLocaleString()} EGP</span> more for <span className="font-semibold">FREE Shipping</span>!
            </p>
          ) : (
            <p className="m-0 mb-1.5 font-semibold text-[#8e455c]">
              🎉 You've unlocked FREE Shipping!
            </p>
          )}
          <div className="w-full bg-[#f4d4de] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#b96580] h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#927d84]">
              <div className="w-16 h-16 rounded-full bg-[#f8e5eb] text-[#b96580] flex items-center justify-center mb-4">
                <ShoppingBag size={30} />
              </div>
              <h3 className="font-serif text-xl text-[#34252b] mb-2">Your bag is empty</h3>
              <p className="text-sm max-w-xs mb-6">
                Looks like you haven't added anything lovely to your bag yet.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="btn-blush inline-flex items-center gap-2"
              >
                Start Shopping <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 pb-4 border-b border-[#f3e8eb] last:border-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded bg-[#f7eaee] flex-shrink-0"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-serif font-medium text-[#34252b] truncate m-0">
                        {item.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#b39da5] hover:text-[#bd5576] transition-colors p-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <p className="text-xs text-[#a1848e] m-0 mt-0.5">
                      {item.category} {item.shade ? `· ${item.shade}` : ''}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-semibold text-[#b96580]">
                      {(Number(item.price) * item.quantity).toLocaleString()} EGP
                    </span>

                    <div className="flex items-center border border-[#ead4dc] rounded-full bg-white">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-2 text-[#805968] hover:text-[#34252b] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="text-xs font-semibold px-1 text-[#34252b]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 px-2 text-[#805968] hover:text-[#34252b] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-[#f3e8eb] bg-[#fff8fa] space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#806c73]">Subtotal</span>
              <span className="font-serif font-semibold text-lg text-[#34252b]">
                {total.toLocaleString()} EGP
              </span>
            </div>

            <div className="flex justify-between items-center text-xs text-[#927d84]">
              <span>Shipping</span>
              <span>{remainingForFreeShipping === 0 ? 'FREE' : 'Calculated at checkout'}</span>
            </div>

            <button
              type="button"
              onClick={() => {
                alert(`Thank you for your order! Total: ${total.toLocaleString()} EGP (Demo Checkout)`);
                onClearCart();
                onClose();
              }}
              className="w-full btn-blush py-3 text-center justify-center font-medium shadow-sm hover:shadow"
            >
              Checkout · {total.toLocaleString()} EGP
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full text-center text-xs text-[#8c586d] hover:underline pt-1"
            >
              Continue shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
