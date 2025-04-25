import Image from 'next/image';
const testimonials = [
  {
    name: 'Sophie Lee',
    role: 'Marketing Manager',
    text: 'TaskFlow has transformed how we collaborate. The UI is clean, and our team productivity has doubled.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Raj Patel',
    role: 'Startup Founder',
    text: 'We use TaskFlow daily. Simple to use, and it keeps everything organized!',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Emily Chen',
    role: 'Product Designer',
    text: 'From chaos to clarity—TaskFlow made our design sprint run smoothly!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">What People Are Saying</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition text-left"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={t.image}
                alt={t.name}
                className="rounded-full"
                width={48}
                height={48}
              />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
