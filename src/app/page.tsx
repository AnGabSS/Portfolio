import Header from "@/components/Header/Header";
import Home from "@/components/Home";
import Stacks from "@/components/Stacks/Stacks";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col h-screen justify-center align-middle gap-10 row-start-2 p-8">
        <Home />
        <Stacks />
      </main>
    </div>
  );
}
