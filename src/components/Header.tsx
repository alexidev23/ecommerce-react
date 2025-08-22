import { useState } from "react"
import { Search, ShoppingCart, Heart, User, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./mode-toggle"
import { Link } from "react-router-dom"

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const allCategories = [
    { name: "Ofertas", href: "/ofertas", highlight: true },
    { name: "Televisores", href: "/televisores" },
    { name: "Celulares", href: "/celulares" },
    { name: "Heladeras", href: "/heladeras" },
    { name: "Aires Acondicionados", href: "/aires" },
    { name: "Cocinas", href: "/cocinas" },
    { name: "Computadoras", href: "/computadoras" },
    { name: "Audio", href: "/audio" },
    { name: "Gaming", href: "/gaming" },
    { name: "Electrodomésticos", href: "/electrodomesticos" },
  ]

  const visibleCategories = allCategories.slice(0, 6)

  return (
    <header className="bg-[#153448] text-white! shadow-lg">
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-4xl font-bold text-white!">TECHSHOP</Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="w-full pl-4 pr-12 py-2 bg-input border-0 text-foreground placeholder:text-muted-foreground rounded-full"
              />
              <Button
                size="icon"
                className="absolute bg-[#02426B]! right-0 top-1/2 -translate-y-1/2 h-9 w-8 rounded-none!"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/carrito" className="text-white! hover:text-gray-400!">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Carrito</span>
              </Link>
              <Link to="/favoritos" className="text-white! hover:text-gray-400!">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favoritos</span>
              </Link>
              <Link to="/login" className="text-white! hover:text-gray-400!">
                <User className="h-5 w-5" />
                <span className="sr-only">Usuario</span>
              </Link>
              <ModeToggle />
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden text-white!">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Input type="search" placeholder="Buscar productos..." className="w-full pl-4 pr-12 py-2" />
                    <Button size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-2">
                    {allCategories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className={`px-4 py-3 rounded-lg transition-colors ${
                          category.highlight ? "text-white font-medium" : "hover:bg-muted"
                        }`}
                      >
                        {category.name}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile Icons */}
                  <div className="flex justify-around pt-4 border-t">
                    <Button variant="ghost" size="sm">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Carrito
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Heart className="h-5 w-5 mr-2" />
                      Favoritos
                    </Button>
                    <Button variant="ghost" size="sm">
                      <User className="h-5 w-5 mr-2" />
                      Usuario
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-[#02426B] border-t border-primary-foreground/20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-8 h-12">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-[#02426B]! text-sm font-medium h-auto p-0 flex items-center gap-1"
                >
                  MAS PRODUCTOS
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-[#02426B]">
                {allCategories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <a
                      href={category.href}
                      className={`w-full ${category.highlight ? "font-medium text-white!" : "text-white!"}`}
                    >
                      {category.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {visibleCategories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  category.highlight ? "text-green-500! font-semibold" : "text-white!"
                }`}
              >
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
