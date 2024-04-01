"use client";

import React from "react";
import useLoaction from "@/hooks/useLocation";
import Image from "next/image";

interface Hotel {
  country: string;
  // Add more properties as needed
}

const HotelDetailsClient = ({ hotel }: { hotel: Hotel }) => {
  const { getCountryByCode } = useLoaction();
  const country = getCountryByCode(hotel.country);

  return <div></div>;
};

export default HotelDetailsClient;
