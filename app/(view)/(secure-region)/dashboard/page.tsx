import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard ",
  description: "Assignment for my recruitment",
};

export default function Dashboard() {
  return (
    <div className={`p-4 bg-white flex justify-center  min-h-screen`}>
      <h1 className="text-4xl mt-10">Welcom to Dashboard Panel</h1>
    </div>
  );
}
