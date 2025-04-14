import { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || !category || !amount) return

    onAddExpense({ description, category, amount: parseFloat(amount) })
    setDescription('')
    setCategory('')
    setAmount('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
