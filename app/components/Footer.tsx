export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-gray-600 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-2">TaskFlow</h3>
          <p className="text-sm">Powerful task management for modern teams.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#">
              <span className="hover:text-indigo-600">🌐</span>
            </a>
            <a href="#">
              <span className="hover:text-indigo-600">🐦</span>
            </a>
            <a href="#">
              <span className="hover:text-indigo-600">📸</span>
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs text-center mt-8">
        &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
      </p>
    </footer>
  );
}
