"use client";
import { useQuery } from "@tanstack/react-query";
import EmpEditCard from "./EmpEditCard";
import Loading from "./loading";
import { fetcher } from "@/lib/helpers/fetcher";

export default function EmployeesEditPage({
  params,
}: {
  params: { slug: string };
}) {
  const id = params.slug;
  const { data, isError, isLoading, refetch, error } = useQuery({
    queryKey: ["employee", { id }],
    queryFn: () =>
      fetcher(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/employees/authorised/${id}`,
        { credentials: "include" }
      ),
  });

  if (isLoading || !data) {
    return <Loading />;
  }

  if (isError) {
    throw new Error(error.message);
  }

  console.log("edit data", data);

  return (
    <section className={` py-4 `}>
      <title>Edit Employee | Assignment</title>
      <div className={` px-4 mx-auto `}>
        <EmpEditCard empData={data.data} />
      </div>
    </section>
  );
}
