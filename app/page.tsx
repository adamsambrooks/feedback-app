import FeedbackForm from '@/components/FeedbackForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            We value your feedback
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Please let us know how we did.
          </p>
        </div>
        <FeedbackForm />
      </div>
    </main>
  )
}
