"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import ChatPage from "./chat/page"
import Link from "next/link";



export default function Home() {

 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-top justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-right">
          Welcome to Random Chits!
        </h1>
        <p className="text-lg text-center sm:text-left">
          This is a simple web app that allows you to generate random chits and shits.
        </p>
        <Link href="/chat">

        <Button variant="outline" >Explore and find what they say!!</Button>

        </Link>

            
        

       

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
         
        </div>
      </main>
      
       
       
    </div>
  );
}
