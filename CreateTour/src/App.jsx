import React, { useState } from "react";
import { Button } from "./components/ui/button";
import user from "./assets/user.jpg";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
("use client");
import { useToast } from "@/components/ui/use-toast";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";

import { Checkbox } from "@/components/ui/checkbox";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const App = () => {
  const { toast } = useToast();
  const [openProfile, setOpenProfile] = useState(false);
  const [openProfile2, setOpenProfile2] = useState(false);


  const [checked, setChecked] = useState(null);

  const handleCheckboxChange = (value) => {
    setChecked(value);
  };

  return (
    <div className="outer-contaier w-full flex justify-center items-center h-screen">
      <Card className="w-full max-w-2xl sm:max-w-3xl md:max-w-screen-lg p-3 shadow-xl px-8">
        <CardHeader>
          <h1 className="flex justify-center">CREATE A TOUR</h1>
          <h2 className="flex justify-center">Choose the type of tour you want to make</h2>

          
        </CardHeader>

        <CardContent>
          <form>
          <div className="flex justify-around mb-8">
            <div className="flex items-center space-x-2">
              <Checkbox checked={checked === "checkbox1"} onClick={() => {
                setOpenProfile((prev) => !prev);
                openProfile2 && setOpenProfile2(false);
                handleCheckboxChange("checkbox1")
              }} id="terms" />
              <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Direct booking (No Referrals)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox checked={checked === "checkbox2"} onClick={() => {
                setOpenProfile2((prev) => !prev);
                openProfile && setOpenProfile(false);
                handleCheckboxChange("checkbox2");
                
              }} id="terms" />
              <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Referral Booking (Get coins for Referrals)
              </label>
            </div>
          </div>

          <div className={`${openProfile ? "" : "hidden"}`}>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className={`${openProfile2 ? "" : "hidden"} flex justify-center mt-8`}>
            <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            </div>

            <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            </div>
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
        <Toaster />
      </Card>
    </div>
  );
};

export default App;
