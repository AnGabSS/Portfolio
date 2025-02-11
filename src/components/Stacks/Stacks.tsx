import { SiTypescript } from "react-icons/si";

const Stacks = () => {
  return (
    <div className="flex flex-col justify-center align-middle mt-10">
      <h1 className="text-6xl font-bold">Stacks</h1>
      <div className="flex flex-row justify-center align-middle gap-10">
        <div className="flex flex-col justify-center align-middle">
          <h2 className="text-4xl font-bold">Frontend</h2>
          <div className="flex flex-row justify-center align-middle gap-4">
            <SiTypescript className="text-4xl" />
            <h3 className="text-2xl font-bold">Typescript</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
