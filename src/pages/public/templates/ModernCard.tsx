
import { Card as CardType } from '@/lib/mock-data';
import { Mail, Phone, Globe, Linkedin, Twitter, MapPin } from 'lucide-react';

const ModernCard = ({ data }: { data: CardType['data'] }) => {
    return (
        <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl font-sans">
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 h-32 relative">
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
                        <img src={data.avatarUrl} alt={data.name} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="pt-20 pb-8 px-6 text-center">
                <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
                <p className="text-blue-600 font-medium">{data.title}</p>
                <p className="text-gray-500 text-sm mt-1">{data.company}</p>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed max-w-xs mx-auto">
                    {data.bio}
                </p>

                <div className="mt-8 space-y-3">
                    <a href={`mailto:${data.email}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Mail size={18} />
                        </div>
                        <div className="text-left flex-1">
                            <div className="text-xs text-gray-400 font-medium">Email</div>
                            <div className="text-sm font-semibold text-gray-800">{data.email}</div>
                        </div>
                    </a>

                    <a href={`tel:${data.phone}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <Phone size={18} />
                        </div>
                        <div className="text-left flex-1">
                            <div className="text-xs text-gray-400 font-medium">Phone</div>
                            <div className="text-sm font-semibold text-gray-800">{data.phone}</div>
                        </div>
                    </a>

                    <a href={data.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                            <Globe size={18} />
                        </div>
                        <div className="text-left flex-1">
                            <div className="text-xs text-gray-400 font-medium">Website</div>
                            <div className="text-sm font-semibold text-gray-800 truncate">{data.website.replace('https://', '')}</div>
                        </div>
                    </a>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                    {data.linkedin && (
                        <a href={data.linkedin} target="_blank" className="text-gray-400 hover:text-blue-700 transition-colors">
                            <Linkedin size={24} />
                        </a>
                    )}
                    {data.twitter && (
                        <a href={data.twitter} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Twitter size={24} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModernCard;
