import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Check, CreditCard, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const OrderNFC = () => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);
    const [couponCode, setCouponCode] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("");

    const paymentMethods = [
        { id: 'paypal', name: 'Paypal', logo: '💳' },
        { id: 'razorpay', name: 'Razorpay', logo: '💰' },
        { id: 'stripe', name: 'Stripe', logo: '💵' },
        { id: 'paystack', name: 'Paystack', logo: '💸' },
        { id: 'mollie', name: 'Mollie', logo: '💴' },
        { id: 'mercado', name: 'Mercado Pago', logo: '💶' },
        { id: 'toyyibpay', name: 'Toyyibpay', logo: '💷' },
        { id: 'flutterwave', name: 'Flutterwave', logo: '🦋' },
        { id: 'bank', name: 'Bank Transfer', logo: '🏦' },
        { id: 'paytr', name: 'Paytr', logo: '💳' },
    ];

    const handleOrderClick = (product: any) => {
        setSelectedProduct(product);
        setIsOrderModalOpen(true);
    };

    const calculateTotal = () => {
        const basePrice = selectedProduct ? selectedProduct.price * quantity : 0;
        const tax = basePrice * 0.18;
        return { basePrice, tax, total: basePrice + tax };
    };

    const products = [
        {
            id: 1,
            name: 'Premium Gradient NFC Card',
            gradient: 'from-purple-600 via-pink-500 to-pink-600',
            price: 15,
            description: 'Stunning gradient design with premium metal finish and instant tap-to-share technology',
            features: [
                'Premium metal finish',
                'Beautiful gradient colors',
                'Instant contact sharing',
                'Durable and waterproof',
                'Customizable design'
            ]
        },
        {
            id: 2,
            name: 'Blue Modern NFC Card',
            gradient: 'from-blue-600 via-blue-500 to-cyan-500',
            price: 15,
            description: 'Professional blue design perfect for corporate and business professionals',
            features: [
                'Modern blue aesthetics',
                'Professional appearance',
                'Eco-friendly option',
                'Tap-to-share enabled',
                'Works with all smartphones'
            ]
        },
        {
            id: 3,
            name: 'Vibrant Pink NFC Card',
            gradient: 'from-pink-600 via-purple-500 to-purple-600',
            price: 15,
            description: 'Eye-catching pink design that makes you stand out from the crowd',
            features: [
                'Bold pink gradient',
                'Attention-grabbing design',
                'Premium quality',
                'Full-color printing',
                'Long-lasting durability'
            ]
        }
    ];

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Order NFC Cards</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Choose from our premium collection of NFC business cards. All cards come with instant tap-to-share technology.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {products.map((product) => (
                    <Card key={product.id} className="border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:scale-105 hover:-translate-y-2">
                        <div className={`bg-gradient-to-br ${product.gradient} p-6 sm:p-8 aspect-[1.586/1] relative overflow-hidden`}>
                            {/* Bank Logo */}
                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                                <div className="flex items-center gap-2 text-white">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded"></div>
                                    <span className="font-bold text-sm sm:text-base">BANK NAME</span>
                                </div>
                            </div>

                            {/* Chip and Contactless */}
                            <div className="absolute top-16 sm:top-20 left-4 sm:left-6 flex items-center gap-3 z-10">
                                <div className="w-10 h-8 sm:w-12 sm:h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-md shadow-md">
                                    <div className="w-full h-full rounded-md border border-yellow-500/30"></div>
                                </div>
                                <div className="text-white text-lg sm:text-xl font-light">)))</div>
                            </div>

                            {/* Card Number */}
                            <div className="absolute top-28 sm:top-32 left-4 sm:left-6 right-4 sm:right-6 z-10">
                                <p className="text-white text-base sm:text-xl font-light tracking-wider sm:tracking-widest">
                                    4532 3100 9999 1048
                                </p>
                            </div>

                            {/* Card Details */}
                            <div className="absolute bottom-12 sm:bottom-14 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-end z-10">
                                <div>
                                    <p className="text-white/70 text-[9px] sm:text-[10px] mb-0.5 sm:mb-1 uppercase tracking-wide">Member Since</p>
                                    <p className="text-white font-light text-xs sm:text-sm">00</p>
                                </div>
                                <div>
                                    <p className="text-white/70 text-[9px] sm:text-[10px] mb-0.5 sm:mb-1 uppercase tracking-wide">Valid Thru</p>
                                    <p className="text-white font-light text-xs sm:text-sm">00-00</p>
                                </div>
                            </div>

                            {/* Cardholder Name */}
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10">
                                <p className="text-white text-xs sm:text-sm font-light tracking-wider uppercase">Cardholder Name</p>
                            </div>

                            {/* World Map */}
                            <div className="absolute top-4 sm:top-6 right-12 sm:right-16 opacity-20 z-0">
                                <div className="w-12 h-9 sm:w-16 sm:h-12 bg-white/30 rounded"></div>
                            </div>

                            {/* Price Tag */}
                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white text-gray-900 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-sm sm:text-base font-bold shadow-lg ring-2 ring-white/50 z-20">
                                ₹{product.price}
                            </div>
                        </div>
                        <CardContent className="p-6 bg-white">
                            <div className="flex items-center gap-2 mb-2">
                                <CreditCard className="w-5 h-5 text-gray-600" />
                                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                            </div>
                            <p className="text-gray-500 mb-4 text-sm leading-relaxed">{product.description}</p>
                            
                            <div className="space-y-2 mb-6">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition-all"
                                onClick={() => handleOrderClick(product)}
                            >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Order Now - ₹{product.price}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Order Modal */}
            <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Complete Your Order</DialogTitle>
                    </DialogHeader>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                        {/* Order Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-900">Order Details</h3>
                            
                            <Card className="border-gray-200">
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between py-3 border-b">
                                            <span className="text-gray-600 font-medium">Description</span>
                                            <span className="text-gray-600 font-medium">Price</span>
                                        </div>
                                        
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-medium text-gray-900">NFC Card Name</p>
                                                <p className="text-sm text-gray-500">{selectedProduct?.name || 'Metal NFC Card'}</p>
                                            </div>
                                            <span className="font-medium text-gray-900">
                                                {selectedProduct?.name || 'Metal NFC Card'}
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-gray-700">Quantity</span>
                                            <Input 
                                                type="number" 
                                                min="1" 
                                                value={quantity}
                                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                                className="w-20 text-center"
                                            />
                                        </div>

                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-gray-700">Price</span>
                                            <span className="font-medium text-gray-900">₹{calculateTotal().basePrice}</span>
                                        </div>

                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-gray-700">Goods and Service Tax (18%)</span>
                                            <span className="font-medium text-gray-900">₹{calculateTotal().tax.toFixed(0)}</span>
                                        </div>

                                        <div className="flex justify-between items-center py-3 border-t-2 border-gray-300 mt-4">
                                            <span className="text-lg font-bold text-gray-900">Total</span>
                                            <span className="text-lg font-bold text-gray-900">₹{calculateTotal().total.toFixed(0)}</span>
                                        </div>

                                        <div className="flex gap-2 mt-4">
                                            <Input 
                                                placeholder="COUPON CODE" 
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                className="flex-1"
                                            />
                                            <Button className="bg-blue-600 hover:bg-blue-700">Apply</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Shipping Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-700">Shipping Details</h3>
                            
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label>Name <span className="text-red-500">*</span></Label>
                                        <Input placeholder="User" className="mt-1" />
                                    </div>
                                    <div>
                                        <Label>Email <span className="text-red-500">*</span></Label>
                                        <Input type="email" placeholder="user@user.com" className="mt-1" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label>Phone <span className="text-red-500">*</span></Label>
                                        <Input placeholder="9876543210" className="mt-1" />
                                    </div>
                                    <div>
                                        <Label>Address <span className="text-red-500">*</span></Label>
                                        <Input placeholder="Anna Nagar" className="mt-1" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label>City <span className="text-red-500">*</span></Label>
                                        <Input placeholder="Chennai" className="mt-1" />
                                    </div>
                                    <div>
                                        <Label>State/Province <span className="text-red-500">*</span></Label>
                                        <Input placeholder="Tamilnadu" className="mt-1" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label>Zip Code</Label>
                                        <Input placeholder="600101" className="mt-1" />
                                    </div>
                                    <div>
                                        <Label>Country <span className="text-red-500">*</span></Label>
                                        <Input placeholder="India" className="mt-1" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label>Type</Label>
                                        <Input placeholder="Personal" className="mt-1" />
                                    </div>
                                    <div>
                                        <Label>Tax Number</Label>
                                        <Input placeholder="Tax Number" className="mt-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-700 mb-6">Payment method</h3>
                        <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {paymentMethods.map((method) => (
                                <div key={method.id} className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 hover:border-indigo-500 cursor-pointer transition-colors">
                                    <RadioGroupItem value={method.id} id={method.id} />
                                    <Label htmlFor={method.id} className="flex items-center gap-3 cursor-pointer flex-1">
                                        <span className="text-2xl">{method.logo}</span>
                                        <span className="font-medium text-gray-700">{method.name}</span>
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-end gap-3">
                        <Button variant="outline" onClick={() => setIsOrderModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                            Complete Order
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50">
                <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Choose Our NFC Cards?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div>
                            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Instant Sharing</h4>
                            <p className="text-sm text-gray-600">Share your contact info with just a tap</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Professional Look</h4>
                            <p className="text-sm text-gray-600">Make a lasting impression</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h4>
                            <p className="text-sm text-gray-600">No more paper business cards</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default OrderNFC;
