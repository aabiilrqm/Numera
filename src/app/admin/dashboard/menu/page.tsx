"use client"

export default function AdminMenuPage() {

  const revalidate = async () => {
    await fetch('http://localhost:3000/api/revalidate?tag=menu', {
      method: 'POST'
    })
  }

  return (
    <div className="p-4">
      <button className="p-2 bg-third text-white" onClick={() => revalidate()}>Refresh</button>
    </div>
  )
}