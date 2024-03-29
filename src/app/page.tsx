"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { fetchAllHotels } from "@/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState([]);
  const Router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const hotels = await fetchAllHotels();
      if (hotels?.success) {
        setData(hotels.data);
      }
    };

    fetchData();
  }, []);

  const handleHotelClick = (id) => {
    Router.push(`/hotel/${id}`);
  };

  console.log(data, "Data");

  return (
    <div className="flex w-full mt-14 gap-4 flex-wrap">
      {data.map((item) => (
        <Card
          onClick={() => handleHotelClick(item.id)}
          key={item.id}
          className="w-[16.6%] cursor-pointer"
        >
          <CardHeader>
            <CardTitle className="text-lg text-nowrap">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <div>
              <Image
                src={item.image}
                alt=""
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
