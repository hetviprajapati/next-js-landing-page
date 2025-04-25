export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-indigo-100 to-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Streamline Your Workflow with TaskFlow
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600">
        Powerful task management, reimagined for remote teams.
      </p>
      <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
        Start Free Trial
      </button>
    </section>
  );
}
