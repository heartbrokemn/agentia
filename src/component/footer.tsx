// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-black text-white py-8 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">Made by Top-Up Coder😎</p>
          <div className="mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=61569995949355"
              className="text-white mx-2 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@shahzainshoaibkhankhan"
              className="text-white mx-2 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.linkedin.com/in/shoaib-khan-0b599b293/"
              className="text-white mx-2 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
             Linkdin
            </a>
          </div>
        </div>
      </footer>
    );
  }
  