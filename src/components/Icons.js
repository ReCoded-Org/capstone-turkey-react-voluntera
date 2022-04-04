import github from '../assets/github.svg';

export default function Linkedin() {
  return (
    <div className="w-10 h-10 flex items-center justify-center p-2 rounded-full bg-purple-900">
      <svg
        className="w-6 h-6 text-white fill-current  "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    </div>
  );
}

export function Facebook() {
  return (
    <div className="w-10 h-10 flex items-center justify-center p-2 rounded-full bg-purple-900">
      <svg
        className="w-6 h-6 text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </div>
  );
}

export function Github() {
  return (
    <div className="w-10 h-10 flex items-center justify-center p-1 rounded-full bg-purple-900">
      <img src={github} alt="github" className="" />
    </div>
  );
}
