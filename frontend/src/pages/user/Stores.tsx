import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";

const Stores = () => {
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [stores, setStores] = useState<any[]>([]); // Mock state, initially empty

    const handleCreateStore = (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreateOpen(false);
        setStores([...stores, { id: 1, name: "New Store", status: "Active" }]); // Mock add
        toast.success("Store created successfully!");
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto animate-fade-in-up">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Stores</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage your business stores and locations.</p>
                </div>
                <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                            <Plus className="w-4 h-4 mr-2" /> Create Store
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New Store</DialogTitle>
                            <DialogDescription>
                                Add a new store to start selling products or services.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleCreateStore} className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Store Name</Label>
                                <Input id="name" placeholder="My Awesome Store" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="slug">Store URL Slug</Label>
                                <Input id="slug" placeholder="my-awesome-store" />
                            </div>
                            <DialogFooter>
                                <Button type="submit">Create Store</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {stores.length === 0 ? (
                <Card className="border-gray-200 border-dashed border-2 bg-gray-50/50">
                    <CardHeader className="text-center py-16">
                        <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                            <Store className="w-8 h-8 text-indigo-500" />
                        </div>
                        <CardTitle className="text-xl text-gray-900">No Stores Yet</CardTitle>
                        <CardDescription className="max-w-sm mx-auto mt-2">
                            Create your first store to showcase products, services, and accept orders directly from your digital card.
                        </CardDescription>
                        <div className="mt-8">
                            <Button onClick={() => setIsCreateOpen(true)} variant="outline">
                                Create your first store
                            </Button>
                        </div>
                    </CardHeader>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stores.map((store, idx) => (
                        <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                                        <Store className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <Badge className="bg-emerald-500 hover:bg-emerald-600">{store.status}</Badge>
                                </div>
                                <CardTitle className="mt-4">{store.name}</CardTitle>
                                <CardDescription>0 Products • 0 Orders</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" className="w-full">Manage Store</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Stores;
