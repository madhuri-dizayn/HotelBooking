"use client";
import React from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../SearchInput";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";

const Navbar = () => {
  const router = useRouter();
  const { userId } = useAuth();

  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="https://marketplace.canva.com/EAE0d_FW6ZA/1/0/1600w/canva-retro-vector-gold-frames-luxury-decorative-logo-template-uDFt-cAE2ug.jpg"
              alt="logo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <div className="font-bold text-xl">HotelBooking</div>
          </div>
          <SearchInput />
          <div className="flex gap-3 items-center">
            <div>
              <ModeToggle />
              <NavMenu />
            </div>
            <UserButton afterSignOutUrl="/" />
            {!userId && (
              <>
                <Button
                  onClick={() => router.push("/sign-in")}
                  variant="outline"
                  size="sm"
                >
                  Sign in
                </Button>
                <Button onClick={() => router.push("/sign-up")} size="sm">
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
