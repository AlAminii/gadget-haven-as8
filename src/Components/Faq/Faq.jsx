const Faq = () => {
    return (
        <div className="space-y-4">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    What is this website about?
                </div>
                <div className="collapse-content">
                    <p>This website provides a wide range of gadgets and electronics for sale, along with reviews and buying guides.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How can I place an order?
                </div>
                <div className="collapse-content">
                    <p>You can place an order by selecting the product, adding it to your cart, and checking out with your preferred payment method.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Do you offer international shipping?
                </div>
                <div className="collapse-content">
                    <p>Yes, we offer international shipping to many countries. Please check the shipping details on the checkout page for more information.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How can I track my order?
                </div>
                <div className="collapse-content">
                    <p>Once your order has shipped, you will receive a tracking number via email. You can use this number to track your order on the courier's website.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Can I return a product?
                </div>
                <div className="collapse-content">
                    <p>Yes, we offer a 30-day return policy. If you are not satisfied with your product, you can return it within 30 days of receiving it. Please check our return policy page for more details.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
