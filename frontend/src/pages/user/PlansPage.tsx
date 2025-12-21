import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Crown } from "lucide-react";

const PlansPage = () => {
    const currentPlan = {
        name: "PROFESSIONAL",
        daysRemaining: 465,
        expiryDate: "Mar 31, 2027 11:51 AM"
    };

    const plans = [
        {
            id: 1,
            name: "Beginner",
            price: "FREE",
            duration: "Forever",
            recommended: false,
            isCurrent: false,
            vcardFeatures: [
                { name: "1 vCards", included: true },
                { name: "1 Services", included: true },
                { name: "5 Products", included: true },
                { name: "5 Links", included: true },
                { name: "5 Payment Listed", included: true },
                { name: "5 Galleries", included: true },
                { name: "5 Testimonials", included: true },
                { name: "Service Booking", included: true },
                { name: "Contact Form", included: true },
                { name: "10 Enquiries", included: true },
                { name: "Password Protected", included: false }
            ],
            storeFeatures: [
                { name: "1 Stores", included: true },
                { name: "5 Categories", included: true },
                { name: "5 Products", included: true }
            ],
            additionalFeatures: [
                { name: "Custom Domain", included: false, isNew: true },
                { name: "Order NFC Card", included: true, isNew: true },
                { name: "50MB storage limit", included: true, isNew: true },
                { name: "Advanced Settings", included: false },
                { name: "Progressive Web App (PWA)", included: true },
                { name: "Personalized Link", included: false },
                { name: "Hide Branding", included: false },
                { name: "Free Setup", included: false },
                { name: "Free Support", included: false }
            ]
        },
        {
            id: 2,
            name: "Intermediate",
            price: "₹24",
            duration: "Per Month",
            recommended: true,
            isCurrent: false,
            vcardFeatures: [
                { name: "5 vCards", included: true },
                { name: "10 Services", included: true },
                { name: "10 Products", included: true },
                { name: "10 Links", included: true },
                { name: "10 Payment Listed", included: true },
                { name: "10 Galleries", included: true },
                { name: "10 Testimonials", included: true },
                { name: "Service Booking", included: true },
                { name: "Contact Form", included: true },
                { name: "100 Enquiries", included: true },
                { name: "Password Protected", included: true }
            ],
            storeFeatures: [
                { name: "5 Stores", included: true },
                { name: "10 Categories", included: true },
                { name: "10 Products", included: true }
            ],
            additionalFeatures: [
                { name: "Custom Domain", included: true, isNew: true },
                { name: "Order NFC Card", included: true, isNew: true },
                { name: "100MB storage limit", included: true, isNew: true },
                { name: "Advanced Settings", included: true },
                { name: "Progressive Web App (PWA)", included: true },
                { name: "Personalized Link", included: true },
                { name: "Hide Branding", included: true },
                { name: "Free Setup", included: false },
                { name: "Free Support", included: true }
            ]
        },
        {
            id: 3,
            name: "Professional",
            price: "₹48",
            duration: "Per Month",
            recommended: false,
            isCurrent: true,
            vcardFeatures: [
                { name: "Unlimited vCards", included: true },
                { name: "Unlimited Services", included: true },
                { name: "Unlimited Products", included: true },
                { name: "Unlimited Links", included: true },
                { name: "Unlimited Payment Listed", included: true },
                { name: "Unlimited Galleries", included: true },
                { name: "Unlimited Testimonials", included: true },
                { name: "Service Booking", included: true },
                { name: "Contact Form", included: true },
                { name: "Unlimited Enquiries", included: true },
                { name: "Password Protected", included: true }
            ],
            storeFeatures: [
                { name: "Unlimited Stores", included: true },
                { name: "Unlimited Categories", included: true },
                { name: "Unlimited Products", included: true }
            ],
            additionalFeatures: [
                { name: "Custom Domain", included: true, isNew: true },
                { name: "Order NFC Card", included: true, isNew: true },
                { name: "512MB storage limit", included: true, isNew: true },
                { name: "Advanced Settings", included: true },
                { name: "Progressive Web App (PWA)", included: true },
                { name: "Personalized Link", included: true },
                { name: "Hide Branding", included: true },
                { name: "Free Setup", included: true },
                { name: "Free Support", included: true }
            ]
        }
    ];

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-12">
            <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">OVERVIEW</p>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Plans</h2>
            </div>

            {/* Current Plan Section */}
            <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">My plan</h3>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                            {currentPlan.name}
                        </p>
                        <p className="text-5xl font-bold text-gray-900 mb-4">{currentPlan.daysRemaining}</p>
                        <p className="text-gray-600 mb-6">Expires on: {currentPlan.expiryDate}</p>
                        
                        <div className="flex gap-4">
                            <Button variant="outline" className="border-gray-300 hover:bg-gray-100">
                                <span className="mr-2">↻</span> Renew
                            </Button>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                <span className="mr-2">⬆</span> Upgrade
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {plans.map((plan) => (
                    <Card 
                        key={plan.id} 
                        className={`border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 hover:border-indigo-400 hover:border-2 relative overflow-visible ${plan.isCurrent ? 'ring-2 ring-gray-900' : ''}`}
                    >
                        {plan.recommended && (
                            <div className="absolute -top-3 -right-3 z-10">
                                <div className="bg-emerald-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                                    <Crown className="w-4 h-4" />
                                    <span className="text-xs font-bold">RECOMMENDED</span>
                                </div>
                            </div>
                        )}
                        
                        <CardHeader className="border-b border-gray-100 pb-6">
                            <Badge className="bg-blue-600 hover:bg-blue-700 w-fit mb-4">
                                VCARD & STORE
                            </Badge>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                            </div>
                            <p className="text-gray-500 mt-1">{plan.duration}</p>
                            <p className="text-gray-600 mt-4 text-sm leading-relaxed min-h-[60px]">
                                Nullam diam arcu, sodales quis convallis sit amet, sagittis varius ligula.
                            </p>
                        </CardHeader>

                        <CardContent className="p-6 space-y-6">
                            {/* vCard Features */}
                            <div>
                                <h4 className="text-lg font-semibold text-blue-600 mb-3">vCard Features</h4>
                                <div className="space-y-2">
                                    {plan.vcardFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${feature.included ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                            <span className="text-sm text-gray-700">{feature.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Store Features */}
                            <div>
                                <h4 className="text-lg font-semibold text-blue-600 mb-3">Store Features</h4>
                                <div className="space-y-2">
                                    {plan.storeFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${feature.included ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                            <span className="text-sm text-gray-700">{feature.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Features */}
                            <div>
                                <h4 className="text-lg font-semibold text-blue-600 mb-3">Additional Features</h4>
                                <div className="space-y-2">
                                    {plan.additionalFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${feature.included ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                            <span className="text-sm text-gray-700">{feature.name}</span>
                                            {feature.isNew && (
                                                <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] px-1.5 py-0.5">
                                                    NEW
                                                </Badge>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Choose Plan Button */}
                            <Button 
                                className={`w-full ${
                                    plan.isCurrent 
                                        ? 'bg-gray-900 hover:bg-gray-800' 
                                        : 'bg-blue-600 hover:bg-blue-700'
                                } text-white font-semibold py-6 rounded-lg`}
                                disabled={plan.isCurrent}
                            >
                                {plan.isCurrent ? 'Current Plan' : 'Choose plan'}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500 mt-12">
                Copyright © GoBi - v20.3.0. All rights reserved.
            </div>
        </div>
    );
};

export default PlansPage;
