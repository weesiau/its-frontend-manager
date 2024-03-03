import NavigationBar from "@/components/navigation-bar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    redirect("/");
  }
  return (
    <main>
      <NavigationBar
        type="admin"
        user={user}
      ></NavigationBar>
      {children}
    </main>
  );
}
