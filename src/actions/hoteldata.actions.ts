import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  getDoc,
  updateDoc,
  DocumentReference,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase";

export const addHotel = async (data: any) => {
  try {
    const hotelRef = collection(db, "hotels");
    const res = await addDoc(hotelRef, data);

    if (res)
      return {
        success: true,
      };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

export const fetchAllHotels = async () => {
  const allhotelRef = collection(db, "hotels");
  try {
    const res = await getDocs(allhotelRef);
    const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    console.log(res, "reshid");

    if (res)
      return {
        success: true,
        data: data,
      };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

export const fetchHotelById = async (id: any) => {
  const hotelRef = doc(db, "hotels", id);
  try {
    const res = await getDoc(hotelRef);
    if (res.exists()) {
      return {
        success: true,
        data: { ...res.data(), id: res.id },
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};
