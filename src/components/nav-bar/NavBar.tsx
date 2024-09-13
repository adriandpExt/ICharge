import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, Menu, Moon, Smartphone, Sun } from "lucide-react";

export const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would typically implement the actual dark mode toggle logic
  };
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <svg
            className="mr-2 h-8 w-8 text-green-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" />
          </svg>
          <span className="text-xl font-bold">icharge</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center space-x-6 md:flex">
          <a href="#" className="text-sm font-medium">
            How To
          </a>
          <a href="#" className="text-sm font-medium">
            Features
          </a>
          <a href="#" className="flex items-center text-sm font-medium">
            Partner with Us
            <ChevronDown className="ml-1 h-4 w-4" />
          </a>
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <Button variant="outline" size="sm">
            <Smartphone className="mr-2 h-4 w-4" />
            Android
          </Button>
          <Switch
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
            className="data-[state=checked]:bg-green-500"
          />
          {isDarkMode ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium">
                How To
              </a>
              <a href="#" className="text-sm font-medium">
                Features
              </a>
              <a href="#" className="text-sm font-medium">
                Partner with Us
              </a>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Android
              </Button>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={toggleDarkMode}
                  className="data-[state=checked]:bg-green-500"
                />
                <span className="text-sm font-medium">
                  {isDarkMode ? "Dark Mode" : "Light Mode"}
                </span>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
