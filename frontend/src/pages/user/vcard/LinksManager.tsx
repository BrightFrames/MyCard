import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Switch } from "@/components/ui/switch";
import { Plus, GripVertical, Trash2, Globe, Image, Layout, Video } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LinksManager = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h3 className="text-base font-semibold text-slate-900">My Page Links</h3>
                    <p className="text-sm text-slate-500">Drag and drop to reorder blocks.</p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
                            <Plus className="w-4 h-4 mr-2" /> Add Block
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem>
                            <Globe className="mr-2 h-4 w-4" /> Link
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Image className="mr-2 h-4 w-4" /> Image Grid
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Video className="mr-2 h-4 w-4" /> Video Embed
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Layout className="mr-2 h-4 w-4" /> Text Block
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group">
                        <div className="cursor-grab active:cursor-grabbing p-1 hover:bg-slate-100 rounded">
                            <GripVertical className="w-5 h-5 text-slate-400" />
                        </div>

                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600">
                            <Globe className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0 grid gap-1">
                            <Input
                                defaultValue={i === 1 ? "My Portfolio" : `Link Title ${i}`}
                                className="h-8 font-semibold text-slate-900 border-transparent hover:border-slate-200 focus:border-indigo-500 px-2 -ml-2 bg-transparent"
                            />
                            <div className="text-xs text-slate-400 px-2 -ml-2 truncate flex items-center gap-2">
                                <span className="text-slate-300">https://</span>
                                example.com/project-{i}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-slate-500">Active</span>
                                <Switch defaultChecked className="scale-75 data-[state=checked]:bg-emerald-500" />
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State / Add More Hint */}
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-indigo-200 hover:bg-indigo-50/10 transition-colors cursor-pointer">
                <p className="text-sm font-medium text-slate-600 mb-1">Want to show more?</p>
                <p className="text-xs text-slate-400">Add a contact form, image gallery, or Spotify embed.</p>
            </div>
        </div>
    );
};

export default LinksManager;
