const features = [
  {
    title: 'Real-Time Collaboration',
    icon: '🤝',
    desc: 'Stay connected with your team in real time.',
  },
  {
    title: 'Task Boards',
    icon: '📋',
    desc: 'Organize work visually with drag-and-drop boards.',
  },
  {
    title: 'Deadline Alerts',
    icon: '⏰',
    desc: 'Never miss a task deadline again.',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Features You&apos;ll Love</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
