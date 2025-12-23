import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';

const ContactInfoEditor = ({ card }: any) => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h3 className="text-lg font-semibold text-slate-900">Contact Details</h3>
                <p className="text-sm text-slate-500">How people can reach you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input defaultValue={card.data.email} className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input defaultValue={card.data.phone} className="bg-slate-50 border-slate-200" />
                </div>
            </div>

            <div className="space-y-2">
                <Label>Alternate Phone</Label>
                <Input placeholder="+1 ..." className="bg-slate-50 border-slate-200" />
            </div>

            <div className="space-y-2">
                <Label>Website URL</Label>
                <Input defaultValue={card.data.website} className="bg-slate-50 border-slate-200" />
            </div>

            <div className="space-y-2">
                <Label>Location / Address</Label>
                <Input placeholder="123 Business St, Tech City" className="bg-slate-50 border-slate-200" />
            </div>

            <div className="space-y-4 pt-6 mt-2 border-t border-slate-100">
                <h3 className="font-semibold text-slate-900">Social Media</h3>
                <div className="space-y-3">
                    <div className="flex gap-2">
                        <Input placeholder="Platform (e.g. LinkedIn)" className="w-1/3 bg-slate-50 border-slate-200" defaultValue="LinkedIn" />
                        <Input placeholder="URL" className="flex-1 bg-slate-50 border-slate-200" defaultValue={card.data.linkedin} />
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-500 hover:bg-red-50"><Trash2 className="w-4 h-4" /></Button>
                    </div>
                    <div className="flex gap-2">
                        <Input placeholder="Platform" className="w-1/3 bg-slate-50 border-slate-200" />
                        <Input placeholder="URL" className="flex-1 bg-slate-50 border-slate-200" />
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-500 hover:bg-slate-50"><Plus className="w-4 h-4" /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoEditor;
