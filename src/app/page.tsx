export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 md:flex-row">
      <div className="flex flex-col items-center w-full max-w-4xl md:flex-row">
        <div className="flex flex-col items-center justify-center w-full p-4 md:w-1/2">
          <h1 className="text-4xl font-bold text-green-600">Family Traditions</h1>
          <p className="mt-4 text-xl text-gray-700">Share and pass down your family traditions and recipes.</p>
        </div>
        <div className="w-full max-w-sm p-8 mt-6 bg-white rounded-lg shadow-md md:mt-0 md:w-1/2">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email or username
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email or phone number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button type="submit" className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
              Log In
            </button>
            <a href="#" className="block mt-2 text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
            <hr className="my-6 border-gray-300" />
            <button type="button" className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
              Create new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
