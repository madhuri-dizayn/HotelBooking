"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";

import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "../ui/use-toast";
import Image from "next/image";
import useLoaction from "@/hooks/useLocation";
import { addHotel } from "@/actions";
import { Toast } from "../ui/toast";
import { useRouter } from "next/navigation";

interface FormData {
  title: string;
  description: string;
  image: string;
  country: string;
  city: string;
  LocationDes: string;
  // Add more fields as needed
}

const uploader = Uploader({
  apiKey: "free", // Get production API keys from Bytescale
});

const options = { multi: true };

const handleImageDelete = (image: string) => {
  console.log("Deleting image: ", image);
};

const AddHotelForm = () => {
  const [image, setImage] = useState<string | undefined>();

  const [imageDeleting, setImageDeleting] = useState(false);
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const toast = useToast();
  const Router = useRouter();

  const {
    getAllCountries,
    getCountryByCode,
    getStateByCode,
    getCountryStates,
  } = useLoaction();

  const countries = getAllCountries();
  const cities = getCountryStates("IN");
  const states1 = getStateByCode("MH", "IN");
  const form = useForm();
  const hotel = null;

  // console.log(form, "Form");

  // async function onSubmit(data: FormData) {
  //   if (
  //     !data.title ||
  //     !data.description ||
  //     !data.image ||
  //     !data.country ||
  //     !data.city ||
  //     !data.LocationDes
  //   ) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }

  //   const hotelres = await addHotel(data);
  //   if (hotelres?.success) {
  //     alert("Hotel added successfully");
  //     Router.push("/");
  //   } else {
  //     alert("Hotel not added");
  //   }
  // }

  async function onSubmit(data: any) {
    const formData: FormData = {
      title: data.title,
      description: data.description,
      image: data.image,
      country: data.country,
      city: data.city,
      LocationDes: data.LocationDes,
    };

    if (
      !formData.title ||
      !formData.description ||
      !formData.image ||
      !formData.country ||
      !formData.city ||
      !formData.LocationDes
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const hotelres = await addHotel(formData);
    if (hotelres?.success) {
      alert("Hotel added successfully");
      Router.push("/");
    } else {
      alert("Hotel not added");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3>{hotel ? "Update Your hotel" : "Describe your hotel"}</h3>
        <div className="flex gap-10">
          <div className="flex-1 flex flex-col gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => {
                console.log(field, "field");
                return (
                  <FormItem>
                    <FormLabel>Hotel Title *</FormLabel>
                    <FormDescription>Provide your hotel name</FormDescription>
                    <FormControl>
                      <Input placeholder="Beach Hotel" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hotel Description *</FormLabel>
                  <FormDescription>
                    Provide a detailed of your hotel
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder="Beach Hotel is parked awesome!"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel>Choose Anenitities</FormLabel>
              <FormDescription>
                Choose Amenitities popular in your hotel
              </FormDescription>
              <div className="grid grid-cols-2 gap-4 mt-5">
                <FormField
                  control={form.control}
                  name="gym"
                  render={({ field }) => (
                    <FormItem className="flex items-end gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Gym</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pool"
                  render={({ field }) => (
                    <FormItem className="flex items-end gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Pool</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="laundary"
                  render={({ field }) => (
                    <FormItem className="flex items-end gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Laundary</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="spa"
                  render={({ field }) => (
                    <FormItem className="flex items-end gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Spa</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="shooping"
                  render={({ field }) => (
                    <FormItem className="flex items-end gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Shooping</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="resturant"
                  render={({ field }) => (
                    <FormItem className="flex items-end gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Resturant</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-14">
                  <FormLabel>Upload an Image *</FormLabel>
                  <FormDescription>
                    choose a Upload a beautiful image of your hotel
                  </FormDescription>
                  <FormControl>
                    {image ? (
                      <>
                        <div className="relative max-w-[400px] min-w-[200px] max-h-[400px] min-h-[200px] mt-6">
                          <Image
                            src={image}
                            alt="hotel image"
                            objectFit="cover"
                            width={400}
                            height={400}
                          />
                          <Button
                            onClick={() => handleImageDelete(image)}
                            type="button"
                            size="icon"
                            variant="ghost"
                            className="absolute"
                          >
                            {/* {imageDeleting ? "Deleting..." : "Delete"} */}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col items-right  mt-4 ml-[-10px]">
                          <UploadDropzone
                            uploader={uploader}
                            options={options}
                            onUpdate={(files) => {
                              setImage(files[0].fileUrl);
                              form.setValue("image", files[0].fileUrl);
                            }}
                            width="600px"
                            height="375px"
                          />
                        </div>
                      </>
                    )}
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Country *</FormLabel>
                    <FormDescription>Select your country</FormDescription>

                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue="India"
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="select a country"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => {
                          return (
                            <SelectItem
                              key={country.isoCode}
                              value={country.isoCode}
                            >
                              {country.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select State *</FormLabel>
                    <FormDescription>Select your State</FormDescription>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue="India"
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="select a country"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => {
                          return (
                            <SelectItem
                              key={state.isoCode}
                              value={state.isoCode}
                            >
                              {state.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select City *</FormLabel>
                    <FormDescription>Select your City</FormDescription>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue="India"
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="select a country"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => {
                          return (
                            <SelectItem key={city.name} value={city.name}>
                              {city.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="LocationDes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location Description *</FormLabel>
                    <FormDescription>
                      Provide your hotel location in detail
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        placeholder="Beach Hotel is parked awesome!"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2 justify-between flex-wrap">
                <Button>Create Hotel</Button>
              </div>
            </div>
          </div>
        </div>

        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
};

export default AddHotelForm;
