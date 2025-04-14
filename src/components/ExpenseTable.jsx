function ExpenseTable({ expenses, onDelete }) {
    return (
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Description</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp.id}>
              <td className="border p-2">{exp.description}</td>
              <td className="border p-2">{exp.category}</td>
              <td className="border p-2">${exp.amount.toFixed(2)}</td>
              <td className="border p-2">
                <button onClick={() => onDelete(exp.id)} className="bg-red-500 text-white px-2 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  
  export default ExpenseTable
  