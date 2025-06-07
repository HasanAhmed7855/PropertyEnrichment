import Link from "next/link";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <div>
          <h1>BOMBOCLART</h1>
        </div>
      </main>
    </HydrateClient>
  );
}
