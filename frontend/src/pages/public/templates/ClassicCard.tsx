
import { Card as CardType } from '@/lib/mock-data';
import { Mail, Phone, Globe, Linkedin, Twitter } from 'lucide-react';

const ClassicCard = ({ data }: { data: CardType['data'] }) => {
    return (
        <div className="w-full max-w-md bg-slate-50 rounded-lg overflow-hidden shadow-xl border border-gray-200 font-serif">
            <div className="bg-slate-900 p-8 text-center">
                <div className="w-24 h-24 rounded-full border-2 border-slate-700 overflow-hidden mx-auto mb-4">
                    <img src={data.avatarUrl} alt={data.name} className="w-full h-full object-cover" />
                </div>
                <h1 className="text-xl font-bold text-white tracking-wide uppercase">{data.name}</h1>
                <p className="text-slate-400 text-sm mt-1 tracking-wider">{data.title}</p>
            </div>

            <div className="p-8 bg-white">
                <div className="text-center mb-8">
                    <p className="text-slate-600 italic">"{data.bio}"</p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-3">
                        <div className="w-8 flex justify-center text-slate-800">
                            <Mail size={16} />
                        </div>
                        <div className="text-sm text-slate-600">{data.email}</div>
                    </div>

                    <div className="flex items-center gap-4 border-b border-gray-100 pb-3">
                        <div className="w-8 flex justify-center text-slate-800">
                            <Phone size={16} />
                        </div>
                        <div className="text-sm text-slate-600">{data.phone}</div>
                    </div>

                    <div className="flex items-center gap-4 border-b border-gray-100 pb-3">
                        <div className="w-8 flex justify-center text-slate-800">
                            <Globe size={16} />
                        </div>
                        <div className="text-sm text-slate-600">{data.website}</div>
                    </div>

                    <div className="flex justify-center gap-6 pt-4">
                        {data.linkedin && (
                            <a href={data.linkedin} target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        )}
                        {data.twitter && (
                            <a href={data.twitter} target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <Twitter size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <div className="inline-block px-3 py-1 border border-slate-200 text-xs text-slate-400 uppercase tracking-widest">
                        {data.company}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassicCard;
