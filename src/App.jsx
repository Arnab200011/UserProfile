import React from "react";
import { Button } from "./components/ui/button";
import user from "./assets/user.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
("use client");
import { useToast } from "@/components/ui/use-toast";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  const { toast } = useToast();
  return (
    <div className="outer-contaier w-full flex justify-center items-center h-screen">
      <Card className="w-full max-w-2xl sm:max-w-3xl md:max-w-screen-lg p-3 shadow-xl">
        <CardHeader>
          <div className="profile flex items-center gap-3">
            <img
              alt={"User image"}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="edit-btn">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline">
                    Upload new picture
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form>
            <div className="input-section-1 grid sm:grid-cols-2 grid-cols-1 gap-4 pb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="lastName" name="lastName" placeholder="Last name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mobile" className="text-sm font-medium">
                  Mobile Number
                </label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Mobile number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Address
              </Label>
              <Textarea id="address" name="address" placeholder="Address" />
            </div>
          </form>
          <div className="flex flex-wrap sm:justify-end gap-6 mt-4 justify-center">
            <Button type="button" size={"lg"} variant={"outline"}>
              Cancel
            </Button>

            <Button
              onClick={() =>
                toast({
                  description: "Success! Changes have been saved successfully!",
                })
              }
              type="submit"
              size={"lg"}
              variant={"outline"}
            >
              Confirm
            </Button>
          </div>
        </CardContent>
        <Toaster  />
      </Card>
    </div>
  );
};

export default App;
