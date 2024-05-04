import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {

  const userName: string = "ivandjoh";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button variant={"outline"}>Hello, {userName}</Button>
      </div>
    </main>
  );
}

export default Home;