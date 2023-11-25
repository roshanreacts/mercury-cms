import Image from "next/image";
import { get } from "../actions";

export default async function Home() {
  const users = await get("User", {});
  console.log(users);
  return <main>This is users page</main>;
}
