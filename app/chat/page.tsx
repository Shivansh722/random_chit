import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
 import { useState } from "react"


export default function ChatPage() {

    const [message, setMessage] = useState<string>("")

    return (
        //put this div at the bottom of the page
       
        <div className="grid grid-rows-[20px_1fr_20px] items-top justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Textarea />
            <Button>Send</Button>
            </div>
        


    )
}