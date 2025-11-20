"use client";

import {
  ChefHat,
  Copy,
  QrCode,
} from "lucide-react";
import Image from "next/image";
import { menuStatistik, menuLink } from "@/src/data/dashboard/dataMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {

  const {data: session, status} = useSession();
  const router = useRouter();
  // console.log(session)
  // console.log(status)

  // useEffect(() => {
  //   if(status === 'unauthenticated') {
  //     router.push("/login")
  //   }
  // }, [status, router])

  return (
    <div className="p-4 flex">
      <div className="w-1/2 bg-white p-4 flex flex-col gap-2 rounded-xl">
        {/* Statistik */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Statistik</h3>

          <div className="bg-secondary text-white p-2 rounded-xl">
            <div className="flex gap-2">
              <ChefHat />
              <p>Menu saat ini</p>
            </div>

            <p className="ml-1">6/10</p>
          </div>

          <div className="flex gap-2">
            {menuStatistik.map((item, index) => {
              return (
                <div
                  className="bg-third text-white p-2 rounded-xl flex-1"
                  key={index}
                >
                  <div className="flex gap-2">
                    {item.logo}
                    <p>{item.label}</p>
                  </div>

                  <p className="ml-1 text-sm">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Link */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Link</h3>

          <div className="flex gap-2">
            {menuLink.map((item, index) => {
              return (
                <div
                  className="bg-third text-white p-2 rounded-xl flex-1"
                  key={index}
                >
                  <div className="flex justify-between">
                    <p>{item.label}</p>
                    {item.logo}
                  </div>

                  <p className="text-sm">{item.href}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grafik Pengunjung */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Grafik Pengunjung</h3>

          <Image
            src={"/grafik.png"}
            width={330}
            height={330}
            alt="grafik pengunjung"
            className="mx-auto"
          ></Image>
        </div>
      </div>

      <div className="flex-1">
        <div className="w-2/3 bg-third/20 px-4 py-2 flex gap-2 rounded-2xl text-sm justify-center mx-auto mt-3">
          <p className="font-semibold">catalog.daftarmenu.com/namiya</p>
          <Copy width={20} />
          <QrCode width={20} />
        </div>

        <div className="mx-auto absolute bottom-0 right-40">
          <Image
            src={"/handphone.png"}
            width={250}
            height={200}
            alt="handphone"
          />
        </div>
      </div>
    </div>
  );
}
