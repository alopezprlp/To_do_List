import Nav from "./components/Nav";
import Todo from "./components/Todo";
export default function App() {
  return (
    <div className="text-3xl font-bold underline w-full h-screen bg-gray-200">
      <Nav />
      <Todo/>
    </div>
  );
}
