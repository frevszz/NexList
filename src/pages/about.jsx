export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="hero text-center justify-center px-5 sm:px-5 xl:px-30 py-5 sm:py-4 max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-3xl font-bold sm:font-medium mt-1 sm:mt-5">
            About NexList
          </h1>
          <p className="text-m sm:text-2xl font-medium opacity-50 mt-2">
            NexList is a task management web application designed to help users
            organize, track, and complete their daily tasks efficiently. With a
            clean and intuitive interface, NexList enhances productivity by
            providing a simple and structured way to manage to-do lists.
          </p>
        </div>
      </main>
    </div>
  );
}
