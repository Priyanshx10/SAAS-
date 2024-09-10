export const dynamic = 'force-dynamic'
import Documents from '@/components/Documents'

const Dashboard = () => {
  return (
    <div className="mx-auto py-4 mt-16 h-full">
      <h1 className="text-3xl p-5 font-medium text-blue-700">Dashboard</h1>

    <Documents />
    </div>
  )
}

export default Dashboard