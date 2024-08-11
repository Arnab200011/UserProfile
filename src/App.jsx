import { Card, CardContent, CardHeader } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Form } from "./components/ui/form";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Textarea } from "./components/ui/textarea";

const UserProfile = () => {
  return (
    <Card className="w-full max-w-2xl sm:max-w-3xl md:max-w-screen-lg p-3 shadow-xl">
      <CardHeader className="p-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="flex items-center gap-5">
            <img
              src={"/assets/default_user.svg"}
              alt={"User Image"}
              width={100}
              height={100}
              className="rounded-full bg-slate-500"
            />
            <div className="flex gap-3 flex-col sm:flex-row">
              <Button size={"lg"} variant={"outline"} className="sm:w-full">
                <span className="block sm:hidden">Upload</span>
                <span className="hidden sm:block">Upload new picture</span>
              </Button>
              <Button size={"md"} variant={"outline"}>
                Remove
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-3 flex-grow">
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
                <label htmlFor="idType" className="text-sm font-medium">
                  ID Type
                </label>
                <Select
                  onValueChange={(value) => handleSelectChange("idType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VOTER_ID">Voter ID Card</SelectItem>
                    <SelectItem value="PASSPORT">Passport ID</SelectItem>
                    <SelectItem value="DRIVING_LICENSE">
                      Driving License
                    </SelectItem>
                    <SelectItem value="AADHAAR">Aadhaar Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-grow">
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="lastName" name="lastName" placeholder="Last name" />
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
              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="idNumber" className="text-sm font-medium">
                  ID Number
                </label>
                <Input id="idNumber" name="idNumber" placeholder="ID number" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="address" className="text-sm font-medium">
              Address
            </Label>
            <Textarea id="address" name="address" placeholder="Address" />
          </div>
          <div className="flex flex-wrap sm:justify-end gap-6 mt-4 justify-center">
            <Button type="button" size={"lg"} variant={"outline"}>
              Cancel
            </Button>
            <Button type="submit" size={"lg"} variant={"outline"}>
              Confirm
            </Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
