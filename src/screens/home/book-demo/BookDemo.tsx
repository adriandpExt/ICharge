import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function BookDemoCard() {
  return (
    <Card className="container mx-auto mb-16 w-full max-w-screen-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-bold">
          <MapPin className="h-6 w-6 text-green-300" />
          Book a demo!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="reason" className="text-sm font-medium">
            What brings you here today?*
          </label>
          <Select>
            <SelectTrigger id="reason">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="product-info">Product Information</SelectItem>
              <SelectItem value="pricing">Pricing Inquiry</SelectItem>
              <SelectItem value="demo">Request Demo</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="text-sm text-gray-500">
          We need the contact information you provide to us to contact you about
          our products and services. You may unsubscribe from these
          communications at any time. For information on how to unsubscribe, as
          well as our privacy practices and commitment to protecting your
          privacy, please review our Privacy Policy.
        </p>
        <div className="flex h-[78px] items-center justify-center rounded bg-gray-100 text-sm text-gray-400">
          reCAPTCHA placeholder
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-700 hover:bg-green-600">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
