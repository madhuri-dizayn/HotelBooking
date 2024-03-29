"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HotelDetailsClient from "@/components/hotel/HotelDetails";
import Image from "next/image";
import { fetchHotelById } from "@/actions";

interface HotelDetail {
  id: string;
  title: string;
  description: string;
  city: string;
  LocationDes: string;
  image: string;
}

const HotelDetail = () => {
  const Params = useParams();
  const { hotelId } = Params;
  const [hotelDetail, setHotelDetail] = useState<HotelDetail | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchHotelById(hotelId);
      if (data?.success) {
        setHotelDetail(data.data);
      }
    }
    fetchData();
  }, [hotelId]);

  if (!hotelDetail) {
    return <div>Loading...</div>; // You might want to show a loading indicator while fetching data
  }
  // const [hotelDetail, setHotelDetail] = useState<{ id: string } | undefined>();

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetchHotelById(hotelId);
  //     if (data?.success) {
  //       console.log(data.data, "data");
  //       setHotelDetail(data.data);
  //     }
  //   }
  //   fetchData();
  // }, []);

  console.log(hotelDetail, "data111");
  return (
    <div className="flex flex-col gap-6 pb-2 mt-8">
      <div className="aspect-square overflow-hidden relative w-full h-[400px]">
        <Image fill src={hotelDetail.image} alt="" className="object-cover" />
      </div>

      <div>
        <h3 className="font-semibold text-xl">{hotelDetail.title}</h3>
      </div>
      <div>
        <h3 className="font-semibold text-xl">{hotelDetail.description}</h3>
      </div>

      <div>
        <h3 className="font-semibold text-xl">{hotelDetail.city}</h3>
        <h3 className="font-semibold text-xl">{hotelDetail.LocationDes}</h3>
      </div>
    </div>
  );
};

export default HotelDetail;
