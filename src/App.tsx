import { Home } from "@/features/home/pages";
import "@/shared/styles/global.css";
import { QueryClient } from "@tanstack/react-query";
import { getLastTweet } from "./api/actions";
import { tweetQueryKey } from "./shared/hooks";

const queryClient = new QueryClient();

queryClient.prefetchQuery({
  queryKey: tweetQueryKey,
  queryFn: () => getLastTweet(),
});

function App() {
  return <Home />;
}

export default App;
