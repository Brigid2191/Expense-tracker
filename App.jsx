import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import SearchBar from './components/SearchBar'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', category: 'Food', amount: 45 },
    { id: 2, description: 'Internet Bill', category: 'Utilities', amount: 70 },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const handleAddExpense = (newExpense) => {
    const expenseWithId = { ...newExpense, id: Date.now() }
    setExpenses([...expenses, expenseWithId])
  }

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id))
  }

  const filteredExpenses = expenses.filter(exp =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Expense Tracker</h1>
        
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
      </div>
    </div>
  )
}

export default App
