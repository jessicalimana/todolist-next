// ✅ Importa o componente ToDoList
import ToDoList from "@/components/ToDoList"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* ✅ Renderiza a ToDoList */}
      <ToDoList />
    </main>
  )
}
