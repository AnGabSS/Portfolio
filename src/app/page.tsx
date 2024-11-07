import Home from "@/pages/Home";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <Home />
    </div>
  );
}
