import Profile from "../components/profile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-align: center; flex max-h-screen flex-col items-center justify-between p-24" style={{ background: 'linear-gradient(to right, #eee, #ccc)' }}>
      <div className="mb-32 text-center lg:max-w-5xl lg:mb-0 lg:text-left">
        <h1 style={{ color: 'black' }}>Ilmuwan yang Luar Biasa</h1>
      </div>

      <div className="flex justify-center lg:justify-start"> {/* Use a flex container */}
        <Profile />
        <Profile />
        <Profile />
      </div>
    </main>
  );
}