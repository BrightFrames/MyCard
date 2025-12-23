import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { Camera, Upload } from 'lucide-react';

const BasicInfoEditor = ({ card }: any) => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h3 className="text-lg font-semibold text-slate-900">Basic Information</h3>
                <p className="text-sm text-slate-500">Main details displayed on your card.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <Label>Profile Photo</Label>
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200 relative group cursor-pointer">
                            {card.data.avatarUrl ? (
                                <img src={card.data.avatarUrl} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-xl font-bold text-slate-400">IMG</span>
                            )}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-slate-600">Change Photo</Button>
                    </div>
                </div>
                <div className="space-y-3">
                    <Label>Logo (Optional)</Label>
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200 relative group cursor-pointer">
                            <span className="text-xs font-bold text-slate-400">LOGO</span>
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Upload className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-slate-600">Upload Logo</Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue={card.data.name} className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                    <Label>Job Title</Label>
                    <Input defaultValue={card.data.title} className="bg-slate-50 border-slate-200" />
                </div>
            </div>

            <div className="space-y-2">
                <Label>Company Name</Label>
                <Input defaultValue={card.data.company} className="bg-slate-50 border-slate-200" />
            </div>

            <div className="space-y-2">
                <Label>Bio / Description</Label>
                <Textarea defaultValue={card.data.bio} rows={4} className="bg-slate-50 border-slate-200 resize-none" />
            </div>
        </div>
    );
};

export default BasicInfoEditor;
