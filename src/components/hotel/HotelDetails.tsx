"use client";

import React from "react";
import useLoaction from "@/hooks/useLocation";
import Image from "next/image";

const HotelDetailsClient = ({ hotel }) => {
  const { getCountryByCode } = useLoaction();
  const country = getCountryByCode(hotel.country);

  return <div></div>;
};

export default HotelDetailsClient;
