import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Shield, Palette, Building, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const SettingsPage = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    orders: true,
    marketing: false,
  });

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue="profile" className="space-y-6">
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <TabsList className="bg-secondary/50 inline-flex md:flex w-auto md:w-full min-w-max">
              <TabsTrigger value="profile" className="gap-2 whitespace-nowrap">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2 whitespace-nowrap">
                <Bell className="w-4 h-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2 whitespace-nowrap">
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Security</span>
              </TabsTrigger>
              <TabsTrigger value="restaurant" className="gap-2 whitespace-nowrap">
                <Building className="w-4 h-4" />
                <span className="hidden sm:inline">Restaurant</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="profile" className="space-y-6">
            <div className="card-elevated p-4 md:p-6">
              <h2 className="text-base md:text-lg font-semibold text-foreground mb-6">Profile Information</h2>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                <Avatar className="w-16 h-16 sm:w-20 sm:h-20">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl font-semibold">
                    VS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">Change Photo</Button>
                  <p className="text-xs text-muted-foreground mt-2">JPG, PNG up to 5MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input defaultValue="Vivek Singh Bhadoriya" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue="vivek@quickserve.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input defaultValue="+91 98765 43210" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Input defaultValue="Administrator" disabled />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row justify-end gap-3">
                <Button onClick={handleSave} className="gap-2 w-full sm:w-auto">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="card-elevated p-4 md:p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">Notification Preferences</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, email: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive browser notifications</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, push: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Order Alerts</p>
                    <p className="text-sm text-muted-foreground">Get notified for new orders</p>
                  </div>
                  <Switch
                    checked={notifications.orders}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, orders: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Marketing Emails</p>
                    <p className="text-sm text-muted-foreground">Receive promotional content</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, marketing: checked })
                    }
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row justify-end gap-3">
                <Button onClick={handleSave} className="gap-2 w-full sm:w-auto">
                  <Save className="w-4 h-4" />
                  Save Preferences
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="card-elevated p-4 md:p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">Change Password</h2>
              
              <div className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label>Current Password</Label>
                  <Input type="password" placeholder="Enter current password" />
                </div>
                <div className="space-y-2">
                  <Label>New Password</Label>
                  <Input type="password" placeholder="Enter new password" />
                </div>
                <div className="space-y-2">
                  <Label>Confirm New Password</Label>
                  <Input type="password" placeholder="Confirm new password" />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row justify-end gap-3">
                <Button onClick={handleSave} className="gap-2 w-full sm:w-auto">
                  <Save className="w-4 h-4" />
                  Update Password
                </Button>
              </div>
            </div>

            <div className="card-elevated p-4 md:p-6">
              <h2 className="text-base md:text-lg font-semibold text-foreground mb-4">Two-Factor Authentication</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">Add an extra layer of security to your account.</p>
              <Button variant="outline" className="w-full sm:w-auto">Enable 2FA</Button>
            </div>
          </TabsContent>

          <TabsContent value="restaurant" className="space-y-6">
            <div className="card-elevated p-4 md:p-6">
              <h2 className="text-base md:text-lg font-semibold text-foreground mb-6">Restaurant Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Restaurant Name</Label>
                  <Input defaultValue="QuickServe Restaurant" />
                </div>
                <div className="space-y-2">
                  <Label>Contact Email</Label>
                  <Input defaultValue="contact@quickserve.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input defaultValue="+91 11 2345 6789" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label>Currency</Label>
                  <Input defaultValue="INR (₹)" disabled />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>Address</Label>
                  <Input defaultValue="123 Food Street, Delhi, India" />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row justify-end gap-3">
                <Button onClick={handleSave} className="gap-2 w-full sm:w-auto">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
