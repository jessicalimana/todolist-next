"use client"  // ✅ Importante para usar hooks

import { useState } from "react"
import { Button } from "@/components/ui/button"  // ✅ Botão shadcn
import { toast } from "sonner"  // ✅ Notificação
import { Trash2, Plus } from "lucide-react"  // ✅ Ícones de adicionar e excluir

export default function ToDoList() {
  const [tarefas, setTarefas] = useState<string[]>([])
  const [texto, setTexto] = useState<string>("")

  function adicionarTarefa() {
    if (texto.trim() === "") {
      toast.error("Digite uma tarefa!")  // ✅ Notifica erro
      return
    }

    setTarefas([...tarefas, texto])
    setTexto("")
    toast.success("Tarefa adicionada!")  // ✅ Notifica sucesso
  }

  function removerTarefa(index: number) {
    const novasTarefas = tarefas.filter((_, i) => i !== index)
    setTarefas(novasTarefas)
    toast("Tarefa removida!")  // ✅ Notificação simples
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-4">
      <h1 className="text-2xl font-bold text-center">📋 Minha Lista de Tarefas</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite sua tarefa"
          className="border rounded p-2 flex-1"
        />

        <Button onClick={adicionarTarefa}>
          <Plus className="w-4 h-4 mr-1" />  {/* ✅ Ícone de adicionar */}
          Adicionar
        </Button>
      </div>

      <ul className="space-y-2">
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            className="p-2 bg-gray-100 rounded shadow flex justify-between items-center"
          >
            <span>{tarefa}</span>

            <Button
              variant="outline"
              size="icon"
              onClick={() => removerTarefa(index)}
            >
              <Trash2 className="w-4 h-4 text-red-500" />  {/* ✅ Ícone de lixeira */}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
