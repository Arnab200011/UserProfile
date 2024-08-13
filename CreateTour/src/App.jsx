import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const travellers = [
  { name: "Apple", email: "apple@example.com", phone: "123-456-7890" },
  { name: "Banana", email: "banana@example.com", phone: "234-567-8901" },
  { name: "Blueberry", email: "blueberry@example.com", phone: "345-678-9012" },
  { name: "Grapes", email: "grapes@example.com", phone: "456-789-0123" },
  { name: "Pineapple", email: "pineapple@example.com", phone: "567-890-1234" },
];

const agents = [
  { name: "Apple", email: "apple@example.com", phone: "123-456-7890" },
  { name: "Banana", email: "banana@example.com", phone: "234-567-8901" },
  { name: "Blueberry", email: "blueberry@example.com", phone: "345-678-9012" },
  { name: "Grapes", email: "grapes@example.com", phone: "456-789-0123" },
  { name: "Pineapple", email: "pineapple@example.com", phone: "567-890-1234" },
];

const App = () => {
  const { toast } = useToast();
  const [openProfile, setOpenProfile] = useState(false);
  const [openProfile2, setOpenProfile2] = useState(false);
  const [checked, setChecked] = useState(null);
  const [selectedTraveller, setSelectedTraveller] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleCheckboxChange = (value) => {
    setChecked(value);
  };

  const handleTravellerSelectChange = (value) => {
    const traveller = travellers.find(
      (trav) => trav.name.toLowerCase() === value
    );
    setSelectedTraveller(traveller);
  };

  const handleAgentSelectChange = (value) => {
    const agent = agents.find((ag) => ag.name.toLowerCase() === value);
    setSelectedAgent(agent);
  };

  return (
    <div className="outer-contaier w-full flex justify-center items-center mt-20">
      <Card className="w-full max-w-2xl sm:max-w-3xl md:max-w-screen-lg p-3  px-8  flex flex-col items-center">
        <CardHeader>
          <h1 className="flex justify-center text-xl font-extrabold">
            CREATE A TOUR
          </h1>
          <p className="flex justify-center">
            Choose the type of tour you want to make
          </p>
        </CardHeader>

        <CardContent className="max-w-lg ">
          <form>
            <div className="flex mb-8  space-x-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={checked === "checkbox1"}
                  onClick={() => {
                    setOpenProfile((prev) => !prev);
                    openProfile2 && setOpenProfile2(false);
                    handleCheckboxChange("checkbox1");
                  }}
                  id="terms1"
                />
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Direct booking (No Referrals)
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={checked === "checkbox2"}
                  onClick={() => {
                    setOpenProfile2((prev) => !prev);
                    openProfile && setOpenProfile(false);
                    handleCheckboxChange("checkbox2");
                  }}
                  id="terms2"
                />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Referral Booking (Get coins for Referrals)
                </label>
              </div>
            </div>

            <div className={`${openProfile ? "" : "hidden"}`}>
              <Select onValueChange={handleTravellerSelectChange}>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Traveller" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Travellers</SelectLabel>
                    {travellers.map((traveller) => (
                      <SelectItem
                        key={traveller.name}
                        value={traveller.name.toLowerCase()}
                      >
                        {traveller.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {selectedTraveller && (
                <div className="mt-4 p-4 border rounded-lg ">
                  <div className="flex flex-col gap-3 mb-4">
                    <label htmlFor="travellerEmail">Email:</label>
                    <input
                      className="p-3 border"
                      readOnly
                      id="travellerEmail"
                      value={selectedTraveller.email}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="travellerPhone">Phone No.</label>
                    <input
                      className="p-3 border"
                      readOnly
                      id="travellerPhone"
                      value={selectedTraveller.phone}
                    />
                  </div>
                </div>
              )}
            </div>

            <div
              className={`${
                openProfile2 ? "" : "hidden"
              } grid sm:grid-cols-2 gap-5 mt-8 `}
            >
              <div className="yoyo">
                <Select onValueChange={handleTravellerSelectChange}>
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select Traveller" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Travellers</SelectLabel>
                      {travellers.map((traveller) => (
                        <SelectItem
                          key={traveller.name}
                          value={traveller.name.toLowerCase()}
                        >
                          {traveller.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {selectedTraveller && (
                  <div className="mt-4 p-4 border rounded-lg ">
                    <div className="flex flex-col gap-3 mb-4">
                      <label htmlFor="travellerEmail">Email:</label>
                      <input
                        className="p-3 border"
                        readOnly
                        id="travellerEmail"
                        value={selectedTraveller.email}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="travellerPhone">Phone No.</label>
                      <input
                        className="p-3 border"
                        readOnly
                        id="travellerPhone"
                        value={selectedTraveller.phone}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="yoyo">
                <Select onValueChange={handleAgentSelectChange}>
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select Agent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Agents</SelectLabel>
                      {agents.map((agent) => (
                        <SelectItem
                          key={agent.name}
                          value={agent.name.toLowerCase()}
                        >
                          {agent.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {selectedAgent && (
                  <div className="mt-4 p-4 border rounded-lg ">
                    <div className="flex flex-col gap-3 mb-4">
                      <label htmlFor="agentEmail">Email:</label>
                      <input
                        className="p-3 border"
                        readOnly
                        id="agentEmail"
                        value={selectedAgent.email}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="agentPhone">Phone No.</label>
                      <input
                        className="p-3 border"
                        readOnly
                        id="agentPhone"
                        value={selectedAgent.phone}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="journey-details  mt-5">
              <div className="grid sm:grid-cols-2 content-center w-full sm:gap-8 gap-4 mb-6">
                <div>
                  <label htmlFor="start-date">Journey Start Date</label>
                  <input
                    type="date"
                    id="start-date"
                    placeholder="Date"
                    className="rounded border text-slate-400 w-full p-2 mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="end-date">Journey End Date</label>
                  <input
                    type="date"
                    id="end-date"
                    placeholder="Date"
                    className="rounded border text-slate-400 w-full p-2 mt-1"
                  />
                </div>
              </div>
              <div className=" mb-6">
                <label htmlFor="destination">Tour Destination</label>
                <input
                  type="text"
                  id="start-date"
                  placeholder="Type Here"
                  className="rounded border text-slate-400 w-full p-2 mt-1"
                />
              </div>
              <div className=" mb-6">
                <label htmlFor="destination">Tour Package</label>
                <input
                  type="text"
                  id="start-date"
                  className="rounded border text-slate-400 w-full p-2 mt-1"
                />
              </div>
              <div className=" mb-6">
                <label htmlFor="destination">Amount</label>
                <input
                  type="text"
                  id="start-date"
                  placeholder="Manually type your amount"
                  className="rounded border text-slate-400 w-full p-2 mt-1"
                />
              </div>
            </div>
          </form>
          <div className="flex flex-wrap sm:justify-end gap-6 mt-4 justify-center">
            <Button type="button" size="lg" variant="outline">
              Cancel
            </Button>

            <Button
              onClick={() =>
                toast({
                  description: "Success! Changes have been saved successfully!",
                })
              }
              type="submit"
              size="lg"
              variant="outline"
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
